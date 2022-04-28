/**
 * Default Page layout higher-order component.
 * Per NextJS Documentation: https://nextjs.org/docs/basic-features/layouts
 */

import styles from '../styles/Layout.module.scss';
import { Container } from 'react-bootstrap';
import Header from './header';

export default function Layout({ children }) {
  return (
    <Container className={styles.container}>
      <Header />
      <main>{children}</main>
    </Container>
  );
}
