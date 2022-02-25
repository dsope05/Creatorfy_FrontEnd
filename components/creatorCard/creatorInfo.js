import styles from '../../styles/creatorCard.module.css'
import Image from 'next/image'
import CreatorButton from '../utils/button'

export default function CreatorInfo() {
  return (
    <div className={styles.creatorInfoContainer}>
      <div className={styles.creatorName}>
        Kelsey Medeiros
      </div>
      <div className={styles.creatorHandle}>
        @SuperGirlKels
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image
            className={styles.image1}
            alt="Instagram Icon"
            src="/instagramIcon.svg"
            width="19"
            height="18.3"
          />
        </div>
        <div className={styles.icon}>
          <Image
            alt="Facebook Icon"
            src="/facebookIcon.svg"
            width="19"
            height="18.3"
          />
        </div>
        <div className={styles.icon}>
          <Image
            alt="Youtube Icon"
            src="/youtubeIcon.svg"
            width="19"
            height="18.3"
          />
        </div>
        <div className={styles.icon}>
          <Image
            alt="TikTok Icon"
            src="/tiktokIcon.svg"
            width="19"
            height="18.3"
          />
        </div>
      </div>
      <div className={styles.creatorDescription}>
        Smash streamer and competitor
      </div>
      <div className={styles.creatorQuote}>
        {'"I play smash competitively! (Sonic is my main) Fire emoji"'}
      </div>
      <div className={styles.country}>
        Country:
        <div className={styles.creatorCountry}>
          Canada
        </div>
      </div>
    </div>
  )
}
