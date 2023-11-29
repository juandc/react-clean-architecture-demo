import React from 'react';
import { useStore } from '@/store/ContextStore';
import type { Photo } from '@/modules/photos/photos.types';
import { LikedLocalStorageData } from '@/modules/liked/liked.data';
import { SavedLocalStorageData } from '@/modules/saved/saved.data';
import styles from './PhotoCard.module.scss';

type PhotoCardProps = Photo & {
  isLiked?: boolean;
  isSaved?: boolean;
};

export function PhotoCard(props: PhotoCardProps) {
  const {
    isLiked = false,
    isSaved = false,
    ...photo
  } = props;
  const { handleLike } = useLiked(photo);
  const { handleSave } = useSaved(photo);
  
  const handleDoubleClick = (e) => {
    if (e.detail == 2) handleLike();
  };

  return (
    <div
      className={styles.card_container}
      onClick={handleDoubleClick}
    >
      <img
        className={styles.card_img}
        src={props.urls.small}
        loading="lazy"
        style={{ maxHeight: 600, objectFit:'cover' }}
        height="100%"
      />

      <div className={styles.card_actions}>
        <PhotoButton
          type="save"
          isActive={isSaved}
          onClick={handleSave}
        />
        <PhotoButton
          type="like"
          isActive={isLiked}
          onClick={handleLike}
        />
      </div>
    </div>
  );
}

function useLiked(photo) {
  const { likedLoading, addLike, removeLike } = useStore();
  const likedData = new LikedLocalStorageData();
  
  const handleLike = async () => {
    if (likedLoading) return;
    const wasLiked = await likedData.toggleLike(photo);
    if (wasLiked) removeLike(photo);
    else addLike(photo);
  }
  
  return {
    handleLike,
  };
}

function useSaved(photo) {
  const { savedLoading, addSave, removeSave } = useStore();
  const savedData = new SavedLocalStorageData();
  
  const handleSave = async () => {
    if (savedLoading) return;
    const wasLiked = await savedData.toggleSave(photo);
    if (wasLiked) removeSave(photo);
    else addSave(photo);
  }
  
  return {
    handleSave,
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

export function PhotoCardSkeleton() {
  return (
    <div className={`
      ${styles.card_container}
      ${styles.card_container__loading}
    `} />
  );
}
