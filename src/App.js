import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDfRAbk2mOTxHsPNM2Onr4t4WrUlfGt4xk',
      authDomain: 'manager-fa5a4.firebaseapp.com',
      databaseURL: 'https://manager-fa5a4.firebaseio.com',
      projectId: 'manager-fa5a4',
      storageBucket: 'manager-fa5a4.appspot.com',
      messagingSenderId: '578358139403'
    }
    firebase.initializeApp(config)
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
