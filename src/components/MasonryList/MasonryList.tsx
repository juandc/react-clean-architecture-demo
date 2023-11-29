import type { PropsWithChildren, ComponentType } from 'react';
import { PhotoCardSkeleton } from '../PhotoCard';
import styles from './MasonryList.module.scss';

export type MasonryListTypes = {
  isLoading: boolean;
  loadingSkeleton?: ComponentType;
};

export function MasonryList({
  isLoading,
  loadingSkeleton: LoadingSkeleton = PhotoCardSkeleton,
  children,
}: PropsWithChildren<MasonryListTypes>) {
  return (
    <div className={styles.masonry_container}>
      {isLoading && (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      )}
      
      {!isLoading && children}
    </div>
  );
}
