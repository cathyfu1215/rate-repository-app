import { useMutation } from "@apollo/client";
import { CREATE_USER} from "../graphql/mutations";

export const useCreateUser=()=>{
    const [mutate,result]=useMutation(CREATE_USER);

    const createUserFunction=async({username,password})=>{
        
        const {userData}= await mutate({
            variables:{
                   user:{
                      username:username,
                      password:password,
                        }
                    }
          });

          return {userData}; //this should be a user object
    };
    return[createUserFunction,result];
};
