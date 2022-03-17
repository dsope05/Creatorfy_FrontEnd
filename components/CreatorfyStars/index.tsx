import ReactStars from 'react-rating-stars-component';
import styles from '../../styles/CreatorfyStars.module.css';

interface CreatorfyStarsProps {
  rating: number;
  reviewCount: number;
  canEditStars?: boolean;
}

const CreatorfyStars = ({
  rating,
  reviewCount,
  canEditStars = false,
}: CreatorfyStarsProps) => {
  return (
    <article className={styles.creatorfyStarsContainer}>
      <ReactStars
        edit={canEditStars}
        value={rating}
        count={5}
        size={24}
        isHalf={true}
        activeColor="#C637B3"
      />
      <span className={styles.creatorfyStarsText}>
        {rating.toFixed(1)} ({reviewCount} Reviews)
      </span>
    </article>
  );
};

export default CreatorfyStars;
