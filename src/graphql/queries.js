import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories($orderBy:AllRepositoriesOrderBy, $orderDirection:OrderDirection,$searchKeyword:String){
    repositories(orderBy:$orderBy,orderDirection:$orderDirection,searchKeyword:$searchKeyword) {
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
query getCurrentUser {
  authorizedUser {
    id
    username
    reviews {
      totalCount
      edges {
        node {
          id
          rating
          text
          createdAt
          repository {
            id
            fullName
           
          }
        }
      }
    }
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