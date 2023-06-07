import React from 'react';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { Photo } from '@/modules/photos/photos.types';
import { useStore } from '@/store/ContextStore';
import styles from './PhotoCard.module.scss';

type PhotoCardProps = Photo & {
  isLiked: boolean,
};

export function PhotoCard(props: PhotoCardProps) {
  const { urls } = props;
  const { handleLike } = useLiked(props);
  
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
        <PhotoButton type="save" />
        <PhotoButton
          type="like"
          isActive={props.isLiked}
          onClick={handleLike}
        />
      </div>
    </div>
  );
}

function useLiked(photo) {
  const { addLike, removeLike } = useStore();
  
  const handleLike = async () => {
    const likedData = new LikedLocalStorageData();
    const isLiked = await likedData.toggleLike(photo);

    if (isLiked) removeLike(photo);
    else addLike(photo);
  }
  
  return {
    handleLike,
  };
}

function PhotoButton(props) {
  const style = `
    ${styles.photobutton_container}
    ${props.type === 'like' && styles.photobutton_container__like}
    ${props.type === 'save' && styles.photobutton_container__save}
    ${props.isActive && styles.photobutton_container__active}
  `;

  return (
    <button
      className={style}
      onClick={props.onClick}
    >
      <span className={styles.photobutton_bg}></span>
      <span className={styles.photobutton_icon}></span>
    </button>
  );
}
