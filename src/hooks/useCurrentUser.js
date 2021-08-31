/* eslint-disable no-unused-vars */
import { useQuery } from '@apollo/client';
import { GET_CURRENTUSER } from '../graphql/queries';

const useCurrentUser = () => {
    
    const {loading, error, data, refetch}=  useQuery(GET_CURRENTUSER, {
      fetchPolicy: "cache-and-network",
      
      
    });

     if((!loading)&&(data)){return data;}
   
  };
  
   
  
  export default useCurrentUser;