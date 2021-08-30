import React,{useState} from 'react';
import {  StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import CreateUser from './CreateUser';



const styles = StyleSheet.create({
  container: {
    backgroundColor:theme.colors.darkBackground,
    flexGrow: 1,
    flexShrink: 1,
    
  
  },
});

const Main = () => {

  const [orderBy,setOrderBy]=useState('CREATED_AT');
  const [orderDirection,setOrderDirection]=useState('DESC');
  const [searchKeyword,setSearchKeyword]=useState('');


  return (
    <View style={styles.container}>
     <AppBar/>
     <Switch>

     <Route path="/CreateUser" exact>
          <CreateUser/>
        </Route>

     <Route path="/CreateReview" exact>
          <CreateReview/>
        </Route>

     <Route path="/SignIn" exact>
          <SignIn/>
        </Route>

        <Route path="/:id">
          <SingleRepository orderBy={orderBy} orderDirection={orderDirection} searchKeyword={searchKeyword} 
          setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} setSearchKeyword={setSearchKeyword}/>
        </Route>


        <Route path="/" exact>
          <RepositoryList orderBy={orderBy} orderDirection={orderDirection} searchKeyword={searchKeyword} 
          setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} setSearchKeyword={setSearchKeyword}/>
        </Route>

        <Redirect to="/" />  

      </Switch>
    </View>
  );
};

export default Main;