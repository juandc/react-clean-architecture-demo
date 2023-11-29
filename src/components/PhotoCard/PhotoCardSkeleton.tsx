import styles from './PhotoCard.module.scss';

export function PhotoCardSkeleton() {
  return (
    <div className={`
      ${styles.card_container}
      ${styles.card_container__loading}
    `} />
  );
}
