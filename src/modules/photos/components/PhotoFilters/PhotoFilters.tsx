import React from 'react';
import { OrderByFilter } from './OrderByFilter';
import { ColorsFilter } from './ColorsFilter';
import styles from './PhotoFilters.module.scss';

export function PhotoFilters() {
  return (
    <div className={styles.photofilters_container}>
      <OrderByFilter />
      <ColorsFilter />      
    </div>
  );
}


