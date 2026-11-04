import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
assert(existsSync(root), 'Execute npm run build antes da verificação.');
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const files = walk(root);
const pages = files.filter(file => file.endsWith('.html'));
const expected = ['index.html', 'superficies/index.html', 'portfolio/index.html', ...['cozinhas','lavabos','banhos','areas-gourmet','lavanderias','comerciais','clinicas'].map(slug => `aplicacoes/${slug}/index.html`), 'sobre/index.html', 'contato/index.html', 'arquitetos/index.html', 'privacidade/index.html', '404.html'];
expected.forEach(file => assert(existsSync(path.join(root, file)), `Rota ausente: ${file}`));
const excludedBrand = /evviva/i;
// Exceção técnica confirmada pelo cliente: apenas o domínio temporário.
const presentationOrigin = 'https://evviva.bluedigitalhub.com.br';
for (const file of files) {
  assert(!excludedBrand.test(path.relative(root,file)), 'Arquivo de marca retirada no pacote publicado.');
  if (/\.(?:html|css|js|svg|json)$/i.test(file)) assert(!excludedBrand.test(readFileSync(file,'utf8').replaceAll(presentationOrigin, '')), `${path.relative(root,file)}: referência à marca retirada.`);
}
let checkedLinks = 0;
let checkedImages = 0;
let redirects = 0;
const shareImages = new Set();
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const relative = path.relative(root, file);
  const redirect = html.match(/<meta[^>]*http-equiv="refresh"[^>]*content="[^\"]*url=([^\"]+)"/i);
  if (redirect) {
    const url = new URL(redirect[1], 'https://preview.invalid');
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, 'index.html');
    assert(existsSync(target), `${relative}: destino de redirecionamento inexistente.`);
    redirects++;
    continue;
  }
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${relative}: esperado um H1.`);
  assert.match(html, /<html[^>]*lang="pt-BR"/, `${relative}: idioma ausente.`);
  assert.match(html, /name="robots" content="noindex, nofollow"/, `${relative}: prévia deve manter noindex.`);
  assert.match(html, /<title>[^<]+<\/title>/, `${relative}: título ausente.`);
  assert.match(html, /property="og:site_name" content="SURFORM"/, `${relative}: marca incorreta.`);
  const imageMatch = [...html.matchAll(/property="og:image" content="([^"]+)"/g)];
  assert.equal(imageMatch.length, 1, `${relative}: imagem de compartilhamento ausente ou duplicada.`);
  const imageUrl = new URL(imageMatch[0][1]);
  assert.equal(imageUrl.protocol, 'https:', `${relative}: imagem social exige URL pública HTTPS.`);
  assert(!/^(localhost|127\.)/i.test(imageUrl.hostname), `${relative}: imagem social aponta para localhost.`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical, `${relative}: canonical ausente.`);
  assert.equal(html.match(/property="og:url" content="([^"]+)"/)?.[1], canonical, `${relative}: og:url deve corresponder ao canonical.`);
  assert.equal(imageUrl.origin, new URL(canonical).origin, `${relative}: imagem social deve usar o domínio do site.`);
  assert.match(html, /property="og:image:type" content="image\/jpeg"/, `${relative}: formato social incorreto.`);
  assert.match(html, /property="og:image:width" content="1200"/, `${relative}: largura social incorreta.`);
  assert.match(html, /property="og:image:height" content="630"/, `${relative}: altura social incorreta.`);
  assert.match(html, /property="og:image:alt" content="[^"]+"/, `${relative}: alternativa social ausente.`);
  assert.match(html, /name="twitter:card" content="summary_large_image"/, `${relative}: cartão social grande ausente.`);
  assert.equal(html.match(/name="twitter:image" content="([^"]+)"/)?.[1], imageUrl.href, `${relative}: imagens sociais divergentes.`);
  const imageFile = path.join(root, decodeURIComponent(imageUrl.pathname).replace(/^\/+/, ''));
  assert(existsSync(imageFile), `${relative}: imagem social não existe no build.`);
  assert.match(imageFile, /\.jpe?g$/i, `${relative}: imagem social deve ser JPEG.`);
  const imageBytes = readFileSync(imageFile);
  assert(imageBytes.length > 0 && imageBytes.length < 500_000, `${relative}: imagem social vazia ou maior que 500 kB.`);
  assert.equal(imageBytes.readUInt16BE(0), 0xffd8, `${relative}: arquivo social não é um JPEG válido.`);
  shareImages.add(imageFile);
  assert(!/planejados?|m[óo]veis|mobili[aá]rio/iu.test(html), `${relative}: oferta fora do escopo de superfícies sólidas.`);
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
const robots = readFileSync(path.join(root, 'robots.txt'), 'utf8');
assert.match(robots, /^Allow: \/\s*$/m, 'robots.txt deve permitir a leitura das prévias sociais e das regras noindex.');
assert(!/^Disallow: \/\s*$/m.test(robots), 'robots.txt está bloqueando a leitura dos metadados.');
console.log(JSON.stringify({ pages: pages.length, redirects, localReferences: checkedLinks, imageInstances: checkedImages, optimizedWebp: webp.length, socialImages: shareImages.size, status: 'OK' }, null, 2));
