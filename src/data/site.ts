/** Dados da unidade: preencher com informações confirmadas antes da publicação. */
export const site = {
  name: 'SURFORM',
  title: 'SURFORM — A matéria encontra a sua forma.',
  description: 'Bancadas, cubas e detalhes em superfície sólida mineral para residências, espaços comerciais e clínicas. SURFORM: matéria e desenho sob medida.',
  unitName: '',
  city: '',
  address: '',
  whatsapp: '',
  email: '',
  productionUrl: import.meta.env.SITE,
  preview: true,
  officialUrl: 'https://www.instagram.com/surform_ssm/',
  instagram: 'https://www.instagram.com/surform_ssm/',
  storeLocator: 'https://www.instagram.com/surform_ssm/',
} as const;

export const navigation = [
  { label: 'Superfícies', href: '/#superficies' },
  { label: 'Aplicações', href: '/#aplicacoes' },
  { label: 'Galeria', href: '/portfolio/' },
  { label: 'A SURFORM', href: '/sobre/' },
];

export function whatsappUrl(message: string) {
  const phone = site.whatsapp.replace(/\D/g, '');
  return phone.length >= 10 ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
}

export const contactHref = whatsappUrl('Olá! Gostaria de conversar sobre um projeto de superfície sólida com a SURFORM.') || site.instagram;
export const contactLabel = site.whatsapp ? 'Conversar no WhatsApp' : 'Conversar no Instagram';
