import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyABadeye19JbLQe0uKQFjtssM6vvEYpWQU',
      authDomain: 'fluted-magpie-102108.firebaseapp.com',
      databaseURL: 'https://fluted-magpie-102108.firebaseio.com',
      projectId: 'fluted-magpie-102108',
      storageBucket: 'fluted-magpie-102108.appspot.com',
      messagingSenderId: '988113929255'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
