import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp({
    apiKey: 'AIzaSyCyM86FT0fb-q-CzDx5TIj1WQh74e8_gJc',
    authDomain: 'authentication-20017.firebaseapp.com',
    databaseURL: 'https://authentication-20017.firebaseio.com',
    projectId: 'authentication-20017',
    storageBucket: 'authentication-20017.appspot.com',
    messagingSenderId: '631491190008'
  });

  firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
          this.setState({ loggedIn: true });
        }
        else {
          this.setState({ loggedIn: false });
        }

    });
  }

  renderContent(){

    switch (this.state.loggedIn) {
      case true:
      return(
        <Button
        text='Log Out'
        onPress={() => firebase.auth().signOut()}>
        </Button>
      );

        break;
      case false:
      return(
        <LoginForm />
      );

      break;

      default:
      return(
        <Spinner size='large' />
      );

    }
  }

  render(){
      return(
        <View>
          <Header headerText='Authentication'/>
          {this.renderContent()}
        </View>
      );
  }
}

export default App;
