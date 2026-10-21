// Importação manual a partir dos HTMLs oficiais salvos em docs/research/.
// Não é executada no build ou deploy.
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const definitions = [
  { id: 'stima', name: 'Stima', slug: 'stima', label: 'A arquitetura em continuidade', description: 'Portas e revestimentos que exploram a integração entre superfícies, materiais e ambientes.' },
  { id: 'persona', name: 'Persona', slug: 'persona', label: 'Liberdade para criar', description: 'O sistema construtivo peça a peça amplia as possibilidades de personalização e adaptação à arquitetura.' },
  { id: 'versa', name: 'Versa', slug: 'versa', label: 'Possibilidades em movimento', description: 'Uma estrutura que permite reposicionar módulos e explorar novas composições para diferentes espaços.' },
  { id: 'evvai', name: 'Evvai', slug: 'evvai', label: 'A presença do essencial', description: 'Buffet, bar, mesa de centro e móvel para TV assinados por Gustavo Bertolini, em madeira, pedra e metal.' },
  { id: 'ino', name: 'Ino', slug: 'ino', label: 'A expressão do aço', description: 'Cozinhas com portas e tamponamentos em aço inox 304, que exploram a linguagem do material e a funcionalidade do espaço gourmet.' },
  { id: 'ino-doc', name: 'Ino D.O.C.', slug: 'doc', label: 'Precisão em cada encontro', description: 'Uma releitura da Ino que combina desenho minimalista e aço inox 304 no mobiliário.' },
  { id: 'leggera', name: 'Leggera', slug: 'leggera', label: 'O desenho acompanha a vida', description: 'A construção permite substituir revestimentos das frentes e laterais, renovando a composição com diferentes materiais e acabamentos.' },
  { id: 'sonata', name: 'Sonata', slug: 'sonata', label: 'Composições com identidade', description: 'Sistema que amplia a personalização com diferentes combinações de frentes, materiais e acabamentos.' },
  { id: 'aria', name: 'Aria', slug: 'aria', label: 'Leveza e transparência', description: 'Desenvolvida a partir do Sistema Persona, a coleção explora o vidro em peças personalizáveis que valorizam seu interior.' },
  { id: 'o-espirito-do-lugar', name: 'O Espírito do Lugar', slug: 'o-espirito-do-lugar', label: 'Matéria, território e memória', description: 'Nicole Tomazi e Sergio Cabral aproximam o design contemporâneo da técnica artesanal da dressa, uma trama em palha de trigo ligada à história da região de origem da Evviva.' },
];
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replace(/&#0?38;/g, '&').trim();
const key = source => decodeURIComponent(new URL(source).pathname.split('/').at(-1)).replace(/-\d+x\d+(?=\.)/, '').replace(/-[1-9](?=\.)/, '');
const home = await readFile('docs/research/evviva-home.html', 'utf8');
const covers = new Map([...home.matchAll(/<style[^>]*>([^]*?)<\/style><div class="jet-engine-listing-overlay-wrap" data-url="https:\/\/evviva.com.br\/collections\/([^/]+)\/"/g)].map(match => [match[2], [...match[1].matchAll(/background-image:url\("([^"]+)"\)/g)].at(-1)?.[1]]));
const photos = [];
const bySource = new Map();
const collections = [];

for (const definition of definitions) {
  const html = await readFile(`docs/research/collection-${definition.slug}.html`, 'utf8');
  const sources = [...new Set([...html.matchAll(/<a\b[^>]*class="[^"]*\be-gallery-item\b[^"]*"[^>]*>/g)].map(match => decode(match[0].match(/\bhref="([^"]+)"/)[1])))];
  if (!sources.length) throw new Error(`Galeria ausente: ${definition.id}`);
  const photoIds = [];
  for (const [index, source] of sources.entries()) {
    const url = new URL(source);
    if (url.protocol !== 'https:' || url.hostname !== 'evviva.com.br' || !url.pathname.startsWith('/wp-content/uploads/')) throw new Error('Origem de imagem inesperada');
    let photo = bySource.get(key(source));
    if (!photo) {
      const id = `colecao-${definition.id}-${String(index + 1).padStart(2, '0')}`;
      photo = { id, category: 'colecoes', collectionIds: [], title: `${definition.name} / ${String(index + 1).padStart(2, '0')}`, alt: `Coleção ${definition.name}, acervo oficial Evviva, imagem ${String(index + 1).padStart(2, '0')}.`, file: id + path.extname(url.pathname).toLowerCase(), source, sourcePage: `https://evviva.com.br/collections/${definition.slug}/` };
      photos.push(photo);
      bySource.set(key(source), photo);
    }
    if (!photo.collectionIds.includes(definition.id)) photo.collectionIds.push(definition.id);
    photoIds.push(photo.id);
  }
  const coverSource = covers.get(definition.slug);
  const cover = coverSource ? bySource.get(key(coverSource)) : undefined;
  if (!cover || !photoIds.includes(cover.id)) throw new Error(`Capa oficial não encontrada na galeria: ${definition.id}`);
  collections.push({ ...definition, url: `https://evviva.com.br/collections/${definition.slug}/`, coverPhotoId: cover.id, photoIds: [...new Set(photoIds)] });
}

await mkdir('src/assets/collections', { recursive: true });
if (process.argv.includes('--download')) {
  let cursor = 0;
  let completed = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (cursor < photos.length) {
      const photo = photos[cursor++];
      const target = path.join('src/assets/collections', photo.file);
      try { if ((await stat(target)).size > 0) { completed++; continue; } } catch {}
      const response = await fetch(photo.source, { signal: AbortSignal.timeout(60000) });
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`${photo.id}: HTTP ${response.status}`);
      await writeFile(target, Buffer.from(await response.arrayBuffer()));
      completed++;
      if (completed % 20 === 0) console.log(`Fotografias importadas: ${completed}/${photos.length}`);
    }
  }));
}
// A origem também contém arquivos idênticos com nomes diferentes.
const uniquePhotos = [];
const hashes = new Map();
const redirects = new Map();
for (const photo of photos) {
  const bytes = await readFile(path.join('src/assets/collections', photo.file));
  const hash = createHash('sha256').update(bytes).digest('hex');
  const original = hashes.get(hash);
  if (original) {
    original.collectionIds = [...new Set([...original.collectionIds, ...photo.collectionIds])];
    redirects.set(photo.id, original.id);
  } else { hashes.set(hash, photo); uniquePhotos.push(photo); }
}
collections.forEach(collection => {
  collection.photoIds = [...new Set(collection.photoIds.map(id => redirects.get(id) ?? id))];
  collection.coverPhotoId = redirects.get(collection.coverPhotoId) ?? collection.coverPhotoId;
  collection.photoIds.forEach((id, index) => {
    const photo = uniquePhotos.find(item => item.id === id);
    if (photo.collectionIds[0] !== collection.id) return;
    const number = String(index + 1).padStart(2, '0');
    photo.title = `${collection.name} / ${number}`;
    photo.alt = `Coleção ${collection.name}, acervo oficial Evviva, imagem ${number}.`;
  });
});
await writeFile('src/data/evviva-collections.json', JSON.stringify({ importedAt: '2026-10-21', collections, photos: uniquePhotos }, null, 2) + '\n');
console.log(JSON.stringify({ uniquePhotos: uniquePhotos.length, collections: collections.map(item => ({ name: item.name, photos: item.photoIds.length })) }, null, 2));
