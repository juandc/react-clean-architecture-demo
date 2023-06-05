import React from 'react';
import styles from './PhotoSearch.module.scss';

export function PhotoSearch() {
  return (
    <div className={styles.photosearch_container}>
      <input
        type="text"
        className={styles.photosearch_input}
        placeholder="Search..."
      />
      <span className={styles.photosearch_bg} />
    </div>
  );
}
