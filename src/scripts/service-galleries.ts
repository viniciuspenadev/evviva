export {};

document.querySelectorAll<HTMLElement>('[data-service-gallery]').forEach(gallery => {
  const slides = [...gallery.querySelectorAll<HTMLElement>('[data-service-slide]')];
  const navigation = gallery.querySelector<HTMLElement>('[data-gallery-dots]')!;
  const dots = [...navigation.querySelectorAll<HTMLButtonElement>('[data-gallery-dot]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const interval = Number(gallery.dataset.galleryInterval) || 6000;
  let current = 0;
  let visible = false;
  let hovered = false;
  let focused = false;
  let timer: number | undefined;
  let request = 0;

  const canPlay = () => visible && !document.hidden && !motion.matches && !hovered && !focused;

  async function show(index: number, automatic = false) {
    window.clearTimeout(timer);
    const pending = ++request;
    try { await slides[index].querySelector('img')!.decode(); } catch { schedule(); return; }
    if (pending !== request) return;
    if (automatic && !canPlay()) return;
    slides.forEach((slide,i) => {
      slide.classList.toggle('is-active',i === index);
      if (i === index) slide.removeAttribute('aria-hidden');
      else slide.setAttribute('aria-hidden','true');
      dots[i].setAttribute('aria-pressed',String(i === index));
    });
    current = index;
    schedule();
  }

  function schedule() {
    window.clearTimeout(timer);
    if (canPlay()) timer = window.setTimeout(() => { void show((current + 1) % slides.length,true); },interval);
  }

  dots.forEach((dot,index) => dot.addEventListener('click',() => { void show(index); }));
  navigation.addEventListener('keydown',event => {
    const index = dots.indexOf(event.target as HTMLButtonElement);
    if (index < 0) return;
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % dots.length;
    else if (event.key === 'ArrowLeft') next = (index + dots.length - 1) % dots.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = dots.length - 1;
    else return;
    event.preventDefault();
    dots[next].focus({preventScroll:true});
    void show(next);
  });
  gallery.addEventListener('pointerenter',event => { if (event.pointerType !== 'touch') { hovered = true; schedule(); } });
  gallery.addEventListener('pointerleave',() => { hovered = false; schedule(); });
  gallery.addEventListener('focusin',() => { focused = true; schedule(); });
  gallery.addEventListener('focusout',event => { focused = gallery.contains(event.relatedTarget as Node | null); schedule(); });
  document.addEventListener('visibilitychange',schedule);
  motion.addEventListener('change',schedule);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); },{threshold:.15}).observe(gallery);
  navigation.hidden = false;
});
