import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
assert(existsSync(root), 'Execute npm run build antes da verificação.');
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const files = walk(root);
const pages = files.filter(file => file.endsWith('.html'));
const expected = ['index.html', 'portfolio/index.html', 'ambientes/cozinhas/index.html', 'ambientes/livings/index.html', 'ambientes/closets/index.html', 'surform-ssm/index.html', 'colecoes/index.html', 'materiais/index.html', 'nossa-loja/index.html', 'arquitetos/index.html', 'privacidade/index.html', '404.html'];
expected.forEach(file => assert(existsSync(path.join(root, file)), `Rota ausente: ${file}`));
let checkedLinks = 0;
let checkedImages = 0;
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const relative = path.relative(root, file);
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${relative}: esperado um H1.`);
  assert.match(html, /<html[^>]*lang="pt-BR"/, `${relative}: idioma ausente.`);
  assert.match(html, /name="robots" content="noindex, nofollow"/, `${relative}: prévia deve manter noindex.`);
  assert.match(html, /<title>[^<]+<\/title>/, `${relative}: título ausente.`);
  assert(!/lorem ipsum|href="javascript:|href="#"/i.test(html), `${relative}: placeholder ou link inválido.`);
  const pagePath = '/' + relative.replaceAll(path.sep, '/').replace(/index\.html$/, '');
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|data:|mailto:|tel:)/.test(href)) continue;
    const url = new URL(href, `https://preview.invalid${pagePath}`);
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, 'index.html');
    assert(existsSync(target), `${relative}: destino local inexistente ${href}`);
    if (url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      const targetHtml = readFileSync(target, 'utf8');
      assert(targetHtml.includes(`id="${id}"`), `${relative}: âncora inexistente ${href}`);
    }
    checkedLinks++;
  }
  for (const match of html.matchAll(/<img\s[^>]*>/g)) {
    assert.match(match[0], /alt="[^"]+"/, `${relative}: imagem sem alternativa.`);
    assert.match(match[0], /width="\d+"/, `${relative}: imagem sem largura intrínseca.`);
    assert.match(match[0], /height="\d+"/, `${relative}: imagem sem altura intrínseca.`);
    checkedImages++;
  }
}
const webp = files.filter(file => file.endsWith('.webp'));
assert(webp.length >= 3, 'Imagens responsivas WebP não geradas.');
assert(readFileSync(path.join(root, 'robots.txt'), 'utf8').includes('Disallow: /'), 'robots.txt da prévia incorreto.');
console.log(JSON.stringify({ pages: pages.length, localReferences: checkedLinks, imageInstances: checkedImages, optimizedWebp: webp.length, status: 'OK' }, null, 2));
