/**
 * Default Page layout higher-order component.
 * Per NextJS Documentation: https://nextjs.org/docs/basic-features/layouts
 */

import styles from '../styles/Layout.module.css';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}