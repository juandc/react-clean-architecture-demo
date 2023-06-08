import { Photo, PhotoList } from '@/modules/photos/photos.types';

export type StoreState = {
  orderBy: 'latest' | 'relevant';
  search: string;
  color: 'black_and_white' | 'black' | 'purple' | 'magenta' | 'teal' | 'green' | 'yellow' | 'orange' | 'red' | 'blue' | 'white';
  photosLoading: boolean;
  photos: Photo[];
  likedLoading: boolean;
  liked: Photo[];
  savedLoading: boolean;
  saved: Photo[];
};

export interface StoreDispatch {
  setOrderBy(newOrderBy): void;
  setPhotos(newPhotos: PhotoList): void;
  setOrderBy(orderBy: StoreState['orderBy']): void;
  setColor(color: StoreState['color']): void;
  setLiked(newLiked: PhotoList): void;
  addLike(newLiked: Photo): void;
  removeLike(likedItem: Photo): void;
}

export type StoreAdapter = StoreState & StoreDispatch;
