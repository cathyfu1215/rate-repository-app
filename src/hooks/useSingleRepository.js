
import { useQuery } from '@apollo/client';


import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository =  ({id}) => {
  
    const {loading, error, data}=  useQuery(GET_SINGLE_REPOSITORY, {
      variables: { id },
      fetchPolicy: "no-cache",

    });
  
    if (error) return `Error! ${error}`;
    
  
    
    if ((loading===false)&&(data!==undefined)){
      const repository=data.repository;
      return repository;
    }
    
   
  };
  
   
  
  export default useSingleRepository;