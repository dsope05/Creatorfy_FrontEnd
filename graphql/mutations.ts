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

export const DIGG_MUTATION = gql`
  mutation diggReview($input: reviewHelpfulorNot!) {
    diggReview(input: $input){
      id
      status
      error
    }
  }
`;