import { Link } from "../Link";
import { LikeIcon, SaveIcon } from '@/components/Icons';
import styles from './Layout.module.scss';

export function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <figure className={styles.nav_logo}>
        <Link href="/">La photothèque</Link>
      </figure>

      <ul className={styles.nav_list}>
        <li className={`${styles.nav_listitem} ${styles.nav_listitem__saved}`}>
          <Link href="/saved">
            <SaveIcon />
          </Link>
        </li>
        <li className={`${styles.nav_listitem} ${styles.nav_listitem__liked}`}>
          <Link href="/liked">
            <LikeIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
