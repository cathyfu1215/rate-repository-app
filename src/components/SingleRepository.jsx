/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';
import useRepositories from '../hooks/useRepositories';
import { useParams } from 'react-router-dom';
import useSingleRepository from '../hooks/useSingleRepository';
import * as Linking from 'expo-linking';




const styles = StyleSheet.create({

  outsideContainer:
  {backgroundColor:theme.colors.commonBackgroundColor,
  paddingLeft:theme.flex.padding,
  paddingRight:theme.flex.padding},

  Logo: {
    width: theme.logo.width,
    height: theme.logo.height,
  },

  bold:{
    fontSize:theme.fontSizes.subheading,
    fontWeight:theme.fontWeights.bold,
    paddingBottom:Constants.paddingBottom,
  },

  description:{
    color:theme.colors.textSecondary,
    paddingBottom: Constants.paddingBottom ,
    
  },

  tag:{
    backgroundColor:theme.colors.primary,
    color:theme.colors.revert,
    marginRight:theme.tagMargin.right,
    marginTop:theme.tagMargin.top,
    marginBottom:theme.tagMargin.buttom,
    textAlign:'center',
    paddingTop:theme.tagPadding.top,
    paddingBottom:theme.tagPadding.bottom,
    paddingLeft:theme.tagPadding.left,
    paddingRight:theme.tagPadding.right,
  },

  button:{
    
    backgroundColor:theme.colors.primary,
    textAlign:'center',
    paddingTop:theme.tagPadding.top,
    paddingBottom:theme.tagPadding.bottom,
    paddingLeft:theme.tagPadding.left,
    paddingRight:theme.tagPadding.right,
    
  },

  text:{
    color:theme.colors.revert,
    fontWeight: 'bold',
    textAlign:'center',
    paddingTop:theme.tagPadding.top,
    paddingBottom:theme.tagPadding.bottom,
    paddingLeft:theme.tagPadding.left,
    paddingRight:theme.tagPadding.right,
  },


  flexContainerPhotoAndDes: {
    display: 'flex',
    flexDirection:'row',
    paddingTop:Constants.statusBarHeight,
    paddingBottom:Constants.statusBarHeight,
   
  },
  flexItemImage: {
    flexGrow: 0,
    backgroundColor: theme.colors.commonBackgroundColor,
  },
  flexItemDes: {
    flexGrow: 1,
    backgroundColor: theme.colors.commonBackgroundColor,
    paddingLeft:theme.flex.padding,
   
  },
  flexItemNumberContainer: {
    display: 'flex',
    flexDirection:'row',
    paddingTop:Constants.statusBarHeight,
    paddingBottom:Constants.statusBarHeight,
  },
  flexItemSingelNumber: {
    flexGrow: 1,
    backgroundColor: theme.colors.commonBackgroundColor,
    flexDirection:'column'
  },
});





const SingleRepository= ()=>{

  const id=useParams(id); //this id here is an object, not a string!
  
  let singleRepositoryUrl;


//below: get url of the selected single repository
const targetRepository= useSingleRepository(id);


if(targetRepository!==undefined){
 singleRepositoryUrl=targetRepository.url;

}

  
//below: implement the push function
const goToGitHub=()=>{
  console.log('go to Github');
  Linking.openURL(singleRepositoryUrl);

};

//below:fetch the one single repo with infomation
const repositories=useRepositories();

const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


const theRepo=repositoryNodes.find(obj=>String(obj.id)===String(id.id));



//below: k formatter from RepositoryItem
function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
}


    return(
    
    <View  style={styles.outsideContainer}>
      
      <View  style={styles.flexContainerPhotoAndDes}>
      <View  style={styles.flexItemImage}>
      <Image
        style={styles.Logo}
        source={{
          uri: theRepo.ownerAvatarUrl,
        }}
      />
       </View>


      <View  style={styles.flexItemDes}>
        <Text testID="fullName" style={styles.bold}>{theRepo.fullName}</Text>
        <Text testID="description" style={styles.description}>{theRepo.description}</Text>
        <Text testID="language" style={styles.tag}>{theRepo.language}</Text>
        </View>

        </View>



        
        <View style={styles.flexItemNumberContainer}>

        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(theRepo.stargazersCount))}</Text>
        <Text>Stars</Text>
        </View>
        

        
        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(theRepo.forksCount))}</Text>
        <Text>Forks</Text>
        </View>
        

        
        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(theRepo.reviewCount))}</Text>
        <Text>Reviews</Text>
        </View>
        

        
        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(theRepo.ratingAverage))}</Text>
        <Text>Rating</Text>
        </View>
       
       </View>
      

       <View style={styles.button}>
         <Pressable onPress={goToGitHub}>
             <Text style={styles.text}>Open in GitHub</Text>
         </Pressable>
       </View>


        
        
      </View>);
};



export default SingleRepository;