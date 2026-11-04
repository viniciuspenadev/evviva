import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: false,
  respectReducedMotion: true,
  // Menus e ampliações mantêm sua própria rolagem.
  prevent: node => Boolean(node.closest('dialog, [data-native-scroll]')),
});

function syncModalLock() {
  if (document.querySelector('dialog[open]')) lenis.stop();
  else lenis.start();
}

new MutationObserver(syncModalLock).observe(document.body, {
  attributes: true,
  attributeFilter: ['class'],
});
syncModalLock();

function focusDestination(target: HTMLElement) {
  if (target.tabIndex < 0 && !target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
  target.focus({ preventScroll: true });
}

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self') || link.classList.contains('skip-link')) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
  let target: HTMLElement | null;
  try { target = document.getElementById(decodeURIComponent(url.hash.slice(1))); }
  catch { return; }
  if (!target) return;

  event.preventDefault();
  if (location.hash !== url.hash) {
    const oldURL = location.href;
    history.pushState(history.state, '', url);
    window.dispatchEvent(new HashChangeEvent('hashchange', { oldURL, newURL: url.href }));
  }
  // Aguarda o fechamento do menu e a liberação do corpo da página.
  requestAnimationFrame(() => {
    syncModalLock();
    if (lenis.isStopped) return;
    lenis.resize();
    lenis.scrollTo(target, {
      duration: 1.1,
      easing: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      onComplete: () => focusDestination(target),
    });
  });
});

// Deixa o histórico restaurar a posição sem uma animação anterior em andamento.
window.addEventListener('popstate', () => {
  lenis.stop();
  syncModalLock();
});
