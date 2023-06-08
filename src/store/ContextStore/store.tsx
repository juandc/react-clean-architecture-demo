import React from 'react';
import { StoreState } from '../store.types';
import { appReducer, AppAction } from './reducer';

const initialState: StoreState = {
  color: 'black_and_white',
  orderBy: 'latest',
  search: '',
  photosLoading: true,
  photos: [],
  likedLoading: true,
  liked: [],
  savedLoading: true,
  saved: [],
};

type AppContextType = [
  StoreState,
  React.Dispatch<AppAction>
];

export const AppContext = React.createContext<AppContextType>([initialState, () => {}]);

export function AppProvider({ children, serverProps }) {
  const [state, dispatch] = React.useReducer(appReducer, {
    color: serverProps.color || initialState.color,
    orderBy: serverProps.order_by || initialState.orderBy,
    search: serverProps.search || initialState.search,
    photosLoading: serverProps?.photos?.length ? false : true,
    photos: serverProps.photos || initialState.photos,
    likedLoading: serverProps?.liked?.length ? false : true,
    liked: serverProps.liked || initialState.liked,
    savedLoading: serverProps?.saved?.length ? false : true,
    saved: serverProps.saved || initialState.saved,
  });

  // console.log({ state });

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
