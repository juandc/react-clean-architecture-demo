import React from 'react';
import { StoreState } from '../store.types';
import { appReducer, AppAction } from './reducer';

const initialState: StoreState = {
  color: 'black_and_white',
  orderBy: 'latest',
  search: '',
  photos: [],
  liked: [],
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
    orderBy: serverProps.orderBy || initialState.orderBy,
    search: serverProps.search || initialState.search,
    photos: serverProps.photos || initialState.photos,
    liked: serverProps.liked || initialState.liked,
    saved: serverProps.saved || initialState.saved,
  });

  console.log({ state });

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
