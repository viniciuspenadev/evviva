import type { ImageMetadata } from 'astro';
import catalog from './evviva-collections.json';

const assets = import.meta.glob<{ default: ImageMetadata }>('../assets/collections/*', { eager: true });
export const collectionPhotos = catalog.photos.map(photo => {
  const image = assets[`../assets/collections/${photo.file}`]?.default;
  if (!image) throw new Error(`Fotografia de coleção ausente: ${photo.file}`);
  return { ...photo, image, categoryTitle: photo.collectionIds.map(id => catalog.collections.find(item => item.id === id)!.name).join(' · ') };
});
export const collections = catalog.collections.map(collection => ({
  ...collection,
  image: collectionPhotos.find(photo => photo.id === collection.coverPhotoId)!.image,
}));
