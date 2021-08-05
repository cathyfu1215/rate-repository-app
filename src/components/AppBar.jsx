import React from 'react';
import { View, StyleSheet, Pressable,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import {
 Link
} from "react-router-native";


 

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

  return (
  
  <View style={styles.container}>

<ScrollView horizontal style={styles.navitationContainer}>
   
    <Link to='/' ><Text style={styles.navigationText}>repositories</Text></Link>
    <Link to='/SignIn'><Text style={styles.navigationText}>sign In </Text></Link>  
    
  </ScrollView>

    
  
  
  </View>);
};

export default AppBar;