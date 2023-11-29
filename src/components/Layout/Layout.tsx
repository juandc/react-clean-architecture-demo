import type { PropsWithChildren } from 'react';
import type { LayoutTypes } from './types';
import { Navbar } from './Navbar';
import { Header } from './Header';
import styles from './Layout.module.scss';

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
      <main className={styles.main_container}>
        {children}
      </main>
    </div>
  );
}
