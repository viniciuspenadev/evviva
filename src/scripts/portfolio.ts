export {};
const gallery = document.querySelector<HTMLElement>('[data-portfolio]');
if (gallery) {
  const items = [...gallery.querySelectorAll<HTMLElement>('[data-portfolio-item]')];
  const filters = [...gallery.querySelectorAll<HTMLButtonElement>('[data-portfolio-filter]')];
  const modes = [...gallery.querySelectorAll<HTMLButtonElement>('[data-portfolio-mode]')];
  const groups = [...gallery.querySelectorAll<HTMLElement>('[data-portfolio-filter-group]')];
  const more = gallery.querySelector<HTMLButtonElement>('[data-portfolio-more]')!;
  const status = gallery.querySelector<HTMLElement>('[data-portfolio-status]')!;
  const dialog = gallery.querySelector<HTMLDialogElement>('[data-portfolio-dialog]')!;
  const image = dialog.querySelector<HTMLImageElement>('[data-lightbox-image]')!;
  let category = 'todos';
  let visibleCount = 12;
  let selected = 0;
  let filtered = items;
  let opener: HTMLAnchorElement | null = null;

  function render() {
    const collectionMode = category === 'colecoes' || category.startsWith('colecao-');
    filtered = items.filter(item => {
      if (category === 'todos') return true;
      const ids = (item.dataset.collections ?? '').split(' ').filter(Boolean);
      if (category === 'colecoes') return ids.length > 0;
      if (collectionMode) return ids.includes(category.slice('colecao-'.length));
      return item.dataset.category === category;
    });
    const shown = new Set(filtered.slice(0, visibleCount));
    items.forEach(item => { item.hidden = !shown.has(item); });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.portfolioFilter === category)));
    modes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.portfolioMode === (collectionMode ? 'colecoes' : 'ambientes'))));
    groups.forEach(group => { group.hidden = group.dataset.portfolioFilterGroup !== (collectionMode ? 'colecoes' : 'ambientes'); });
    const title = filters.find(button => button.dataset.portfolioFilter === category)?.textContent ?? '';
    status.textContent = `${Math.min(visibleCount, filtered.length)} de ${filtered.length} ${filtered.length === 1 ? 'imagem' : 'imagens'} · ${category === 'todos' ? 'Todo o acervo' : title.trim()}`;
    more.hidden = visibleCount >= filtered.length;
  }
  function selectCategory(value: string) {
    category = filters.some(button => button.dataset.portfolioFilter === value) ? value : 'todos';
    visibleCount = 12;
    render();
  }
  function showPhoto(index: number) {
    selected = (index + filtered.length) % filtered.length;
    const link = filtered[selected].querySelector<HTMLAnchorElement>('[data-portfolio-open]')!;
    image.src = link.href;
    image.alt = link.dataset.alt ?? '';
    dialog.querySelector<HTMLElement>('[data-lightbox-title]')!.textContent = link.dataset.title ?? '';
    dialog.querySelector<HTMLElement>('[data-lightbox-category]')!.textContent = link.dataset.categoryTitle ?? '';
    dialog.querySelector<HTMLElement>('[data-lightbox-counter]')!.textContent = `${String(selected + 1).padStart(2, '0')} / ${filtered.length}`;
    dialog.querySelector<HTMLAnchorElement>('[data-lightbox-source]')!.href = link.dataset.source!;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    selectCategory(button.dataset.portfolioFilter!);
    history.replaceState(null, '', `${location.pathname}${location.search}${category === 'todos' ? '' : '#' + category}`);
  }));
  modes.forEach(button => button.addEventListener('click', () => {
    selectCategory(button.dataset.portfolioMode === 'colecoes' ? 'colecoes' : 'todos');
    history.replaceState(null, '', `${location.pathname}${location.search}${category === 'todos' ? '' : '#' + category}`);
  }));
  more.addEventListener('click', () => {
    const firstNew = filtered[visibleCount]?.querySelector<HTMLAnchorElement>('[data-portfolio-open]');
    visibleCount += 12;
    render();
    firstNew?.focus({ preventScroll: true });
  });
  items.forEach(item => {
    const link = item.querySelector<HTMLAnchorElement>('[data-portfolio-open]')!;
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      showPhoto(filtered.indexOf(item));
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => showPhoto(selected - 1));
  dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => showPhoto(selected + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); showPhoto(selected + (event.key === 'ArrowLeft' ? -1 : 1)); }
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('dialog-open');
    opener?.focus({ preventScroll: true });
  });
  window.addEventListener('hashchange', () => selectCategory(location.hash.slice(1)));
  selectCategory(location.hash.slice(1));
}
