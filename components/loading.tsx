import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loadingDiv}>
      <Spinner animation="border" className={styles.loadingSpinner} />
    </div>
  );
}
