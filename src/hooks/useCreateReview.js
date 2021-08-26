import { useMutation } from "@apollo/client";
import { CREATE_REVIEW} from "../graphql/mutations";


export const useCreateReview=()=>{

 const [create,result]=useMutation(CREATE_REVIEW);
 const createReviewFunction=async({repositoryName,ownerName,rating,text})=>{

    const { data } = await create({
        
        variables:{
            review:{
                        repositoryName,
                        ownerName,
                        rating,
                        text} 
                }
    });
    
    return{data}; //should be an object containing the review

 };
 

    return[createReviewFunction,result];
};