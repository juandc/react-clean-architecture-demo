import React from 'react';
import { StoreAdapter } from '../store.types';
import { AppContext } from './store';
import { AppActionTypes } from './reducer';

export function useApp(): StoreAdapter {
  const [state, dispatch] = React.useContext(AppContext);

  const setPhotos = (payload) => {
    dispatch({
      type: AppActionTypes.SET_PHOTOS,
      payload,
    })
  };

  const addPhoto = (payload) => {
    dispatch({
      type: AppActionTypes.ADD_PHOTOS,
      payload,
    })
  };
  
  return {
    photos: state.photos,
    liked: state.liked,
    saved: state.saved,
    setPhotos,
    addPhoto,
  };
}
