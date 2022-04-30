import styles from '../styles/Profile.module.css';
import CreatorCard from '../components/creatorCard';
import Services from '../components/services';

export default function Profile() {
  return (
    <>
      <div className={styles.creatorCard}>
        <CreatorCard handle={'zpreston'}/>
      </div>
      <div className={styles.services}>
        <Services handle={'zpreston'}/>
      </div>
    </>
  );
}
