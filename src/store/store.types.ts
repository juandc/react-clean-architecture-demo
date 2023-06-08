import { Photo, PhotoList } from '@/modules/photos/photos.types';

export type StoreState = {
  orderBy: 'latest' | 'relevant';
  search: string;
  color: string;
  photos: Photo[],
  liked: Photo[],
  saved: Photo[],
};

export interface StoreDispatch {
  setOrderBy(newOrderBy): void;
  setPhotos(newPhotos: PhotoList): void;
  changeOrder(payload: {
    orderBy: StoreState['orderBy'],
    photos: PhotoList,
  }): void;
  setLiked(newLiked: PhotoList): void;
  addLike(newLiked: Photo): void;
  removeLike(likedItem: Photo): void;
}

export type StoreAdapter = StoreState & StoreDispatch;
