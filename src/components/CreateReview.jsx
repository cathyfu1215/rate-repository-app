/* eslint-disable no-unused-vars */
import React from 'react';
import {  StyleSheet, View,Text,TextInput, Pressable } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useCreateReview } from '../hooks/useCreateReview';
import theme from '../theme';
import FormikNumberInput from './FormikNumberInput';

const styles = StyleSheet.create({

  formContainer:{
    backgroundColor:theme.colors.commonBackgroundColor,
    marginTop:theme.formMargin.top,
    flexGrow:0,
  },

  inputField:{
    paddingTop:10,
    paddingBottom:10,

  },
  submitButton:{
    backgroundColor:theme.colors.primary,
    paddingTop:theme.tagPadding.top,
    paddingBottom:theme.tagPadding.bottom,
    paddingLeft:theme.tagPadding.left,
    paddingRight:theme.tagPadding.right,
    marginTop:20,
    
  },
  text:{
    color:theme.colors.revert,
    textAlign:'center',
  }
    
  });


const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating:'',
  text:'',
  };

  const validationSchema = yup.object().shape({
    repositoryName: yup
    .string()
    .required('repository name is required'),
    
    ownerName: yup
    .string()
    .required('owner username is required'),
 
    rating:yup
    .number().integer().strict()
    .lessThan(100,'rating score cannot exceed 100')
    .moreThan(0,'rating score must be positive')
    .required('rating score is required'),
    
    text:yup
    .string()
  });

const CreateReviewForm=({onSubmit})=>{
  const [ratingField, ratingMeta, ratingHelpers] = useField('rating');

    return (
        <View style={styles.formContainer}>

          <View style={styles.inputField} >
          <FormikTextInput testID="repositoryNameField" name='repositoryName' placeholder='repositoryName'/>
          </View>

          <View style={styles.inputField} >
          <FormikTextInput testID="ownerNameField" name='ownerName' placeholder='ownerName'/>
          </View>
          
          <View style={styles.inputField} >


          <FormikNumberInput 
                     testID="ratingField" name='rating' placeholder='rating'/>
          </View>


          <View style={styles.inputField} >
          <FormikTextInput testID="textField" name='text' placeholder='text'/>
          </View>

          <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.text}>post this review</Text>
          </Pressable>
        </View>
      );
};

const CreateReviewContainer=({onSubmit})=>{
    return ( 
        <Formik  
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}>
      
          {({handleSubmit})=><CreateReviewForm onSubmit={handleSubmit}/>}
        </Formik>
        
        );
};


const CreateReview=()=>{
  const [createReviewFunction,result]=useCreateReview();
  let history=useHistory();

  const onSubmit=async (values)=>{
  const {repositoryName,ownerName,rating,text}=values;


  try {
    const { data } = await createReviewFunction({ repositoryName,ownerName,rating,text });
    console.log('posting the review...');
    
    history.push(`/${data.createReview.repositoryId}`);
    
  } catch (e) {
    console.log("error of submiting the review",e);
  }
};
    return(
        <CreateReviewContainer onSubmit={onSubmit}/>
    );
    };

export default CreateReview;

