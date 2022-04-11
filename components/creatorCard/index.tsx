import styles from '../../styles/creatorCard.module.css'
import Image from 'next/image'
import CreatorButton from '../utils/button'
import CreatorInfo from './creatorInfo'
import CreatorRatings from './ratings'

interface CreatorCardProps {
  handle: string;
}

export default function CreatorCard({
  handle,
}: CreatorCardProps) {

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            className={styles.creatorCardImage}
            alt="Image"
            src="/creatorCardImage.jpg"
            width="252"
            height="277"
         />
        </div>
        <div className={styles.creatorBtns}>
          <CreatorButton onClick={() =>{}} className={styles.businessBtn} type="primary" text="Business" />
          <CreatorButton onClick={() =>{}} type="secondary" text="Donate" />
        </div>
      </div>
      <CreatorInfo
          handle={handle}
       />
      <CreatorRatings />
    </div>
  )
}
