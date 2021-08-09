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





const validationSchema = yup.object().shape({
  username: yup
  .string()
    .required('username is required'),
  password: yup
  .string()
    .required('password is required'),
});


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


const LoginForm=({onSubmit})=>{
  
  return(
    <View style={styles.signinFormContainter}>

   <View style={styles.itemContainer}>
  <FormikTextInput name='username' placeholder='username'/>
  </View>

  <View style={styles.itemContainer}>
  <FormikTextInput name='password' secureTextEntry placeholder='password'/>
  </View>

  <Pressable onPress={onSubmit}>
    <Text style={styles.logInTag}>Sign In</Text>
  </Pressable>
   
    </View>
  );
};

const SignIn =  () => {


const [signInFunction,result]=useSignIn(); 
let history = useHistory();




 const onSubmit = async (values) => {
   const { username, password } = values;

   try {
     const { data } = await signInFunction({ username, password });
     console.log('logged in, token saved');
     history.push("/");
     
   } catch (e) {
     console.log("error of onSubmit",e);
   }
 };
 

const initialValues = {
  username: '',
  password: '',
};

  return (
    
    <Formik  initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit})=><LoginForm onSubmit={handleSubmit}/>}
    </Formik>
    
    );
};

export default SignIn;