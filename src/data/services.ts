import { surfaceImages, surfaceImageAlts } from './surform-media';
import detail from '../assets/surform/detalhe-cuba-escorredor-2026-11.png';

export const services = [
  { id: 'bancadas', title: 'Bancadas', galleryName: 'bancadas', label: 'SSM · Superfícies sob medida', description: 'Áreas de preparo, apoio e atendimento. O desenho começa pela maneira de usar.', introduction: 'Uma bancada precisa encontrar o espaço e a rotina. Medidas, profundidade, apoios e recortes são pensados junto com a arquitetura.', points: ['Dimensões e distribuição das áreas de trabalho', 'Recortes para equipamentos e instalações', 'Espessuras, bordas e encontros com a base'], slides: [
    { image: surfaceImages.kitchenGraphite, alt: surfaceImageAlts.kitchenGraphite, position: '53% center' },
    { image: surfaceImages.kitchen, alt: surfaceImageAlts.kitchen, position: '72% center' },
    { image: surfaceImages.kitchenLight, alt: surfaceImageAlts.kitchenLight, position: '69% center' },
  ], href: '/superficies/#bancadas', action: 'Explorar bancadas' },
  { id: 'cubas', title: 'Cubas integradas', galleryName: 'cubas integradas', label: 'SSM · Forma e integração', description: 'Bancada e cuba em uma mesma linguagem. Proporções para cada ambiente.', introduction: 'A integração entre bancada e cuba organiza o conjunto. Formato, profundidade, posição dos metais e escoamento são definidos no desenho técnico.', points: ['Formato e profundidade compatíveis com o uso', 'Posição da torneira, válvula e pontos hidráulicos', 'Transições, cantos internos e áreas de apoio'], slides: [
    { image: surfaceImages.lavaboSand, alt: surfaceImageAlts.lavaboSand, position: '56% center' },
    { image: surfaceImages.lavabo, alt: surfaceImageAlts.lavabo, position: '38% center' },
    { image: surfaceImages.bathroom, alt: surfaceImageAlts.bathroom, position: '52% center' },
  ], href: '/superficies/#cubas', action: 'Explorar cubas' },
  { id: 'detalhes', title: 'Detalhes funcionais', galleryName: 'detalhes funcionais', label: 'SSM · Apoios e encontros', description: 'Rebaixos, recortes e acessórios. Pequenas escolhas que dão sentido ao conjunto.', introduction: 'Um apoio bem posicionado, o desenho de uma borda ou o encaixe de um acessório participam do uso diário. Cada solução depende do material e das condições do projeto.', points: ['Rebaixos e apoios para acessórios removíveis', 'Encontros entre cuba, bancada e elementos de apoio', 'Validação de usinagem, fixação e acabamento'], slides: [
    { image: detail, alt: 'Cuba integrada em superfície sólida com rebaixo de apoio e escorredor removível.', position: '60% center' },
    { image: surfaceImages.detail, alt: 'Detalhe dos cantos internos e do acabamento acetinado de uma cuba em superfície sólida.', position: '48% center' },
  ], href: '/superficies/#detalhes', action: 'Explorar detalhes' },
] as const;
