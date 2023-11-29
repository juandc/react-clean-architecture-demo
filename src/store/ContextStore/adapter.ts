import React from 'react';
import { StoreAdapter } from '../store.types';
import { AppContext } from './store';
import { AppActionTypes } from './reducer';

export function useStore(): StoreAdapter {
  const [state, dispatch] = React.useContext(AppContext);

  const setPhotos = (payload) => {
    dispatch({ type: AppActionTypes.SET_PHOTOS, payload });
  };
  
  const setOrderBy = (payload) => {
    dispatch({ type: AppActionTypes.SET_ORDERBY, payload });
  };
  
  const setSearch = (payload) => {
    dispatch({ type: AppActionTypes.SET_SEARCH, payload });
  };
  
  const setColor = (payload) => {
    dispatch({ type: AppActionTypes.SET_COLOR, payload });
  };

  const setLiked = (payload) => {
    dispatch({ type: AppActionTypes.SET_LIKED, payload });
  };

  const addLike = (payload) => {
    dispatch({ type: AppActionTypes.ADD_LIKE, payload });
  };

  const removeLike = (payload) => {
    dispatch({ type: AppActionTypes.REMOVE_LIKE, payload });
  };

  const setSaved = (payload) => {
    dispatch({ type: AppActionTypes.SET_SAVED, payload });
  };

  const addSave = (payload) => {
    dispatch({ type: AppActionTypes.ADD_SAVE, payload });
  };

  const removeSave = (payload) => {
    dispatch({ type: AppActionTypes.REMOVE_SAVE, payload });
  };
  
  return {
    color: state.color,
    orderBy: state.orderBy,
    search: state.search,
    photosLoading: state.photosLoading,
    photos: state.photos,
    likedLoading: state.likedLoading,
    liked: state.liked,
    savedLoading: state.savedLoading,
    saved: state.saved,
    setPhotos,
    setOrderBy,
    setSearch,
    setColor,
    setLiked,
    addLike,
    removeLike,
    setSaved,
    addSave,
    removeSave,
  };
}
