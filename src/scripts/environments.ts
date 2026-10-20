export {};

document.querySelectorAll<HTMLElement>('[data-environment-gallery]').forEach(gallery => {
  const tabs = [...gallery.querySelectorAll<HTMLButtonElement>('[data-scene-tab]')];
  const panels = [...gallery.querySelectorAll<HTMLElement>('[data-scene-panel]')];
  let activeHotspot: HTMLElement | null = null;
  const closeHotspot = (restoreFocus = false) => {
    if (!activeHotspot) return;
    const trigger = activeHotspot.querySelector<HTMLButtonElement>('[data-hotspot-trigger]');
    activeHotspot.classList.remove('is-open');
    trigger?.setAttribute('aria-expanded', 'false');
    const bubble = activeHotspot.querySelector<HTMLElement>('[data-hotspot-bubble]');
    if (bubble) { bubble.setAttribute('aria-hidden', 'true'); bubble.inert = true; }
    activeHotspot = null;
    if (restoreFocus) trigger?.focus({ preventScroll: true });
  };
  const drawConnector = (hotspot: HTMLElement) => {
    const panel = hotspot.closest<HTMLElement>('[data-scene-panel]');
    const trigger = hotspot.querySelector<HTMLElement>('[data-hotspot-trigger]');
    const bubble = hotspot.querySelector<HTMLElement>('[data-hotspot-bubble]');
    const path = hotspot.querySelector<SVGPathElement>('[data-hotspot-path]');
    const end = hotspot.querySelector<SVGCircleElement>('[data-hotspot-end]');
    if (!panel || !trigger || !bubble || !path || !end || panel.hidden) return;
    const bounds = panel.getBoundingClientRect();
    const point = trigger.getBoundingClientRect();
    const x = point.left + point.width / 2 - bounds.left;
    const y = point.top + point.height / 2 - bounds.top;
    const left = bubble.offsetLeft;
    const top = bubble.offsetTop;
    const right = left + bubble.offsetWidth;
    const bottom = top + bubble.offsetHeight;
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
    let endX: number, endY: number, elbowX: number, elbowY: number;
    if (x < left || x > right) {
      endX = x < left ? left : right;
      endY = clamp(y, top + 24, bottom - 24);
      elbowX = endX + (x < left ? -26 : 26);
      elbowY = endY;
    } else {
      endX = clamp(x, left + 24, right - 24);
      endY = y > bottom ? bottom : top;
      elbowX = endX;
      elbowY = endY + (y > bottom ? 26 : -26);
    }
    path.setAttribute('d', `M ${x} ${y} L ${elbowX} ${elbowY} L ${endX} ${endY}`);
    end.setAttribute('cx', String(endX));
    end.setAttribute('cy', String(endY));
  };
  gallery.querySelectorAll<HTMLElement>('[data-hotspot]').forEach(hotspot => {
    const trigger = hotspot.querySelector<HTMLButtonElement>('[data-hotspot-trigger]');
    const bubble = hotspot.querySelector<HTMLElement>('[data-hotspot-bubble]');
    trigger?.addEventListener('click', () => {
      const wasOpen = activeHotspot === hotspot;
      closeHotspot();
      if (wasOpen || !bubble) return;
      drawConnector(hotspot);
      activeHotspot = hotspot;
      hotspot.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      bubble.setAttribute('aria-hidden', 'false');
      bubble.inert = false;
    });
    hotspot.querySelector('[data-hotspot-close]')?.addEventListener('click', () => closeHotspot(true));
  });
  const resizeObserver = new ResizeObserver(() => { if (activeHotspot) drawConnector(activeHotspot); });
  panels.forEach(panel => resizeObserver.observe(panel));
  document.addEventListener('pointerdown', event => {
    if (activeHotspot && !(event.target as Element).closest('[data-hotspot]')) closeHotspot();
  });
  let current = 0;
  const activate = (next: number, focus = false) => {
    closeHotspot();
    current = (next + tabs.length) % tabs.length;
    tabs.forEach((tab, index) => {
      const active = index === current;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[index].hidden = !active;
    });
    const status = gallery.querySelector('[data-scene-status]');
    if (status) status.textContent = `Cenário em destaque: ${tabs[current].getAttribute('aria-label')}`;
    if (focus) tabs[current].focus({ preventScroll: true });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', event => {
      let next: number;
      if (event.key === 'ArrowRight') next = current + 1;
      else if (event.key === 'ArrowLeft') next = current - 1;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(next, true);
    });
  });
  gallery.querySelector('[data-scene-prev]')?.addEventListener('click', () => activate(current - 1));
  gallery.querySelector('[data-scene-next]')?.addEventListener('click', () => activate(current + 1));
  const stage = gallery.querySelector<HTMLElement>('[data-gallery-stage]');
  let gesture: { id: number; x: number; y: number } | null = null;
  stage?.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch' || !event.isPrimary || (event.target as Element).closest('a, button, [data-hotspot], [role="tablist"]')) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY };
  });
  stage?.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) activate(current + (dx < 0 ? 1 : -1));
  });
  stage?.addEventListener('pointercancel', () => { gesture = null; });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeHotspot(true);
  });
});
