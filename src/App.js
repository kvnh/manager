import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
