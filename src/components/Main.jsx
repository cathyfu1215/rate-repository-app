import React from 'react';
import {  StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';



const styles = StyleSheet.create({
  container: {
    backgroundColor:theme.colors.darkBackground,
    flexGrow: 1,
    flexShrink: 1,
    
  
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
     <AppBar/>
     <Switch>
     <Route path="/SignIn" exact>
          <SignIn/>
        </Route>

        <Route path="/:id">
          <SingleRepository />
        </Route>


        <Route path="/" exact>
          <RepositoryList />
        </Route>

        <Redirect to="/" />  

      </Switch>
    </View>
  );
};

export default Main;