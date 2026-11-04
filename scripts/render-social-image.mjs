import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { create } from 'fontkitten';

// Usa os contornos da mesma fonte do site, sem depender de fontes do sistema.
const source = process.argv[2] || 'src/assets/surform/cozinha-hero-aprovada-2026-11-04.png';
const target = process.argv[3] || 'src/assets/surform/compartilhamento-surform-hero-2026-11-04.png';
const font = create(await readFile('node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff'));
if (font.isCollection || font.familyName !== 'DM Sans') throw new Error('Fonte SURFORM incorreta.');
const size = 52;
const scale = size / font.unitsPerEm;
const spacing = size * 0.23;
let x = 72;
const glyphs = [...'SURFORM'].map(character => {
  const glyph = font.glyphForCodePoint(character.codePointAt(0));
  const element = `<path d="${glyph.path.toSVG()}" transform="translate(${x.toFixed(3)} 270) scale(${scale} ${-scale})"/>`;
  x += glyph.advanceWidth * scale + spacing;
  return element;
});
const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><g fill="#f3f0e9">${glyphs.join('')}</g></svg>`);
await sharp(source).resize(1200, 630, { fit: 'cover', position: 'centre' }).composite([{ input: overlay }]).png().toFile(target);
await writeFile('docs/research/surform-marca-compartilhamento.svg', overlay);
console.log(JSON.stringify({ source, target, font: font.familyName, weight: 400, letterSpacing: '0.23em', width: 1200, height: 630, wordmarkWidth: +(x - 72 - spacing).toFixed(1), filename: path.basename(target) }));
