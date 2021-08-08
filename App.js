

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
// import Constants from 'expo-constants';


import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();


export default function App() {

  // console.log('constants.manifest:',Constants.manifest);

  return (
    <View style={styles.container}>
      <NativeRouter>
      <ApolloProvider client={apolloClient}>
      <Main/>
      </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
