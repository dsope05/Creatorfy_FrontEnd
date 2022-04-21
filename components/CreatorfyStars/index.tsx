import ReactStars from 'react-rating-stars-component';
import styles from '../../styles/CreatorfyStars.module.css';

interface CreatorfyStarsProps {
  rating: number;
  reviewCount: number;
  starSize?: number;
  containerClass?: string;
  textClass?: string;
  canEditStars?: boolean;
}

const CreatorfyStars = ({
  rating,
  reviewCount,
  starSize = 24,
  containerClass = styles.creatorfyStarsContainer,
  textClass = styles.creatorfyStarsText,
  canEditStars = false,
}: CreatorfyStarsProps) => {
  return (
    <article className={containerClass}>
      <ReactStars
        edit={canEditStars}
        value={rating}
        count={5}
        size={starSize}
        isHalf={true}
        color="#f0f0f0"
        activeColor="#C637B3"
      />
      <span className={textClass}>
        {rating.toFixed(1)} ({reviewCount} Reviews)
      </span>
    </article>
  );
};

export default CreatorfyStars;
