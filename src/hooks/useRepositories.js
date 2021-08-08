/* eslint-disable no-unused-vars */
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    

    const {loading, error, data, refetch}=  useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      
    });
  
  
     if (!loading){
      const repositories=data.repositories;
      return repositories;
    }
   
  };
  
   
  
  export default useRepositories;