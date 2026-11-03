export {};
const gallery = document.querySelector<HTMLElement>('[data-surface-gallery]');
if (gallery) {
  const items=[...gallery.querySelectorAll<HTMLElement>('[data-surface-item]')];
  const filters=[...gallery.querySelectorAll<HTMLButtonElement>('[data-surface-filter]')];
  const dialog=gallery.querySelector<HTMLDialogElement>('[data-surface-dialog]')!;
  const image=dialog.querySelector<HTMLImageElement>('[data-surface-image]')!;
  let filtered=items;
  let selected=0;
  let opener: HTMLAnchorElement|null=null;
  function filter(value:string) {
    const category=filters.some(item=>item.dataset.surfaceFilter===value)?value:'todos';
    filtered=items.filter(item=>category==='todos'||item.dataset.category===category);
    items.forEach(item=>{item.hidden=!filtered.includes(item);});
    filters.forEach(item=>item.setAttribute('aria-pressed',String(item.dataset.surfaceFilter===category)));
    gallery!.querySelector<HTMLElement>('[data-surface-status]')!.textContent=`${filtered.length} ${filtered.length===1?'imagem':'imagens'} de aplicações.`;
  }
  function show(index:number) {
    selected=(index+filtered.length)%filtered.length;
    const link=filtered[selected].querySelector<HTMLAnchorElement>('[data-surface-open]')!;
    image.src=link.href;image.alt=link.dataset.alt!;
    dialog.querySelector<HTMLElement>('[data-surface-title]')!.textContent=link.dataset.title!;
    dialog.querySelector<HTMLElement>('[data-surface-counter]')!.textContent=`${String(selected+1).padStart(2,'0')} / ${String(filtered.length).padStart(2,'0')}`;
  }
  filters.forEach(button=>button.addEventListener('click',()=>{filter(button.dataset.surfaceFilter!);history.replaceState(null,'',`${location.pathname}${button.dataset.surfaceFilter==='todos'?'':'#'+button.dataset.surfaceFilter}`);}));
  items.forEach(item=>{const link=item.querySelector<HTMLAnchorElement>('[data-surface-open]')!;link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();opener=link;show(filtered.indexOf(item));dialog.showModal();document.body.classList.add('dialog-open');});});
  dialog.querySelector('[data-surface-close]')!.addEventListener('click',()=>dialog.close());
  dialog.querySelector('[data-surface-prev]')!.addEventListener('click',()=>show(selected-1));
  dialog.querySelector('[data-surface-next]')!.addEventListener('click',()=>show(selected+1));
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(selected+(event.key==='ArrowLeft'?-1:1));}});
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus({preventScroll:true});});
  window.addEventListener('hashchange',()=>filter(location.hash.slice(1)));
  filter(location.hash.slice(1));
}
