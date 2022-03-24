import styles from '../../styles/creatorCard.module.css'
import Image from 'next/image'

export default function Ratings() {
  return (
    <div className={styles.ratingsContainer}>
        <div className={`${styles.bPlus} ${styles.bPlusOne}`}>
        </div>
        <div className={`${styles.largeTwitch} ${styles.largeTwitchOne}`}>
        </div>
        <div className={`${styles.smallTwitch} ${styles.smallTwitchOne}`}>
        </div>
        <div className={`${styles.smallTwitch} ${styles.smallTwitchTwo}`}>
        </div>
        <div className={`${styles.smallTwitch} ${styles.smallTwitchThree}`}>
        </div>
    </div>
  )
}
