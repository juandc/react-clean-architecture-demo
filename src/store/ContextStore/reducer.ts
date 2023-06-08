import { PhotoList, Photo } from '@/modules/photos/photos.types';
import { StoreState } from '../store.types';

export const enum AppActionTypes {
  SET_PHOTOS = 'SET_PHOTOS',
  SET_ORDERBY = 'SET_ORDERBY',
  SET_COLOR = 'SET_COLOR',
  SET_LIKED = 'SET_LIKED',
  ADD_LIKE = 'ADD_LIKE',
  REMOVE_LIKE = 'REMOVE_LIKE',
};

type SetPhotosPayload = {
  type: AppActionTypes.SET_PHOTOS,
  payload: PhotoList,
};

type SetOrderByPayload = {
  type: AppActionTypes.SET_ORDERBY,
  payload: StoreState['orderBy'],
};

type SetColorPayload = {
  type: AppActionTypes.SET_COLOR,
  payload: StoreState['color'],
};

type SetLikedPayload = {
  type: AppActionTypes.SET_LIKED,
  payload: PhotoList,
};

type AddLikePayload = {
  type: AppActionTypes.ADD_LIKE,
  payload: Photo,
};

type RemoveLikePayload = {
  type: AppActionTypes.REMOVE_LIKE,
  payload: Photo,
};

export type AppAction = (
  SetPhotosPayload
  | SetOrderByPayload
  | SetColorPayload
  | SetLikedPayload
  | AddLikePayload
  | RemoveLikePayload
);

export const appReducer = (state: StoreState, action: AppAction): StoreState => {
  switch (action.type) {
    case AppActionTypes.SET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload],
        photosLoading: false,
      };
    case AppActionTypes.SET_ORDERBY:
      return {
        ...state,
        orderBy: action.payload,
        photosLoading: true,
      };
    case AppActionTypes.SET_COLOR:
      return {
        ...state,
        color: action.payload,
        photosLoading: true,
      };
    case AppActionTypes.SET_LIKED:
      return {
        ...state,
        liked: [...action.payload],
        likedLoading: false,
      };
    case AppActionTypes.ADD_LIKE:
      return {
        ...state,
        liked: [
          action.payload,
          ...state.liked,
        ],
      };
    case AppActionTypes.REMOVE_LIKE:
      return {
        ...state,
        liked: state.liked.filter(x => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};
