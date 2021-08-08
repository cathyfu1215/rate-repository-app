import { gql  } from '@apollo/client';


export const REPOSITORY_DETAILS=gql`
fragment RepositoryDetails on Repository{
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl

}`;

export const USER_DETAILS=gql`
fragment UserDetails on User{
    id
    username
    createdAt
    reviews
    reviewCount
}`;

export const REVIEW_DETAILS=gql`
fragment ReviewDetails on Review{
    id
    userId
    repositoryId
    rating
    createdAt
    text

}`;


