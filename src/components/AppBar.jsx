/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Pressable,ScrollView, Alert } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import {Link} from "react-router-native";
import { useQuery } from '@apollo/client';
import { GET_CURRENTUSER } from '../graphql/queries';
import { useApolloClient } from "@apollo/client";
import useAuthStorage from '../hooks/useAuthStorage';



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:theme.colors.textPrimary,
    paddingBottom:Constants.statusBarHeight,
    display: 'flex',
    flexDirection:'row',
     
  },
  text:{
      fontSize:theme.fontSizes.subheading,
      fontWeight:theme.fontWeights.bold,
      color:theme.colors.revert,   
  },
  
  navitationContainer:{
    display: 'flex',
    flexDirection:'row',
   
  },
  navigationText:{
    fontSize:theme.fontSizes.body,
    fontWeight:theme.fontWeights.normal,
    color:theme.colors.revert,
    paddingLeft:Constants.statusBarHeight,
  },

  textContainer:{
    flexGrow: 1,
  }
});

const AppBar = () => {
  const authStorage = useAuthStorage();
    const apolloClient=useApolloClient();

   const {loading, error, data, refetch}=useQuery(GET_CURRENTUSER);

   if((!loading)&&(!data.authorizedUser)){

  return (
  
  <View style={styles.container}>

    <ScrollView horizontal style={styles.navitationContainer}>
   
    <Link to='/' ><Text style={styles.navigationText}>repositories</Text></Link>
    <Link to='/SignIn'><Text style={styles.navigationText}>sign In </Text></Link>  
    
    </ScrollView>
  </View>);}

  else{
    return (
  
      <View style={styles.container}>
    
        <ScrollView horizontal style={styles.navitationContainer}>
       
        <Link to='/' ><Text style={styles.navigationText}>repositories</Text></Link>
        
        <Pressable onPress={async ()=>{
          await authStorage.removeAccessToken();
                apolloClient.resetStore();
          Alert.alert('You have signed out.');}} >
          <Text style={styles.navigationText}>sign out</Text></Pressable>
        
        </ScrollView>
      </View>);
  }
};

export default AppBar;