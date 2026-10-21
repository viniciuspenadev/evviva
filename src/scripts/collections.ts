const wheel = document.querySelector<HTMLElement>('[data-collection-wheel]');

if (wheel) {
  const orbit = wheel.querySelector<HTMLElement>('[data-wheel-orbit]')!;
  const options = Array.from(wheel.querySelectorAll<HTMLAnchorElement>('[data-wheel-option]'));
  const photos = Array.from(wheel.querySelectorAll<HTMLElement>('[data-wheel-photo]'));
  const link = wheel.querySelector<HTMLAnchorElement>('[data-wheel-link]')!;
  const pause = wheel.querySelector<HTMLButtonElement>('[data-wheel-pause]')!;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const wrap = (value: number) => ((value % options.length) + options.length) % options.length;
  let rotation = 0;
  let target = 0;
  let selected = -1;
  let frame = 0;
  let lastFrame = 0;
  let dragging = false;
  let dragStart = 0;
  let dragRotation = 0;
  let dragDistance = 0;
  let touchDrag = false;
  let paused = reduced.matches;
  let visible = false;
  let hovered = false;
  let focused = false;
  let wheelTimeout = 0;
  let autoplay: ReturnType<typeof setInterval> | undefined;

  function render() {
    const radius = orbit.clientHeight * .48;
    options.forEach((option, index) => {
      const offset = wrap(index - rotation + options.length / 2) - options.length / 2;
      const angle = offset * 38;
      const radians = angle * Math.PI / 180;
      const distance = Math.abs(offset);
      const x = -radius * .25 * (1 - Math.cos(radians));
      const y = radius * Math.sin(radians);
      // A vertical cylinder: names roll toward the viewer and recede above/below.
      const z = radius * (Math.cos(radians) - 1) - distance * 45;
      option.style.transform = `translate3d(${x}px, ${y}px, ${z}px) translateY(-50%) rotateX(${-angle}deg) rotateZ(${angle * .15}deg) scale(${1 - distance * .09})`;
      option.style.opacity = String(Math.pow(Math.max(0, 1 - distance / 1.95), 1.1));
      option.style.pointerEvents = distance > 1.65 ? 'none' : '';
      option.style.zIndex = String(Math.round((2 - distance) * 10));
    });
    const next = wrap(Math.round(rotation));
    if (next === selected) return;
    selected = next;
    options.forEach((option, index) => option.setAttribute('aria-selected', String(index === selected)));
    photos.forEach((element, index) => {
      element.classList.toggle('is-active', index === selected);
      if (index === selected) element.removeAttribute('aria-hidden');
      else element.setAttribute('aria-hidden', 'true');
    });
    link.href = options[selected].href;
    link.setAttribute('aria-label', `Conhecer a coleção ${options[selected].dataset.name}`);
    orbit.setAttribute('aria-activedescendant', options[selected].id);
  }

  function tick(now: number) {
    const delta = Math.min(40, now - (lastFrame || now - 16));
    lastFrame = now;
    rotation += (target - rotation) * (1 - Math.exp(-delta / (dragging ? 65 : 180)));
    if (Math.abs(target - rotation) < .001) rotation = target;
    render();
    if (rotation !== target) frame = requestAnimationFrame(tick);
    else { frame = 0; lastFrame = 0; }
  }

  function animateTo(value: number) {
    target = value;
    if (reduced.matches) { cancelAnimationFrame(frame); frame = 0; rotation = target; render(); }
    else if (!frame) frame = requestAnimationFrame(tick);
  }

  function syncAutoplay() {
    clearInterval(autoplay);
    autoplay = undefined;
    if (!paused && !reduced.matches && visible && !hovered && !focused && !document.hidden && !dragging) {
      autoplay = setInterval(() => animateTo(Math.round(target) + 1), 5200);
    }
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', paused ? 'Ativar rotação automática' : 'Pausar rotação automática');
    pause.textContent = paused ? 'Retomar animação' : 'Pausar animação';
  }

  function userMove(value: number) {
    paused = true;
    syncAutoplay();
    animateTo(value);
  }

  function selectIndex(index: number) {
    let delta = index - wrap(Math.round(target));
    if (delta > options.length / 2) delta -= options.length;
    if (delta < -options.length / 2) delta += options.length;
    userMove(Math.round(target) + delta);
  }

  options.forEach((option, index) => {
    option.tabIndex = -1;
    option.addEventListener('click', event => {
      event.preventDefault();
      if (dragDistance > 5) return;
      selectIndex(index);
      orbit.focus({ preventScroll: true });
    });
    option.draggable = false;
  });

  orbit.tabIndex = 0;
  orbit.addEventListener('keydown', event => {
    const directions: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (event.key in directions) { event.preventDefault(); userMove(Math.round(target) + directions[event.key]); }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      selectIndex(event.key === 'End' ? options.length - 1 : 0);
    }
    if (event.key === 'Enter') { event.preventDefault(); link.click(); }
    if (event.key === ' ') { event.preventDefault(); paused = !paused; syncAutoplay(); }
  });

  orbit.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    dragging = true;
    touchDrag = event.pointerType === 'touch';
    dragStart = touchDrag ? event.clientX : event.clientY;
    dragRotation = rotation;
    dragDistance = 0;
    syncAutoplay();
    wheel!.setAttribute('data-dragging', '');
  });
  orbit.addEventListener('pointermove', event => {
    if (!dragging) return;
    const distance = dragStart - (touchDrag ? event.clientX : event.clientY);
    dragDistance = Math.max(dragDistance, Math.abs(distance));
    if (dragDistance < 5) return;
    if (!orbit.hasPointerCapture(event.pointerId)) orbit.setPointerCapture(event.pointerId);
    paused = true;
    animateTo(dragRotation + distance / 100);
  });
  function endPointer(event: PointerEvent) {
    if (!dragging) return;
    dragging = false;
    wheel!.removeAttribute('data-dragging');
    if (orbit.hasPointerCapture(event.pointerId)) orbit.releasePointerCapture(event.pointerId);
    animateTo(Math.round(target));
    syncAutoplay();
  }
  orbit.addEventListener('pointerup', endPointer);
  orbit.addEventListener('pointercancel', endPointer);
  orbit.addEventListener('lostpointercapture', endPointer);
  window.addEventListener('pointerup', endPointer);
  // Scroll the page normally unless the visitor explicitly focused the selector.
  orbit.addEventListener('wheel', event => {
    if (document.activeElement !== orbit || event.ctrlKey || event.metaKey || reduced.matches) return;
    event.preventDefault();
    paused = true;
    syncAutoplay();
    animateTo(target + Math.max(-.6, Math.min(.6, event.deltaY * .004)));
    clearTimeout(wheelTimeout);
    wheelTimeout = window.setTimeout(() => animateTo(Math.round(target)), 140);
  }, { passive: false });

  pause.addEventListener('click', () => { paused = !paused; syncAutoplay(); });
  [orbit, link].forEach(surface => {
    surface.addEventListener('mouseenter', () => { hovered = true; syncAutoplay(); });
    surface.addEventListener('mouseleave', () => { hovered = false; syncAutoplay(); });
  });
  wheel.addEventListener('focusin', () => { focused = true; syncAutoplay(); });
  wheel.addEventListener('focusout', event => { focused = wheel.contains(event.relatedTarget as Node); syncAutoplay(); });
  document.addEventListener('visibilitychange', syncAutoplay);
  reduced.addEventListener('change', () => { paused = reduced.matches; animateTo(Math.round(target)); syncAutoplay(); });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; syncAutoplay(); }, { threshold: .25 }).observe(orbit);
  new ResizeObserver(render).observe(orbit);
  wheel.setAttribute('data-ready', '');
  render();
  syncAutoplay();
}
