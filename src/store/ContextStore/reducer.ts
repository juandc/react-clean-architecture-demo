import { PhotoList, Photo } from '@/modules/photos/photos.types';
import { StoreState } from '../store.types';

export const enum AppActionTypes {
  SET_PHOTOS = 'SET_PHOTOS',
  ADD_PHOTOS = 'ADD_PHOTO',
  SET_LIKED = 'SET_LIKED',
  ADD_LIKE = 'ADD_LIKE',
};

type SetPhotosPayload = {
  type: AppActionTypes.SET_PHOTOS,
  payload: PhotoList,
};

type AddPhotoPayload = {
  type: AppActionTypes.ADD_PHOTOS,
  payload: Photo,
};

type SetLikedPayload = {
  type: AppActionTypes.SET_LIKED,
  payload: PhotoList,
};

type AddLikePayload = {
  type: AppActionTypes.ADD_LIKE,
  payload: Photo,
};

export type AppAction = (
  SetPhotosPayload
  | AddPhotoPayload
  | SetLikedPayload
  | AddLikePayload
);

export const appReducer = (state: StoreState, action: AppAction) => {
  switch (action.type) {
    case AppActionTypes.SET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload],
      };
    case AppActionTypes.ADD_PHOTOS:
      return {
        ...state,
        photos: [
          action.payload,
          ...state.photos,
        ],
      };
    case AppActionTypes.SET_LIKED:
      return {
        ...state,
        liked: [...action.payload],
      };
    case AppActionTypes.ADD_LIKE:
      return {
        ...state,
        liked: [
          action.payload,
          ...state.liked,
        ],
      };
    default:
      return state;
  }
};
