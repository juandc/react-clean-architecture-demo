import type { HeaderTypes } from './types';
import styles from './Layout.module.scss';

export function Header({ title, subtitle }: HeaderTypes) {
  return (
    <header className={styles.header_container}>
      <h1 className={styles.header_title}>{title}</h1>
      {subtitle && <p className={styles.header_subtitle}>{subtitle}</p>}
    </header>
  );
}
