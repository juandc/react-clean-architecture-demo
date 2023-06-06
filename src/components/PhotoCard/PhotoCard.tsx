import React from 'react';
import { Photo } from '@/modules/photos/photos.types';
import { useApp } from '@/store/ContextStore';
import styles from './PhotoCard.module.scss';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';

export function PhotoCard({ urls, ...props }: Photo) {
  const { addLike } = useLiked();
  
  const handleLike = () => {
    console.log('Like');
    addLike({ ...props, urls });
  };
  
  const handleDoubleClick = (e) => {
    if (e.detail == 2) {
      handleLike();
    }
  };

  return (
    <div
      className={styles.card_container}
      onClick={handleDoubleClick}
    >
      <img
        className={styles.card_img}
        src={urls.small}
        loading="lazy"
        style={{ maxHeight: 600, objectFit:'cover' }}
        height="100%"
      />

      <div className={styles.card_actions}>
        <PhotoButton />
        <PhotoButton onClick={handleLike} />
      </div>
    </div>
  );
}

function useLiked() {
  const { setLiked } = useApp();
  
  const likedData = new LikedLocalStorageData();

  const addLike = async (newValue) => {
    const rawData = await likedData.addLiked(newValue);
    const liked = likedData.createLikedListAdapter(rawData);
    setLiked(liked);
  }
  
  return {
    addLike,
  };
}

function PhotoButton(props) {
  return (
    <button
      className={styles.photobutton_container}
      onClick={props.onClick}
    >
      <span className={styles.photobutton_bg}></span>
      <span className={styles.photobutton_icon}></span>
    </button>
  );
}
