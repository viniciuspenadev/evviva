// Importação manual do acervo público. Não é executada durante o build/deploy.
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const categories = [
  { id: 'cozinhas', title: 'Cozinhas', url: 'https://evviva.com.br/product/cozinhas/' },
  { id: 'dormitorios', title: 'Dormitórios', url: 'https://evviva.com.br/product/dormitorios/' },
  { id: 'living', title: 'Living', url: 'https://evviva.com.br/product/living/' },
  { id: 'banho', title: 'Banho', url: 'https://evviva.com.br/product/banho/' },
  { id: 'corporativo', title: 'Corporativo', url: 'https://evviva.com.br/product/corporativo/' },
  { id: 'acessorios', title: 'Acessórios', url: 'https://evviva.com.br/product/acessorios/' },
  { id: 'acabamentos', title: 'Acabamentos', url: 'https://evviva.com.br/acabamentos/' },
];
const decode = value => value.replace(/&amp;/g, '&').replace(/&#0?38;/g, '&').replace(/&quot;/g, '"').trim();
const photos = [];
for (const category of categories) {
  const html = await readFile(`docs/research/evviva-${category.id}.html`, 'utf8');
  let records;
  if (category.id === 'acabamentos') {
    records = html.split(/<div class="jet-listing-grid__item\b/).slice(1).flatMap(block => {
      const source = block.match(/<img\b[^>]*\bsrc="([^"]+\.(?:png|jpe?g|webp))"/i)?.[1];
      const title = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1].replace(/<[^>]*>/g, '').trim();
      return source && title ? [{ source: decode(source), sourceTitle: decode(title), title: decode(title) }] : [];
    });
  } else {
    records = [...html.matchAll(/<a\b[^>]*class="[^"]*\be-gallery-item\b[^"]*"[^>]*>/g)].map(match => ({
      source: decode(match[0].match(/\bhref="([^"]+)"/)?.[1] ?? ''),
      sourceTitle: decode(match[0].match(/data-elementor-lightbox-title="([^"]*)"/)?.[1] ?? ''),
    }));
  }
  const unique = [...new Map(records.map(item => [item.source, item])).values()];
  if (!unique.length) throw new Error(`Sem imagens em ${category.id}`);
  unique.forEach((record, index) => {
    const url = new URL(record.source);
    if (url.protocol !== 'https:' || url.hostname !== 'evviva.com.br' || !url.pathname.startsWith('/wp-content/uploads/')) throw new Error('Origem de imagem inesperada');
    const id = `${category.id}-${String(index + 1).padStart(2, '0')}`;
    const extension = path.extname(url.pathname).toLowerCase();
    photos.push({ id, category: category.id, title: record.title ?? `${category.title} / ${String(index + 1).padStart(2, '0')}`, alt: category.id === 'acabamentos' ? `Amostra do acabamento ${record.title}, do catálogo Evviva.` : `${category.title} do acervo oficial Evviva, imagem ${String(index + 1).padStart(2, '0')}.`, file: `${id}${extension}`, source: record.source, sourceTitle: record.sourceTitle, sourcePage: category.url });
  });
}
await mkdir('src/assets/evviva', { recursive: true });
await writeFile('src/data/evviva-catalog.json', JSON.stringify({ importedAt: '2026-10-21', categories, photos }, null, 2) + '\n');
if (process.argv.includes('--download')) {
  let cursor = 0;
  let completed = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (cursor < photos.length) {
      const photo = photos[cursor++];
      const target = path.join('src/assets/evviva', photo.file);
      try { if ((await stat(target)).size > 0) { completed++; continue; } } catch {}
      const response = await fetch(photo.source, { signal: AbortSignal.timeout(60000) });
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`${photo.id}: HTTP ${response.status}`);
      await writeFile(target, Buffer.from(await response.arrayBuffer()));
      completed++;
      if (completed % 20 === 0) console.log(`Imagens locais: ${completed}/${photos.length}`);
    }
  }));
}
console.log(JSON.stringify({ total: photos.length, categories: categories.map(category => ({ id: category.id, images: photos.filter(photo => photo.category === category.id).length })) }));
