export const surform = {
  name: 'SURFORM',
  instagram: 'https://www.instagram.com/surform_ssm/',
  navigation: [
    { label: 'Sobre a SSM', href: '#sobre' },
    { label: 'Aplicações', href: '#aplicacoes' },
    { label: 'Na prática', href: '#publicacoes' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],
} as const;

// Publicações da própria empresa, conferidas publicamente em 20/10/2026.
// São referências de aplicações; não constituem depoimentos de clientes.
export const surformPosts = [
  { code: 'DMqTD4wyMkr', title: 'A cozinha em movimento.', category: 'Cozinhas · Acessórios integrados', date: '28 de julho de 2025', datetime: '2025-07-28', description: 'A SURFORM apresenta acessórios integrados e soluções em Corian® para a rotina da cozinha.' },
  { code: 'DM70olFMRqN', title: 'O detalhe no lavabo.', category: 'Lavabos · Bancadas', date: '4 de agosto de 2025', datetime: '2025-08-04', description: 'Uma publicação sobre bancada em Corian®, composição do lavabo e cuidado com os acabamentos.' },
  { code: 'DNOjiCLSukr', title: 'Beleza no cotidiano.', category: 'Banheiros · Material & cuidado', date: '11 de agosto de 2025', datetime: '2025-08-11', description: 'A empresa mostra uma aplicação de banheiro e fala sobre a superfície e sua limpeza.' },
] as const;
