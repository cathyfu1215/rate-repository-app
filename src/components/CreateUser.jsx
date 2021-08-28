/* eslint-disable no-unused-vars */
import React from 'react';
import {  View,StyleSheet,Pressable} from 'react-native';
import Text from './Text';
import theme from '../theme';
import FormikTextInput from'./FormikTextInput';
import { Formik} from 'formik';
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn'; 
import { useHistory } from "react-router-dom";
import { useCreateUser } from '../hooks/useCreateUser';



const styles = StyleSheet.create({
  container: {
    backgroundColor:theme.colors.textPrimary,
  },
  text:{
     color:theme.colors.textPrimary,
  },
  signinFormContainter:{
    backgroundColor:theme.colors.commonBackgroundColor,
    marginTop:theme.formMargin.top,
    marginLeft:theme.formMargin.top,
    marginRight:theme.formMargin.top,
    
    width:theme.signInForm.width,
    height:theme.signInForm.height,
    flexGrow:0,
   
    
  },
  username:{
    paddingTop:theme.formPadding.top,
    paddingBottom:theme.formPadding.bottom,
   
    
  },
  password:{
    paddingTop:theme.formPadding.top,
    paddingBottom:theme.formPadding.bottom,
    
    
  },
  logInTag:{
    marginTop:theme.tagMargin.top,
    marginBottom:theme.tagMargin.bottom,
    paddingTop:theme.tagPadding.top,
    paddingBottom:theme.tagPadding.bottom,
    paddingLeft:theme.tagPadding.left,
    paddingRight:theme.tagPadding.right,
    backgroundColor:theme.colors.primary,
    color:theme.colors.revert,
    fontWeight:theme.fontWeights.bold,
    textAlign:'center'

  },
  itemContainer:{
    
    marginTop:theme.textInput.margin,
    marginBottom:theme.textInput.margin,
    marginLeft:theme.textInput.margin,
    marginRight:theme.textInput.margin,
    borderWidth: theme.textInput.borderWidth,
    borderRadius:theme.textInput.borderRadius,
    borderColor: theme.colors.darkBackground
                     
  }

});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation:''
};

const validationSchema = yup.object().shape({
  username: yup
  .string()
    .required('username is required')
    .min(1, 'username length must exceed 1')
    .max(30, 'username length cannot exceed 30 '),
  password: yup
  .string()
    .required('password is required')
    .min(5, 'password length must exceed 5')
    .max(50, 'password length cannot exceed 50 '),

  passwordConfirmation:yup
  .string()  
  .oneOf([yup.ref('password'), null])
  .required('password confirmation must match the password')
  .min(5, 'password confirmation length must exceed 5')
  .max(50, 'password confirmation length cannot exceed 50 ')
});


 const CreateUserForm=({onSubmit})=>{
  
  return(
    <View style={styles.signinFormContainter}>

   <View style={styles.itemContainer} >
  <FormikTextInput testID="usernameField" name='username' placeholder='username'/>
  </View>

  <View style={styles.itemContainer}>
  <FormikTextInput testID="passwordField" name='password' secureTextEntry placeholder='password'/>
  </View>

  <View style={styles.itemContainer}>
  <FormikTextInput testID="passwordConfirmationField" name='passwordConfirmation' secureTextEntry placeholder='passwordConfirmation'/>
  </View>

  <Pressable onPress={onSubmit} testID="submitButton">
    <Text style={styles.logInTag}>Create this user</Text>
  </Pressable>
   
    </View>
  );
};



export const CreateUserContainer=({onSubmit})=>{
  
  return ( 
  <Formik  
  initialValues={initialValues} 
  onSubmit={onSubmit} 
  validationSchema={validationSchema}>

    {({handleSubmit})=><CreateUserForm onSubmit={handleSubmit}/>}
  </Formik>
  
  );
};


const CreateUser =  () => {
const [createUserFunction,createUserResult]=useCreateUser(); 
let history = useHistory();

const [signInFunction,signInResult]=useSignIn(); 

 const onSubmit = async (values) => {
   const { username, password } = values;

   try {
       //below is create a user
     const { userData } = await createUserFunction({ username, password });
     
       //below is the auto log in after creation
     const { data } = await signInFunction({ username, password });
     
       //redirect to repositories
     history.push("/");
     
   } catch (e) {
     console.log("error of onSubmit",e);
   }
 };
 
 return <CreateUserContainer onSubmit={onSubmit}/>;

  
};

export default CreateUser;