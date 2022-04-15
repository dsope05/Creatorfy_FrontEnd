import styles from '../styles/Profile.module.css'
import Header from '../components/header'
import CreatorCard from '../components/creatorCard'
import Services from '../components/services'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export default function Profile() {
  const { profile } = useRouter().query;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.creatorCard}>
        <CreatorCard />
      </div>
      <div className={styles.services}>
        <Services />
      </div>
    </div>
  )
}