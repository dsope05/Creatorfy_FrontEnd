import moment from 'moment';
import Image from 'next/image';
import { Review } from '../utils/types';
import styles from '../../styles/ReviewCard.module.css';

interface ReviewCardProps extends Review {
  onUpvote: () => void;
  onDownvote: () => void;
}

const ReviewCard = ({
  reviewTime,
  reviewText,
  reviewerName,
  reviewerGravatarImage,
  onUpvote,
  onDownvote,
}: ReviewCardProps) => {
  const formatReviewerName = (fullName: string): string => {
    const [firstName, lastName] = fullName.split(' ');
    return `${firstName} ${lastName[0]}.`
  };

  return (
    <article className={styles.reviewCard}>
      <Image
        className={styles.reviewerImage}
        alt={`${reviewerName} gravatar image`}
        src={reviewerGravatarImage || '/creatorCardImage.jpg'}
        width="48"
        height="48"
      />
      <div className={styles.reviewCardContent}>
        <div className={styles.reviewCardHeader}>
          <h3 className={styles.reviewerName}>{formatReviewerName(reviewerName)}</h3>
          <span className={styles.reviewTime}>{moment(reviewTime).fromNow()}</span>
          <div className={styles.reviewCardButtonContainer}>
            <button className={styles.reviewCardVoteButton} onClick={onUpvote} aria-label="upvote">
              <Image
                className={styles.upvoteIcon}
                aria-hidden
                src="/thumb.png"
                width="16"
                height="16"
              />
            </button>
            <button className={styles.reviewCardVoteButton} onClick={onDownvote} aria-label="downvote">
              <Image
                className={styles.downvoteIcon}
                aria-hidden
                src="/thumb.png"
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>
        <p className={styles.reviewText}>{reviewText}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
