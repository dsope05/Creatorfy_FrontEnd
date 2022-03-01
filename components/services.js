import styles from '../styles/services.module.css'
import Image from 'next/image'

const createStar = (filled) => (
  <span className={styles.star}>
    <Image
      alt="Image"
      src={ filled ? "/yellowStar.svg" : "/emptyStar.svg"}
      width="25"
      height="25"
     />
  </span>
);

const Service = () => {
  const stars = [createStar(true), createStar(true), createStar(true), createStar(true), createStar(false)]
  return (
  <div className={styles.service}>
    <div className={styles.serviceImageWrapper}>
      <Image
        className={styles.servicesImage}
        alt="Image"
        src="/creatorCardImage.jpg"
        width="357"
        height="286"
     />
    </div>
    <div className={styles.titleContainer}>
     <div className={styles.logoImageWrapper}>
       <Image
         className={styles.servicesImage}
         alt="Image"
         src="/smashLogo.jpeg"
         width="70"
         height="40"
        />
     </div>
     <p className={styles.serviceTitle}>
       I Will Do One-on-one Smash Practice
     </p>
    </div>
    <p className={styles.serviceDescription}>
      Lorem ipsum dolor sit amet, cons 
      adipiscing elit.
    </p>
    <div className={styles.starWrapper}>
      { stars }
      (5 Reviews)
    </div>
    <div className={styles.priceWrapper}>
      <div className={styles.startingAt}>
        Starting at
      </div>
    <div className={styles.price}>
      $200
    </div>
  </div>
</div>
)
}
export default function Services() {
  const services = [<Service />, <Service />, <Service />, <Service />];
  return (
    <div>
      <div className={styles.menu}>
        <span className={`${styles.servicesMenuButton} ${styles.selected}`}>
          Services
        </span>
        <span className={styles.merchMenuButton}>
          Merch
        </span>
      </div>
      <div className={styles.servicesContainer}>
        { services }
      </div>
    </div>
  )
}
