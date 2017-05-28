import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount () {
    firebase.initializeApp({
    apiKey: 'AIzaSyCyM86FT0fb-q-CzDx5TIj1WQh74e8_gJc',
    authDomain: 'authentication-20017.firebaseapp.com',
    databaseURL: 'https://authentication-20017.firebaseio.com',
    projectId: 'authentication-20017',
    storageBucket: 'authentication-20017.appspot.com',
    messagingSenderId: '631491190008'
  })
  }

  render(){
      return(
        <View>
          <Header headerText='Authentication'/>
          <LoginForm />
        </View>
      );
  }
}

export default App;
