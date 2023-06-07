import { Photo, PhotoList } from '@/modules/photos/photos.types';

export type StoreState = {
  photos: Photo[],
  liked: Photo[],
  saved: Photo[],
};

export interface StoreDispatch {
  setPhotos(newPhotos: PhotoList): void;
  // addPhoto(newPhoto: Photo): void;
  setLiked(newLiked: PhotoList): void;
  addLike(newLiked: Photo): void;
  removeLike(likedItem: Photo): void;
}

export type StoreAdapter = StoreState & StoreDispatch;
