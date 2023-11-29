import { LikeIcon, SaveIcon } from '@/components/Icons';
import styles from './PhotoCard.module.scss';

type PhotoButtonProps = {
  type: 'like' | 'save';
  isActive?: boolean;
  onClick: () => void;
};

export function PhotoButton({
  type,
  isActive = false,
  onClick,
}: PhotoButtonProps) {
  const btnStyles = `
    ${styles.photobutton_container}
    ${type === 'like' && styles.photobutton_container__like}
    ${type === 'save' && styles.photobutton_container__save}
    ${isActive && styles.photobutton_container__active}
  `;

  const iconStyles = `
    ${styles.photobutton_icon}
    ${isActive && styles.photobutton_icon__active}
  `;

  return (
    <button className={btnStyles} onClick={onClick}>
      <span className={styles.photobutton_bg} />
      <span className={iconStyles}>
        {type === 'save' && <SaveIcon />}
        {type === 'like' && <LikeIcon />}
      </span>
    </button>
  );
}
