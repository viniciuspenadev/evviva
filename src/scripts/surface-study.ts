export {};

document.querySelectorAll<HTMLElement>('[data-surface-study]').forEach(study => {
  const stage = study.querySelector<HTMLElement>('[data-detail-stage]')!;
  const photo = study.querySelector<HTMLElement>('[data-detail-photo]')!;
  const popover = study.querySelector<HTMLElement>('[data-detail-popover]')!;
  const pins = [...study.querySelectorAll<HTMLButtonElement>('[data-detail-trigger]')];
  const panels = [...study.querySelectorAll<HTMLElement>('[data-detail-panel]')];
  const lines = [...study.querySelectorAll<SVGGElement>('[data-detail-line]')];
  const counter = study.querySelector<HTMLElement>('[data-detail-counter]')!;
  const close = study.querySelector<HTMLButtonElement>('[data-detail-close]')!;
  let selected: number | null = null;
  let lastPin = pins[0];

  function drawLine() {
    if (selected === null) return;
    const bounds = stage.getBoundingClientRect();
    const point = pins[selected].getBoundingClientRect();
    const x = point.left + point.width / 2 - bounds.left;
    const y = point.top + point.height / 2 - bounds.top;
    const inset = 16;
    const gap = 22;
    const clamp = (value: number, min: number, max: number) => Math.min(max,Math.max(min,value));
    const width = popover.offsetWidth;
    const height = popover.offsetHeight;
    const maxLeft = Math.max(inset,bounds.width - width - inset);
    const centeredLeft = clamp(x - width / 2,inset,maxLeft);
    let top = y - point.height / 2 - gap - height;
    const obstacles = pins.filter((_,index) => index !== selected).map(pin => {
      const r = pin.getBoundingClientRect();
      return { left: r.left - bounds.left, right: r.right - bounds.left, top: r.top - bounds.top, bottom: r.bottom - bounds.top };
    });
    const overlapArea = (left: number) => obstacles.reduce((area,r) => {
      const overlapWidth = Math.max(0,Math.min(left + width,r.right + 8) - Math.max(left,r.left - 8));
      const overlapHeight = Math.max(0,Math.min(top + height,r.bottom + 8) - Math.max(top,r.top - 12));
      return area + overlapWidth * overlapHeight;
    },0);
    const candidates = [centeredLeft,...obstacles.flatMap(r => [clamp(r.left - 8 - width,inset,maxLeft),clamp(r.right + 8,inset,maxLeft)])]
      .filter(left => x >= left + 24 && x <= left + width - 24);
    const left = candidates.reduce((best,next) => {
      const nextArea = overlapArea(next);
      const bestArea = overlapArea(best);
      return nextArea < bestArea || (nextArea === bestArea && Math.abs(next - centeredLeft) < Math.abs(best - centeredLeft)) ? next : best;
    },centeredLeft);

    // Keep the balloon above its point without covering the other controls.
    for (let pass = 0; pass < obstacles.length; pass++) {
      obstacles.forEach(r => {
        const horizontalOverlap = left < r.right + 8 && left + width > r.left - 8;
        if (horizontalOverlap && top < r.bottom + 8 && top + height > r.top - 12) {
          top = Math.min(top,r.top - 12 - height);
        }
      });
    }
    top = Math.max(inset,top);
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    const endX = clamp(x,left + 24,left + width - 24);
    const endY = top + height;
    popover.style.setProperty('--detail-origin-x',`${endX - left}px`);
    const path = lines[selected].querySelector('path')!;
    const dot = lines[selected].querySelector('circle')!;
    path.setAttribute('d', `M ${x} ${y - point.height / 2} L ${x} ${endY + 10} L ${endX} ${endY}`);
    dot.setAttribute('cx', String(endX));
    dot.setAttribute('cy', String(endY));
  }

  function select(index: number | null) {
    selected = index;
    pins.forEach((pin,i) => {
      pin.classList.toggle('is-active', i === index);
      pin.setAttribute('aria-expanded', String(i === index));
    });
    panels.forEach((panel,i) => { panel.hidden = i !== index; });
    lines.forEach((line,i) => line.classList.toggle('is-active', i === index));
    popover.hidden = index === null;
    counter.textContent = `${index === null ? '—' : String(index + 1).padStart(2,'0')} / ${String(pins.length).padStart(2,'0')}`;
    if (index !== null) lastPin = pins[index];
    drawLine();
  }

  pins.forEach((pin,index) => pin.addEventListener('click', () => select(selected === index ? null : index)));
  close.addEventListener('click', () => { select(null); lastPin.focus({ preventScroll: true }); });
  study.addEventListener('keydown', event => {
    if (event.key === 'Escape' && selected !== null) {
      event.preventDefault();
      select(null);
      lastPin.focus({ preventScroll: true });
      return;
    }
    const target = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-detail-trigger]');
    if (!target) return;
    const group = pins;
    const current = group.indexOf(target);
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % pins.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current + pins.length - 1) % pins.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = pins.length - 1;
    else return;
    event.preventDefault();
    select(next);
    group[next].focus({ preventScroll: true });
  });

  const observer = new ResizeObserver(drawLine);
  [stage,popover].forEach(element => observer.observe(element));
  document.addEventListener('pointerdown',event => {
    if (selected !== null && !(event.target as Element).closest('[data-detail-trigger], [data-detail-popover]')) select(null);
  });
  photo.querySelector('img')?.addEventListener('load', drawLine);
  document.fonts.ready.then(drawLine);
  drawLine();
});
