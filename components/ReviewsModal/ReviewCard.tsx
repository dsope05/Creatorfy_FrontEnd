import moment from 'moment';
import Image from 'next/image';
import IconButton from '../Button/IconButton';
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
  onUpvote,
  onDownvote,
  reviewerGravatarImage = '',
}: ReviewCardProps) => {
  const formatReviewerName = (fullName: string): string => {
    const [firstName, lastName] = fullName.split(' ');
    return `${firstName} ${lastName[0]}.`
  };

  return (
    <article className={styles.reviewCard}>
      {reviewerGravatarImage ? (
        <Image
          className={styles.reviewerImage}
          alt={`${reviewerName} gravatar image`}
          src={reviewerGravatarImage}
          width="48"
          height="48"
        />
      ) : (
        <div aria-hidden className={styles.placeholderReviewImage} />
      )}
      <div className={styles.reviewCardContent}>
        <div className={styles.reviewCardHeader}>
          <h3 className={styles.reviewerName}>
            {formatReviewerName(reviewerName)}
          </h3>
          <span className={styles.reviewTime}>
            {moment(reviewTime).fromNow()}
          </span>
          <div className={styles.reviewCardButtonContainer}>
            <IconButton
              onClick={onUpvote}
              ariaLabel="upvote"
              imageAlt="thumbs up icon"
              imageSrc="/thumb.png"
              buttonClass={styles.reviewCardVoteButton}
              width="16"
              height="16"
              isPink
            />
            <IconButton
              onClick={onDownvote}
              ariaLabel="downvote"
              imageAlt="thumbs down icon"
              imageSrc="/thumb.png"
              buttonClass={styles.reviewCardVoteButton}
              imageClass={styles.downvoteIcon}
              width="16"
              height="16"
            />
          </div>
        </div>
        <p className={styles.reviewText}>{reviewText}</p>
      </div>
    </article>
  );
};

export default ReviewCard;
