import React from 'react';
import { Photo } from '@/modules/photos/photos.types';
import styles from './PhotoCard.module.scss';

export function PhotoCard({ urls }: Photo) {
  const handleDoubleClick = (e) => {
    if (e.detail == 2) {
      console.log('Like');
    }
  };
  
  return (
    <div className={styles.card_container} onClick={handleDoubleClick}>
      <img className={styles.card_img} src={urls.thumb} />
      <div className={styles.card_actions}>
        <PhotoButton />
        <PhotoButton />
      </div>
      {/* <img className="card_img" src={urls.small} />
      <img className="card_img" src={urls.regular} /> */}
    </div>
  );
}

function PhotoButton() {
  return (
    <button className={styles.photobutton_container}>
      <span className={styles.photobutton_bg}></span>
      <span className={styles.photobutton_icon}></span>
    </button>
  );
}
