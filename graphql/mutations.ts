import { gql } from '@apollo/client';

export const VOTE_FOR_REVIEW = gql`
  mutation voteForReview($input: reviewHelpfulorNot!) {
    diggReview(input: $input) {
      id
      status
      error
    }
  }
`;
