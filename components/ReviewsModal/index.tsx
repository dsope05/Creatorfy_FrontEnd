import CreatorfyStars from '../CreatorfyStars';
import ReviewCard from './ReviewCard';
import ReviewTag from './ReviewTag';
import { ModalContainer } from '../providers/ModalProvider';
import type { ReviewTagData, Review, DiggReviewParameters } from '../utils/types'
import styles from '../../styles/ReviewsModal.module.css';

interface ReviewsProps {
  isOpen: boolean;
  reviews: Review[];
  reviewCount: number;
  reviewTags: ReviewTagData;
  canCurrentUserReview: boolean;
  onUpvote: (voteParameters: Omit<DiggReviewParameters, 'isHelpful'>) => void;
  onDownvote: (voteParameters: Omit<DiggReviewParameters, 'isHelpful'>) => void;
  showAllReviews: () => void;
  createReview: () => void;
}

const ReviewsModal = ({
    isOpen,
    reviews,
    reviewCount,
    reviewTags,
    canCurrentUserReview,
    onUpvote,
    onDownvote,
    showAllReviews,
    createReview,
}: ReviewsProps) => {
  const calculateAverageRating = (tags: ReviewTagData) => {
    const reviewTagValues = Object.values(tags);
    return reviewTagValues.reduce((sum, reviewTagValue) => sum + reviewTagValue, 0) / reviewTagValues.length;
  };

  return isOpen ? (
    <ModalContainer>
      <div className={styles.reviewsModal}>
        <section className={styles.reviewsHeaderSection}>
          <h1 className={styles.reviewsModalTitle}>Reviews</h1>
          <CreatorfyStars
            rating={calculateAverageRating(reviewTags)}
            reviewCount={reviewCount}
          />
        </section>
        <section className={styles.reviewTagsSection}>
          {Object.keys(reviewTags).map((tag) => (
            <ReviewTag
              key={tag}
              name={tag}
              value={reviewTags[tag]}
            />
          ))}
        </section>
        <section className={styles.reviewsSection}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
              onUpvote={() => onUpvote({ reviewId: review.id, reviewType: 'SERVICE' })}
              onDownvote={() => onDownvote({ reviewId: review.id, reviewType: 'SERVICE' })}
            />
          ))}
        </section>
        <button className={styles.showButton} onClick={showAllReviews}>Show All {reviewCount} Reviews</button>
        {canCurrentUserReview && <button className={styles.createButton} onClick={createReview}>Leave a Review</button>}
      </div>
    </ModalContainer>
  ) : null;
};

export default ReviewsModal;
