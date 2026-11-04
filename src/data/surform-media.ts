import kitchen from '../assets/surform/cozinha-hero-aprovada-2026-11-04.png';
import sharing from '../assets/surform/compartilhamento-surform-hero-2026-11-04.png';
import kitchenLight from '../assets/surform/cozinha-greige-2026-11.png';
import lavabo from '../assets/surform/lavabo-mineral-2026-11.png';
import bathroom from '../assets/surform/banho-areia-2026-11.png';
import kitchenWood from '../assets/surform/cozinha-2026.png';
import lavaboWood from '../assets/surform/lavabo-2026.png';
import bathroomWood from '../assets/surform/banho-2026.png';
import detail from '../assets/surform/detalhe-2026.png';
import functionalDetail from '../assets/surform/detalhe-cuba-escorredor-2026-11.png';
import gourmet from '../assets/surform/gourmet-2026-11-04.png';
import laundry from '../assets/surform/lavanderia-2026-11-04.png';
import commercial from '../assets/surform/comercial-2026-11-04.png';
import clinic from '../assets/surform/clinicas-2026-11-04.png';
import kitchenGraphite from '../assets/surform/cozinha-ssm-grafite-2026-11-04.png';
import lavaboSand from '../assets/surform/lavabo-ssm-areia-2026-11-04.png';
import commercialGrey from '../assets/surform/recepcao-ssm-cinza-2026-11-04.png';

export const surfaceImages = { kitchen, sharing, kitchenLight, lavabo, bathroom, detail, functionalDetail, gourmet, laundry, commercial, clinic, kitchenGraphite, lavaboSand, commercialGrey };
export const surfaceImageAlts = {
  kitchen: 'Bancada clara em superfície sólida, com cuba voltada para a área de preparo, torneira na borda externa e frente grafite contínua.',
  kitchenLight: 'Cozinha em tons de greige com bancada em L e cuba integrada em superfície sólida clara.',
  lavabo: 'Cuba integrada à bancada em superfície sólida clara, com gabinete greige e paredes de textura mineral.',
  bathroom: 'Bancada em superfície sólida com duas cubas integradas, gabinete claro e revestimentos em tons de areia.',
  gourmet: 'Ilha em superfície sólida clara com cuba integrada, em área gourmet interna com churrasqueira em nicho separado.',
  laundry: 'Bancada com tanque integrado em superfície sólida em uma lavanderia, com máquina de lavar sob a área de apoio.',
  commercial: 'Balcão de recepção em superfície sólida clara, com cantos arredondados e base recuada em chumbo.',
  clinic: 'Bancada de apoio com cuba integrada em superfície sólida em um consultório, com torneira de parede e dispensadores.',
  kitchenGraphite: 'Bancada e cuba integradas em superfície sólida grafite acetinada, com base clara e torneira cromada.',
  lavaboSand: 'Bancada e cuba integradas em superfície sólida em tom de areia, com torneira escura e luz natural.',
  commercialGrey: 'Balcão de recepção em superfície sólida cinza, com cantos arredondados, tampo e frente na mesma tonalidade.',
} as const;

export const applications = [
  { id: 'cozinhas', name: 'Cozinhas', image: kitchen, alt: surfaceImageAlts.kitchen, position: '95% center', headline: 'O encontro de todos os dias.', galleryTitle: 'Bancada clara, ambiente grafite', description: 'Uma bancada participa dos pequenos rituais da casa. Área de preparo, cuba e apoios podem ser desenhados em conjunto, respeitando o espaço e a rotina.', details: ['Distribuição da área de trabalho', 'Cuba e bancada em uma mesma linguagem', 'Recortes para equipamentos e pontos de uso'] },
  { id: 'lavabos', name: 'Lavabos', image: lavabo, alt: surfaceImageAlts.lavabo, position: '38% center', headline: 'Presença nos pequenos espaços.', galleryTitle: 'Superfície e textura mineral', description: 'Proporção, profundidade da cuba e desenho da borda fazem diferença em um ambiente compacto. Uma composição que aproxima a superfície da arquitetura.', details: ['Proporções para o seu ambiente', 'Desenho da cuba e da bancada', 'Relações entre luz, espelho e matéria'] },
  { id: 'banhos', name: 'Banhos', image: bathroom, alt: surfaceImageAlts.bathroom, position: '52% center', headline: 'O cuidado ganha outra forma.', galleryTitle: 'Duas cubas, tons de areia', description: 'O desenho da bancada acompanha a maneira de usar o banheiro. Uma ou mais cubas, áreas de apoio e materiais são definidos a partir do ambiente.', details: ['Uma composição para a rotina', 'Áreas de apoio bem distribuídas', 'Especificação e cuidados do material'] },
  { id: 'areas-gourmet', name: 'Áreas gourmet', image: gourmet, alt: surfaceImageAlts.gourmet, position: '57% center', headline: 'Espaço para receber.', galleryTitle: 'Uma bancada para compartilhar', description: 'Bancadas de preparo, cubas e apoios em diálogo com a área de convivência. A disposição dos equipamentos e as condições de calor fazem parte da especificação.', details: ['Área de preparo e apoio para os encontros', 'Posição da cuba e dos equipamentos', 'Distâncias de fontes de calor e proteção conforme o produto'] },
  { id: 'lavanderias', name: 'Lavanderias', image: laundry, alt: surfaceImageAlts.laundry, position: '64% center', headline: 'Uma rotina bem desenhada.', galleryTitle: 'Tanque e apoio em conjunto', description: 'Tanque, bancada e área de apoio podem compor um desenho único. Profundidades, espaço para os equipamentos e pontos hidráulicos orientam o projeto.', details: ['Tanque integrado e área para apoio', 'Folgas de instalação e manutenção dos equipamentos', 'Pontos hidráulicos e desenho do escoamento'] },
  { id: 'comerciais', name: 'Comerciais', image: commercial, alt: surfaceImageAlts.commercial, position: '52% center', headline: 'A primeira impressão tem forma.', galleryTitle: 'O desenho de uma recepção', description: 'Balcões de recepção, atendimento e apoio em superfície sólida. O desenho considera a circulação, a rotina da equipe e o encontro com o público.', details: ['Balcões e superfícies de atendimento', 'Alturas, circulação e áreas de uso', 'Apoios, passagens de cabos e condições de instalação'] },
  { id: 'clinicas', name: 'Clínicas', image: clinic, alt: surfaceImageAlts.clinic, position: '61% center', headline: 'Cuidado também no desenho.', galleryTitle: 'Apoio e cuba no consultório', description: 'Superfícies de apoio e cubas para consultórios e clínicas. Produto, desenho e cuidados são definidos com o responsável pelo projeto, considerando as exigências de cada atividade.', details: ['Bancadas de apoio e cubas integradas', 'Compatibilidade com a rotina de limpeza especificada', 'Requisitos de uso validados pelo responsável técnico'] },
] as const;

export const surfaceGallery = [
  ...applications.map(item => ({ id: item.id, category: item.id, categoryTitle: item.name, title: item.galleryTitle, alt: item.alt, image: item.image })),
  { id: 'cozinhas-greige', category: 'cozinhas', categoryTitle: 'Cozinhas', title: 'Leveza em tons de greige', alt: surfaceImageAlts.kitchenLight, image: kitchenLight },
  { id: 'cozinhas-madeira', category: 'cozinhas', categoryTitle: 'Cozinhas', title: 'Matéria e madeira', alt: 'Bancada clara em superfície sólida com cuba integrada e base de madeira em uma cozinha.', image: kitchenWood },
  { id: 'lavabos-madeira', category: 'lavabos', categoryTitle: 'Lavabos', title: 'A proporção do detalhe', alt: 'Lavabo com cuba retangular integrada à bancada acetinada e gabinete de madeira.', image: lavaboWood },
  { id: 'banhos-madeira', category: 'banhos', categoryTitle: 'Banhos', title: 'Duas cubas, uma composição', alt: 'Bancada branca com duas cubas integradas e gabinete de madeira em um banheiro.', image: bathroomWood },
  { id: 'detalhe', category: 'detalhes', categoryTitle: 'Detalhes', title: 'O desenho de um encontro', alt: 'Detalhe de uma cuba integrada à superfície sólida acetinada, com válvula metálica.', image: detail },
  { id: 'detalhe-funcional', category: 'detalhes', categoryTitle: 'Detalhes', title: 'Um apoio que se encaixa', alt: 'Cuba em superfície sólida com rebaixo e escorredor removível com recortes e perfurações.', image: functionalDetail },
  { id: 'cozinhas-ssm-grafite', category: 'cozinhas', categoryTitle: 'Cozinhas', title: 'A superfície em grafite', alt: surfaceImageAlts.kitchenGraphite, image: kitchenGraphite },
  { id: 'lavabos-ssm-areia', category: 'lavabos', categoryTitle: 'Lavabos', title: 'O toque dos tons de areia', alt: surfaceImageAlts.lavaboSand, image: lavaboSand },
  { id: 'comerciais-ssm-cinza', category: 'comerciais', categoryTitle: 'Comerciais', title: 'Cinza em primeiro plano', alt: surfaceImageAlts.commercialGrey, image: commercialGrey },
];
