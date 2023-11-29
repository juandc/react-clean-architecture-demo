import type { UIEvent } from 'react';
import { useStore } from '@/store/ContextStore';
import type { Photo } from '@/modules/photos/photos.types';
import { likedData } from '@/modules/liked/liked.data';
import { savedData } from '@/modules/saved/saved.data';
import { PhotoButton } from './PhotoButton';
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
  
  const handleDoubleClick = (e: UIEvent<HTMLDivElement>) => {
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
