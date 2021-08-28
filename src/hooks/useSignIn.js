

import { useApolloClient, useMutation } from "@apollo/client";
import { LOG_IN} from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';



export const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient=useApolloClient();

    const [mutate, result] = useMutation(LOG_IN);
      
    const signInFunction = async({ username, password }) => {
          
     const {data}= await mutate({
          variables:{
              credentials:{
                            username:username,
                            password:password,
                          }
                    }
        });

        console.log('(useSignIn)token is :',data.authorize.accessToken);
        
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        
        return {data};

    };
      
    return [signInFunction, result];
};
