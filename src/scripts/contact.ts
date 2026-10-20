export {};

const dialog = document.querySelector<HTMLDialogElement>('#contact-dialog');
const form = document.querySelector<HTMLFormElement>('#contact-form');
const review = document.querySelector<HTMLElement>('#contact-review');
let opener: HTMLElement | null = null;

document.querySelectorAll<HTMLButtonElement>('[data-open-contact]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    dialog?.showModal();
    document.body.classList.add('dialog-open');
  });
});
dialog?.querySelector('[data-close-contact]')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog?.addEventListener('close', () => {
  if (!document.querySelector('dialog[open]')) document.body.classList.remove('dialog-open');
  if (opener?.checkVisibility()) opener.focus();
  else document.querySelector<HTMLButtonElement>('[data-open-menu]')?.focus();
});
const nameInput = form?.querySelector<HTMLInputElement>('[name="name"]');
const phoneInput = form?.querySelector<HTMLInputElement>('[name="phone"]');
[nameInput, phoneInput].forEach(input => input?.addEventListener('input', () => input.setCustomValidity('')));
form?.addEventListener('submit', event => {
  event.preventDefault();
  nameInput?.setCustomValidity((nameInput.value.trim().length < 2) ? 'Informe como podemos chamar você.' : '');
  const phoneDigits = phoneInput?.value.replace(/\D/g, '') ?? '';
  phoneInput?.setCustomValidity(phoneDigits.length < 10 || phoneDigits.length > 15 ? 'Informe um telefone com DDD, entre 10 e 15 números.' : '');
  if (!form.reportValidity() || !review) return;
  const values = new FormData(form);
  const value = (key: string) => String(values.get(key) ?? '').trim();
  const entries = { name: value('name'), phone: value('phone'), environment: value('environment'), message: value('message') };
  const fields = ['name', 'phone', 'environment', 'message'] as const;
  fields.forEach(key => { const target = review.querySelector(`[data-review-${key}]`); if (target) target.textContent = entries[key]; });
  const messageRow = review.querySelector<HTMLElement>('[data-review-message-row]');
  if (messageRow) messageRow.hidden = !entries.message;
  const phone = (dialog?.dataset.whatsapp ?? '').replace(/\D/g, '');
  const destination = review.querySelector<HTMLAnchorElement>('#review-destination');
  const note = review.querySelector<HTMLElement>('[data-review-note]');
  if (phone.length >= 10 && destination && note) {
    const message = `Olá! Meu nome é ${entries.name}. Gostaria de conversar sobre ${entries.environment.toLowerCase()}. Meu WhatsApp: ${entries.phone}.${entries.message ? `\n\n${entries.message}` : ''}`;
    destination.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    destination.firstChild!.textContent = 'Continuar no WhatsApp ';
    note.textContent = 'Sua mensagem está pronta. Você pode continuar no WhatsApp para conversar com a equipe. O agendamento será combinado no atendimento.';
  }
  form.hidden = true;
  review.hidden = false;
  review.focus();
});
review?.querySelector('[data-back-form]')?.addEventListener('click', () => {
  if (!form) return;
  review.hidden = true;
  form.hidden = false;
  form.querySelector<HTMLInputElement>('input')?.focus();
});
