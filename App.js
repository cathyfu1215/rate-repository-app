

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';



import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import createApolloClient from './src/utils/apolloClient';

import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import { Provider as PaperProvider } from 'react-native-paper';



const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);


export default function App() {



  return (
    <View style={styles.container}>
      <NativeRouter>
      <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
      
      <PaperProvider>
      <Main/>
      </PaperProvider>

      </AuthStorageContext.Provider>
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
