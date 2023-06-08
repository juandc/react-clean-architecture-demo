import { PhotoList, Photo } from '@/modules/photos/photos.types';
import { StoreState } from '../store.types';

export const enum AppActionTypes {
  SET_PHOTOS = 'SET_PHOTOS',
  SET_ORDERBY = 'SET_ORDERBY',
  CHANGE_ORDER = 'CHANGE_ORDER',
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

type CHANGE_ORDER = {
  type: AppActionTypes.CHANGE_ORDER,
  payload: {
    orderBy: StoreState['orderBy'],
    photos: PhotoList,
  },
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
  | CHANGE_ORDER
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
      };
    case AppActionTypes.SET_ORDERBY:
      return {
        ...state,
        orderBy: action.payload,
      };
    case AppActionTypes.CHANGE_ORDER:
      return {
        ...state,
        orderBy: action.payload.orderBy,
        photos: action.payload.photos,
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
    case AppActionTypes.REMOVE_LIKE:
      return {
        ...state,
        liked: state.liked.filter(x => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};
