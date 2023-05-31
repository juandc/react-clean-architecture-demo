import React from 'react';
import { Photo } from '@/modules/photos/photos.types';
import styles from './PhotoCard.module.scss';

export function PhotoCard({ urls, description }: Photo) {
  return (
    <div className={styles.card_container}>
      <img className="card_img" src={urls.thumb} />
      <p className="card_desc">{description}</p>
    </div>
  );
}
