import styles from '../styles/Profile.module.css'
import Header from '../components/header'
import CreatorCard from '../components/creatorCard'
import Services from '../components/services'
import Banner from '../components/Banner'


if(process.env.NODE_ENV === 'production' && window.location.protocol !== "https:") window.location.protocol = "https:";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <div className={styles.creatorCard}>
        <CreatorCard/>
      </div>
      <div className={styles.services}>
        <Services/>
      </div>
    </div>
  )
}
