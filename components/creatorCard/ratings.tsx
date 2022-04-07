import styles from '../../styles/creatorCard.module.css'
import Image from 'next/image'

interface SmallRatingsBoxProps {
  id: string;
}

const SmallRatingsBox = ({ id }: SmallRatingsBoxProps) => (
  <div className={`${styles.smallTwitch} ${styles[id]}`}>
    <Image
      alt="Twitch icon"
      src="/twitchGlitchIcon.svg"
      width="39"
      height="44"
    />
    <div className={styles.smallRatingsValue}>
      10.4k
    </div>
  </div>
);

export default function Ratings() {
  return (
    <div className={styles.ratingsContainer}>
        <div className={`${styles.bPlus} ${styles.bPlusOne} ${styles.reviewIcon}`}>
          <Image
            className={styles.reviewIconImage}
            alt="reviews icon"
            src="/reviewsIcon.svg"
            width="47"
            height="25"
          />
          <div className={styles.reviewIconTitle}>
            Reviews
          </div>
        </div>
        <div className={`${styles.largeTwitch} ${styles.largeTwitchOne}`}>
          <Image
            alt="Twitch icon"
            src="/twitchGlitchIcon.svg"
            width="39"
            height="44"
          />
          <div className={styles.ratingsValue}>
            10.4k
          </div>
        </div>
        <SmallRatingsBox id="smallTwitchOne"/>
        <SmallRatingsBox id="smallTwitchTwo"/>
        <SmallRatingsBox id="smallTwitchThree"/>
    </div>
  )
}
