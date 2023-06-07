import React from 'react';
import { StoreState } from '../store.types';
import { appReducer, AppAction } from './reducer';

const initialState: StoreState = {
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
