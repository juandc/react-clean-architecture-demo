import React, { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import { Link } from '../Link';

type LayoutTypes = HeaderTypes & { color: string };

export function Layout({
  title,
  subtitle,
  color,
  children,
}: PropsWithChildren<LayoutTypes>) {
  return (
    <div className={`${styles.layout_container} ${color}`}>
      <Navbar />
      <Header title={title} subtitle={subtitle} />
      <Main>{children}</Main>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <figure className={styles.nav_logo}>
        <Link href="/">La photothèque</Link>
      </figure>

      <ul className={styles.nav_list}>
        <li className={`${styles.nav_listitem} ${styles.nav_listitem__saved}`}>
          <Link href="/saved">S</Link>
        </li>
        <li className={`${styles.nav_listitem} ${styles.nav_listitem__liked}`}>
          <Link href="/liked">L</Link>
        </li>
      </ul>
    </nav>
  );
}

type HeaderTypes = {
  title: string;
  subtitle?: string;
};

export function Header({ title, subtitle }: HeaderTypes) {
  return (
    <header className={styles.header_container}>
      <h1 className={styles.header_title}>{title}</h1>
      {subtitle && <p className={styles.header_subtitle}>{subtitle}</p>}
    </header>
  );
}

export function Main({ children }) {
  return (
    <main className={styles.main_container}>
      {children}
    </main>
  );
}

export function MasonryList({
  isLoading,
  loadingSkeleton: LoadingSkeleton,
  children,
}) {
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
