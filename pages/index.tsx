import styles from '../styles/Profile.module.css'
import Header from '../components/header'
import CreatorCard from '../components/creatorCard'
import Services from '../components/services'

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.creatorCard}>
        <CreatorCard/>
      </div>
      <div className={styles.services}>
        <Services/>
      </div>
    </div>
  )
}
