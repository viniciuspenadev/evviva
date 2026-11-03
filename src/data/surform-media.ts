import kitchen from '../assets/surform/cozinha-grafite-2026-11.png';
import kitchenLight from '../assets/surform/cozinha-greige-2026-11.png';
import lavabo from '../assets/surform/lavabo-mineral-2026-11.png';
import bathroom from '../assets/surform/banho-areia-2026-11.png';
import kitchenWood from '../assets/surform/cozinha-2026.png';
import lavaboWood from '../assets/surform/lavabo-2026.png';
import bathroomWood from '../assets/surform/banho-2026.png';
import detail from '../assets/surform/detalhe-2026.png';

export const surfaceImages = { kitchen, kitchenLight, lavabo, bathroom, detail };
export const surfaceImageAlts = {
  kitchen: 'Bancada clara acetinada em superfície sólida, com cuba integrada e armários grafite.',
  kitchenLight: 'Cozinha em tons de greige com bancada em L e cuba integrada em superfície sólida clara.',
  lavabo: 'Cuba integrada à bancada em superfície sólida clara, com gabinete greige e paredes de textura mineral.',
  bathroom: 'Bancada em superfície sólida com duas cubas integradas, gabinete claro e revestimentos em tons de areia.',
} as const;

export const applications = [
  { id: 'cozinhas', name: 'Cozinhas', image: kitchen, alt: surfaceImageAlts.kitchen, position: '95% center', headline: 'O encontro de todos os dias.', description: 'Uma bancada participa dos pequenos rituais da casa. Área de preparo, cuba e apoios podem ser desenhados em conjunto, respeitando o espaço e a rotina.', details: ['Distribuição da área de trabalho', 'Cuba e bancada em uma mesma linguagem', 'Encontros com marcenaria e equipamentos'] },
  { id: 'lavabos', name: 'Lavabos', image: lavabo, alt: surfaceImageAlts.lavabo, position: '38% center', headline: 'Presença nos pequenos espaços.', description: 'Proporção, profundidade da cuba e desenho da borda fazem diferença em um ambiente compacto. Uma composição que aproxima a superfície da arquitetura.', details: ['Proporções para o seu ambiente', 'Desenho da cuba e da bancada', 'Relações entre luz, espelho e matéria'] },
  { id: 'banhos', name: 'Banhos', image: bathroom, alt: surfaceImageAlts.bathroom, position: '52% center', headline: 'O cuidado ganha outra forma.', description: 'O desenho da bancada acompanha a maneira de usar o banheiro. Uma ou mais cubas, áreas de apoio e materiais são definidos a partir do ambiente.', details: ['Uma composição para a rotina', 'Áreas de apoio bem distribuídas', 'Especificação e cuidados do material'] },
] as const;

export const surfaceGallery = [
  ...applications.map(item => ({ id: item.id, category: item.id, categoryTitle: item.name, title: item.name === 'Cozinhas' ? 'Bancada clara, ambiente grafite' : item.name === 'Lavabos' ? 'Superfície e textura mineral' : 'Duas cubas, tons de areia', alt: item.alt, image: item.image })),
  { id: 'cozinhas-greige', category: 'cozinhas', categoryTitle: 'Cozinhas', title: 'Leveza em tons de greige', alt: surfaceImageAlts.kitchenLight, image: kitchenLight },
  { id: 'cozinhas-madeira', category: 'cozinhas', categoryTitle: 'Cozinhas', title: 'Matéria e madeira', alt: 'Bancada clara em superfície sólida com cuba integrada e base de madeira em uma cozinha.', image: kitchenWood },
  { id: 'lavabos-madeira', category: 'lavabos', categoryTitle: 'Lavabos', title: 'A proporção do detalhe', alt: 'Lavabo com cuba retangular integrada à bancada acetinada e gabinete de madeira.', image: lavaboWood },
  { id: 'banhos-madeira', category: 'banhos', categoryTitle: 'Banhos', title: 'Duas cubas, uma composição', alt: 'Bancada branca com duas cubas integradas e gabinete de madeira em um banheiro.', image: bathroomWood },
  { id: 'detalhe', category: 'detalhes', categoryTitle: 'Detalhes', title: 'O desenho de um encontro', alt: 'Detalhe de uma cuba integrada à superfície sólida acetinada, com válvula metálica.', image: detail },
];
