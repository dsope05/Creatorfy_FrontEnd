import { useMutation } from '@apollo/client';
import ReviewsModal from '../../components/ReviewsModal';
import { MODAL_TYPES, useModalContext } from '../../components/providers/ModalProvider';
import { OnVoteParameters } from '../../components/utils/types';
import { VOTE_FOR_REVIEW } from '../../graphql/mutations';

const ReviewsPreview = () => {
  const { modalType } = useModalContext();
  const [voteForReview] = useMutation(VOTE_FOR_REVIEW);

  const reviewTags = {
    Value: 4.5,
    Communication: 4,
    Timeliness: 3,
  };

  const reviews = [{
    id: 1,
    reviewTime: new Date(),
    reviewerName: 'Hannah Abc',
    reviewText: 'Comment lorem ipsum dolor sit amet, consectetur.',
  }, {
    id: 2,
    reviewTime: new Date(),
    reviewerName: 'Hannah Abc',
    reviewText: 'Comment lorem ipsum dolor sit amet, consectetur.',
  }, {
    id: 3,
    reviewTime: new Date(),
    reviewerName: 'Hannah Abc',
    reviewText: 'Comment lorem ipsum dolor sit amet, consectetur.',
  }, {
    id: 4,
    reviewTime: new Date(),
    reviewerName: 'Hannah Abc',
    reviewText: 'Comment lorem ipsum dolor sit amet, consectetur.',
  }, {
    id: 5,
    reviewTime: new Date(),
    reviewerName: 'Hannah Abc',
    reviewText: 'Comment lorem ipsum dolor sit amet, consectetur.',
  }];

  const onVote = ({ reviewId, isHelpful, reviewType }: OnVoteParameters) => {
    voteForReview({
      variables: {
        input: {
          id: reviewId,
          helpful: isHelpful,
          reviewType,
        }
      }
    });
  };

  const onUpvote = ({ reviewId, reviewType }: Omit<OnVoteParameters, 'isHelpful'>) => onVote({ isHelpful: true, reviewId, reviewType });

  const onDownvote = ({ reviewId, reviewType }: Omit<OnVoteParameters, 'isHelpful'>) => onVote({ isHelpful: false, reviewId, reviewType });

  return (
    <ReviewsModal
      isOpen={true}
      // isOpen={modalType === MODAL_TYPES.REVIEWS_MODAL}
      reviews={reviews}
      reviewCount={64}
      reviewTags={reviewTags}
      canCurrentUserReview={true}
      onUpvote={onUpvote}
      onDownvote={onDownvote}
      showAllReviews={() => {}}
      createReview={() => {}}
    />
  );
};

export default ReviewsPreview;
