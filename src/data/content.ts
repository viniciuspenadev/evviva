export const environments = [
  {
    slug: 'cozinhas', title: 'Cozinhas', eyebrow: 'O prazer de estar junto',
    headline: 'Onde a vida encontra o seu sabor.',
    description: 'Entre o primeiro café e as conversas que atravessam a noite, a cozinha acompanha os seus rituais. Um espaço para receber, compartilhar e viver.',
    details: ['Uma composição pensada para o espaço', 'Materiais que conversam entre si', 'Organização para os seus rituais'],
    image: 'kitchen', alt: 'Cozinha com marcenaria em madeira e ilha de pedra clara.',
    note: 'Integração, matéria e encontros.',
  },
  {
    slug: 'livings', title: 'Livings', eyebrow: 'Tempo para o que importa',
    headline: 'Um convite para ficar.',
    description: 'O lugar de se reconhecer, receber quem você ama e desacelerar. Madeira, luz e proporção constroem uma atmosfera que faz sentido para você.',
    details: ['Integração com a arquitetura', 'Equilíbrio entre presença e leveza', 'Espaço para a sua história'],
    image: 'living', alt: 'Living com painéis de madeira, sofá claro e luz natural.',
    note: 'Acolhimento em cada escolha.',
  },
  {
    slug: 'closets', title: 'Closets', eyebrow: 'Um espaço só seu',
    headline: 'A beleza de ter tudo no seu lugar.',
    description: 'Uma rotina mais fluida começa com escolhas que respeitam o seu jeito de viver. Um closet é também um espaço de cuidado, calma e expressão pessoal.',
    details: ['Organização com intenção', 'Uma leitura contínua dos materiais', 'Composição para o seu espaço'],
    image: 'closet', alt: 'Closet em madeira com prateleiras iluminadas e vidro fumê.',
    note: 'Personalidade, ordem e leveza.',
  },
] as const;

export { collections } from './collections';

export const materialStories = [
  { id: 'madeira', title: 'Madeira', subtitle: 'Acolhimento que se sente.', text: 'Veios, nuances e textura trazem uma presença natural ao espaço. Uma linguagem que aproxima a arquitetura de quem vive nela.', className: 'wood' },
  { id: 'superficies', title: 'Superfícies', subtitle: 'O detalhe muda o todo.', text: 'Cores, brilhos e texturas constroem relações no ambiente. Explorar as amostras é parte de encontrar a composição que faz sentido para você.', className: 'surface' },
  { id: 'vidro', title: 'Vidro', subtitle: 'Leveza em perspectiva.', text: 'Reflexos e transparências criam outras leituras para o mobiliário. Uma possibilidade para compor profundidade e presença com sutileza.', className: 'glass' },
] as const;

export const process = [
  { title: 'Escutar', description: 'O seu espaço, os seus rituais e o que você imagina para a sua casa.' },
  { title: 'Desenhar', description: 'Traduzir essas escolhas em uma composição que dialogue com a arquitetura.' },
  { title: 'Escolher', description: 'Explorar materiais, acabamentos e possibilidades para cada ambiente.' },
  { title: 'Acompanhar', description: 'Conversar sobre as etapas do projeto, a execução e os próximos passos.' },
] as const;
