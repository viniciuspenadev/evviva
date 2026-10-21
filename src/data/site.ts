/** Dados da unidade: preencher com informações confirmadas antes da publicação. */
export const site = {
  name: 'Evviva',
  title: 'Evviva — A casa, à sua maneira.',
  description: 'Mobiliário personalizado, matéria e design para espaços que refletem o seu jeito de viver.',
  unitName: '',
  city: '',
  address: '',
  whatsapp: '',
  email: '',
  productionUrl: 'https://evviva.bluedigitalhub.com.br',
  preview: true,
  officialUrl: 'https://evviva.com.br/',
  storeLocator: 'https://evviva.com.br/onde-encontrar/',
} as const;

export const navigation = [
  { label: 'Ambientes', href: '/#ambientes' },
  { label: 'Portfólio', href: '/portfolio/' },
  { label: 'Coleções', href: '/colecoes/' },
  { label: 'Nossa loja', href: '/nossa-loja/' },
  { label: 'Para arquitetos', href: '/arquitetos/' },
];

export function whatsappUrl(message: string) {
  const phone = site.whatsapp.replace(/\D/g, '');
  return phone.length >= 10 ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
}
