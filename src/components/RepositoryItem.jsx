import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';

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

const RepositoryItem=({item})=>{

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
}

    return(<View testID="repositoryContainer" style={styles.outsideContainer}>
      
      <View  style={styles.flexContainerPhotoAndDes}>
      <View  style={styles.flexItemImage}>
      <Image
        style={styles.Logo}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
       </View>


      <View  style={styles.flexItemDes}>
        <Text testID="fullName" style={styles.bold}>{item.fullName}</Text>
        <Text testID="description" style={styles.description}>{item.description}</Text>
        <Text testID="language" style={styles.tag}>{item.language}</Text>
        </View>

        </View>



        
        <View style={styles.flexItemNumberContainer}>

        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(item.stargazersCount))}</Text>
        <Text>Stars</Text>
        </View>
        

        
        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(item.forksCount))}</Text>
        <Text>Forks</Text>
        </View>
        

        
        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(item.reviewCount))}</Text>
        <Text>Reviews</Text>
        </View>
        

        
        <View style={styles.flexItemSingelNumber}>
        <Text style={styles.bold}>{kFormatter(Number(item.ratingAverage))}</Text>
        <Text>Rating</Text>
        </View>
       
       </View>


        
        
      </View>);
};



export default RepositoryItem;