/* eslint-disable no-unused-vars */
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({

  normal:{
    borderWidth: theme.textInput.borderWidth,
    borderRadius:theme.textInput.borderRadius,
    borderColor: theme.colors.darkBackground
  },

 error:{
  borderWidth: theme.textInput.borderWidth,
  borderRadius:theme.textInput.borderRadius,
  borderColor: theme.colors.error
},

});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error?styles.error
                              :styles.normal ;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;