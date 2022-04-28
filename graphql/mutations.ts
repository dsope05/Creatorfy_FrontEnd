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

export const DIGG_MUTATION = gql`
  mutation diggReview($input: reviewHelpfulorNot!) {
    diggReview(input: $input){
      id
      status
      error
    }
  }
`;
