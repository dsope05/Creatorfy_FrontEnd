import { gql } from '@apollo/client';

export const DIGG_REVIEW = gql`
  mutation diggReview($input: reviewHelpfulorNot!) {
    diggReview(input: $input) {
      id
      status
      error
    }
  }
`;
