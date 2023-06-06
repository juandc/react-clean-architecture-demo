import { PhotoList, Photo } from '@/modules/photos/photos.types';
import { StoreState } from '../store.types';

export const enum AppActionTypes {
  SET_PHOTOS = 'SET_PHOTOS',
  ADD_PHOTOS = 'ADD_PHOTO',
};

type SetPhotosPayload = {
  type: AppActionTypes.SET_PHOTOS,
  payload: PhotoList,
};

type AddPhotoPayload = {
  type: AppActionTypes.ADD_PHOTOS,
  payload: Photo,
};

export type AppAction = SetPhotosPayload | AddPhotoPayload;

export const appReducer = (state: StoreState, action: AppAction) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return {
        ...state,
        photos: [...action.payload],
      };
    case 'ADD_PHOTO':
      return {
        ...state,
        photos: [
          action.payload,
          ...state.photos,
        ],
      };
    default:
      return state;
  }
};
