import { Photo, PhotoList } from '@/modules/photos/photos.types';

export type StoreState = {
  orderBy: 'latest' | 'relevant';
  search: string;
  color: string;
  photosLoading: boolean;
  photos: Photo[],
  likedLoading: boolean;
  liked: Photo[],
  savedLoading: boolean;
  saved: Photo[],
};

export interface StoreDispatch {
  setOrderBy(newOrderBy): void;
  setPhotos(newPhotos: PhotoList): void;
  setOrderBy(orderBy: StoreState['orderBy']): void;
  setLiked(newLiked: PhotoList): void;
  addLike(newLiked: Photo): void;
  removeLike(likedItem: Photo): void;
}

export type StoreAdapter = StoreState & StoreDispatch;
