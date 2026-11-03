import { images } from './images';
import { surfaceImages, surfaceImageAlts } from './surform-media';
import { site } from './site';
import detail from '../assets/surform/detalhe-cuba-escorredor-2026-11.png';
import evvivaKitchen from '../assets/evviva/cozinhas-05.jpg';
import evvivaCloset from '../assets/evviva/dormitorios-02.jpg';
import evvivaLiving from '../assets/evviva/living-11.jpg';

export const services = [
  { id: 'ssm', title: 'SSM', brand: 'surform', label: 'SSM · Superfícies sob medida', description: 'Bancadas, cubas e detalhes. Superfícies sólidas desenhadas para o seu espaço.', slides: [
    { image: surfaceImages.kitchen, alt: surfaceImageAlts.kitchen, position: '72% center' },
    { image: detail, alt: 'Cuba integrada em superfície sólida com escorredor removível e acabamento acetinado.', position: '57% center' },
    { image: surfaceImages.lavabo, alt: surfaceImageAlts.lavabo, position: '38% center' },
    { image: surfaceImages.bathroom, alt: surfaceImageAlts.bathroom, position: '52% center' },
  ], href: '/superficies/', action: 'Explorar superfícies', external: false },
  { id: 'planejados', title: 'Planejados', brand: 'evviva', label: 'Planejados · Evviva', description: 'Cozinhas, closets e livings. Mobiliário personalizado para o seu jeito de viver.', slides: [
    { image: evvivaKitchen, alt: 'Cozinha Evviva com ilha, armários escuros e área de refeições integrada. Acervo oficial Evviva.', position: '56% center' },
    { image: evvivaCloset, alt: 'Closet Evviva com armários abertos, iluminação interna e banco central. Acervo oficial Evviva.', position: '49% center' },
    { image: evvivaLiving, alt: 'Living Evviva com painel de televisão, estante e mobiliário em tons neutros. Acervo oficial Evviva.', position: '57% center' },
  ], href: `${site.evvivaUrl}product/`, action: 'Conhecer planejados na Evviva', external: true },
  { id: 'moveis', title: 'Móveis', brand: null, label: 'Evviva · Peças e composições', description: 'Mobiliário para compor o espaço com presença, proporção e personalidade.', slides: [{ image: images.sideboard, alt: 'Ambientação com buffet em madeira e tampo claro.', position: 'center' }], href: `${site.evvivaUrl}product/living/`, action: 'Explorar móveis na Evviva', external: true },
] as const;
