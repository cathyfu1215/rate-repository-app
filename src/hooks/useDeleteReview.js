import { useMutation } from "@apollo/client";
import { DELETE_REVIEW} from "../graphql/mutations";

export const useDeleteReview=()=>{
    const [remove,result]=useMutation(DELETE_REVIEW);
 
    const deleteReviewFunction=async(id)=>{

    const { data } = await remove({
        
        variables:{
           id
        }
    });
    
    return{data}; //should be a boolean, if true, review is deleted

 };
 

    return[deleteReviewFunction,result];
};