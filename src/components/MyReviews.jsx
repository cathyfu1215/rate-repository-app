/* eslint-disable no-unused-vars */
import React from 'react';
import { FlatList, View, StyleSheet, Text,Pressable, Alert,Button} from 'react-native';
import useCurrentUser from'../hooks/useCurrentUser';
import theme from '../theme';
import Constants from 'expo-constants';
import { useDeleteReview } from '../hooks/useDeleteReview';
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
    separator: {
        height: 10,
      },
      
    outsideContainer:{
      
      backgroundColor:theme.colors.commonBackgroundColor,
      paddingLeft:theme.flex.padding,
      paddingRight:theme.flex.padding
    },

    reviewContainer:{
        display: 'flex',
        flexDirection:'row',
        paddingTop:Constants.statusBarHeight,
        paddingBottom:Constants.statusBarHeight,
        paddingRight:50,
        marginTop:theme.tagMargin.top,
        marginBottom:theme.tagMargin.buttom,
        backgroundColor:theme.colors.commonBackgroundColor,
       },
       reviewText:{
        color:theme.colors.textPrimary,
        paddingTop:theme.tagPadding.top,
       },

       flexItemDes: {
        flexGrow: 1,
        backgroundColor: theme.colors.commonBackgroundColor,
        paddingLeft:theme.flex.padding,
       
      },
      roundScore:{
        width:60,
        height:60,
        borderRadius:30,
        padding:14,
        backgroundColor:'lightblue',
   
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
      bluebutton:{
    
        backgroundColor:theme.colors.primary,
        flexGrow: 0,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:30,
        marginRight:30,
        
       
      
        
      },
      redbutton:{
    
        backgroundColor:'red',
        flexGrow: 0,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:30,
        marginRight:30,
       
       
      },
      buttonView:{
        display: 'flex',
        flexDirection:'row',
        flexGrow: 1,
        backgroundColor: theme.colors.commonBackgroundColor,
        paddingLeft:theme.flex.padding,

      },
      text:{
        color:theme.colors.revert,

      },
      bigReviewContainer:{
        display:'flex',
        flexDirection:'column',
      }
      
});



const MyReviews=()=>{
    let reviews;
    const history=useHistory();
    const [deleteReviewFunction,result]=useDeleteReview();
  
    const authorizedUser=useCurrentUser();
    
    if (authorizedUser!==undefined){
        reviews=authorizedUser.authorizedUser.reviews;
       
    }

    const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

    // console.log('review nodes',reviewNodes);


    const ItemSeparator = () => <View style={styles.separator} />;

    const ReviewItem = ({ review }) => {

      const goToRepository=(repoId)=>{
        console.log('go to the single repo page',repoId);
        history.push(`/${repoId}`);
      };

      const createTwoButtonAlert = (reviewId) =>
    
      Alert.alert(
      "Alert ",
      "Delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },

        { text: "OK", onPress: () => 
        {console.log("OK Pressed") ;
        console.log('delete this review',reviewId);
        deleteReviewFunction(reviewId);}}
      ],
      { cancelable: false }
    );

      const deleteReview=(reviewId)=>{
       //the reviewId here should be ID type

    return (
      <View style={styles.container}>
        <Button title="2-Button Alert" onPress={createTwoButtonAlert(reviewId)} />
  
      </View>
    );
        
      };
      

        return(
          <View style={styles.bigReviewContainer}>
         
          <View style={styles.reviewContainer}>
      
            <View style={styles.roundScore}>
            <Text>{review.rating}</Text>
            </View>
      
            <View style={styles.flexItemDes}>
            <Text style={styles.bold}>{review.repository.fullName}</Text>
            <Text style={styles.description}>{review.createdAt}</Text>
            <Text style={styles.reviewText}>{review.text}</Text>
            </View>

       </View>
        <View style={styles.buttonView}>

        <View style={styles.bluebutton}>
            <Pressable onPress={()=>goToRepository(review.repository.id)}>
              <Text style={styles.text}>View repository</Text>
            </Pressable>
          </View>

        <View style={styles.redbutton}>
            <Pressable onPress={()=>deleteReview(review.id)}>
             <Text style={styles.text}>Delete review</Text>
            </Pressable>
          </View>


        </View>


         </View>   
          
        );
      };

      




    return(
    
        <View >
         
         <FlatList
          data={reviewNodes}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={( review ) =>review.id}
          ItemSeparatorComponent={ItemSeparator}
        />
        </View>);
};

export default MyReviews;