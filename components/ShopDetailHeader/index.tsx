import styles from '../../styles/ShopDetailHeader.module.css';
import CreatorfyStars from '../CreatorfyStars';
import IconButton from '../Button/IconButton';
import ShareButton from '../Button/ShareButton';

interface ShopDetailHeaderProps {
  title: string;
  onDigg: () => void;
  rating: number;
  reviewCount: number;
  creator: string;
  creatorShareUrl: string;
  eventable?: boolean;
}

const ShopDetailHeader = ({
  title,
  onDigg,
  rating,
  reviewCount,
  creator,
  creatorShareUrl,
  eventable = false,
}: ShopDetailHeaderProps) => (
  <article className={styles.headerContainer}>
    <section className={styles.titleSection}>
      <h1 className={styles.title}>
        {title}
        <span className={styles.creator}>
          {eventable ? ' with' : ' by'} {creator}
        </span>
      </h1>
      <IconButton
        onClick={onDigg}
        ariaLabel="like"
        imageAlt="heart icon"
        imageSrc="/heart.svg"
        buttonClass={styles.likeButton}
        isPink
      />
    </section>
    <section className={styles.starsContainer}>
      <CreatorfyStars
        rating={rating}
        reviewCount={reviewCount}
        textClass={styles.creatorfyStarsText}
        starSize={16}
      />
      <ShareButton
        title={creator}
        text={`Share ${creator}`}
        url={creatorShareUrl}
      />
    </section>
  </article>
);

export default ShopDetailHeader;
