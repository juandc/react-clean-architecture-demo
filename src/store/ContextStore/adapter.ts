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
  
  const changeOrder = (payload) => {
    dispatch({ type: AppActionTypes.CHANGE_ORDER, payload });
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
  
  return {
    color: state.color,
    orderBy: state.orderBy,
    search: state.search,
    photos: state.photos,
    liked: state.liked,
    saved: state.saved,
    setPhotos,
    setOrderBy,
    changeOrder,
    setLiked,
    addLike,
    removeLike,
  };
}
