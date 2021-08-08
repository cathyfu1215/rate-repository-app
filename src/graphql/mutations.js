import { gql } from '@apollo/client';

export const LOG_IN=gql`
mutation LogIn ($credentials: AuthorizeInput){
    authorize(credentials: $credentials) {
        accessToken
    }
  }
`;

