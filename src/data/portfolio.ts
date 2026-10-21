import type { ImageMetadata } from 'astro';
import catalog from './evviva-catalog.json';
import { collections, collectionPhotos } from './collections';

const assets = import.meta.glob<{ default: ImageMetadata }>('../assets/evviva/*', { eager: true });
export const portfolioCategories = catalog.categories;
export const portfolioCollections = collections;
export const portfolioPhotos = [...catalog.photos.map(photo => {
  const image = assets[`../assets/evviva/${photo.file}`]?.default;
  if (!image) throw new Error(`Imagem do acervo ausente: ${photo.file}`);
  return { ...photo, image, collectionIds: [] as string[], categoryTitle: portfolioCategories.find(category => category.id === photo.category)!.title };
}), ...collectionPhotos];

// Alterna ambientes e coleções, exibindo fotografias compartilhadas uma única vez.
const groups = [
  ...portfolioCategories.map(category => portfolioPhotos.filter(photo => photo.category === category.id)),
  ...collections.map(collection => portfolioPhotos.filter(photo => photo.collectionIds.includes(collection.id))),
];
const seen = new Set<string>();
export const portfolioSequence = Array.from({ length: Math.max(...groups.map(group => group.length)) }, (_, index) => groups.flatMap(group => {
  const photo = group[index];
  if (!photo || seen.has(photo.id)) return [];
  seen.add(photo.id);
  return [photo];
})).flat();

export const portfolioHighlights = ['cozinhas-05', 'dormitorios-02', 'living-11'].map(id => portfolioPhotos.find(photo => photo.id === id)!);
