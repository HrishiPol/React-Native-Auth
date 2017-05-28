import React from 'react';
import { TextInput , View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

const { containerStyles, labelStyles , inputStyles } = styles;

  return (
    <View style={containerStyles}>
      <Text style={labelStyles}>{ label }</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyles}
        value = {value}
        onChangeText={onChangeText}
        />
    </View>

  );
};

const styles = {

  containerStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyles:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyles:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export { Input };
