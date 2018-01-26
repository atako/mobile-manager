import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App
