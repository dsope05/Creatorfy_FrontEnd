import ReactStars from "react-rating-stars-component";
import styles from '../../styles/ReviewTag.module.css';

interface ReviewTagProps {
  name: string;
  value: number;
}

const ReviewTag = ({
  name,
  value,
}: ReviewTagProps) => {
  return (
    <article className={styles.reviewTag}>
      <span className={styles.reviewTagText}>{name}</span>
      <ReactStars
        edit={false}
        value={1}
        count={1}
        size={16}
        activeColor="#C637B3"
      />
      <span className={styles.reviewTagText}>{value.toFixed(1)}</span>
    </article>
  );
};

export default ReviewTag;
