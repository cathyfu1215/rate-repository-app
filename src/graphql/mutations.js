import { gql } from '@apollo/client';

export const LOG_IN=gql`
mutation LogIn ($credentials: AuthorizeInput){
    authorize(credentials: $credentials) {
        accessToken
    }
  }
`;

export const CREATE_REVIEW=gql`
mutation createReview($review:CreateReviewInput){
  createReview(review:$review){
    repository {
      name
      ownerName
    }
    rating
    text
    repositoryId
  }
}`;

