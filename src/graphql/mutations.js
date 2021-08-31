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

export const CREATE_USER=gql`
mutation createUser($user:CreateUserInput){
  createUser(user:$user){
    id
    username}
}
`;

export const DELETE_REVIEW=gql`
mutation deleteReview($id:ID!){
  deleteReview(id:$id)
}`;
