import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            node {
             ...RepositoryDetails
            }
          }
    }
  }
  ${REPOSITORY_DETAILS}
`;


export const GET_CURRENTUSER = gql`
query getCurrentUser{
  authorizedUser {
    id
    username
  }
}

 
`;

export const GET_SINGLE_REPOSITORY= gql`
query SingleRepository($id:ID!){
 repository(id:$id) {
  id
  fullName
  url
  reviews {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
      }
    }
  }
}
}`;