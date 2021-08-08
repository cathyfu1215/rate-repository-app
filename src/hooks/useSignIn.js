

import { useMutation } from "@apollo/client";
import { LOG_IN} from "../graphql/mutations";


export const useSignIn = () => {

    const [mutate, result] = useMutation(LOG_IN);
      
    const signInFunction = ({ username, password }) => {
          
     const mutateResult=  mutate({
          variables:{
              credentials:{
                            username:username,
                            password:password,
                          }
                    }
        });

        return mutateResult;

    };
      
    return [signInFunction, result];
};
