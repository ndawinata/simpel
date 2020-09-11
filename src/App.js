import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Splash from './Pages/Splash/Splash'
import SignIn from './Pages/SignIn/SignIn'

export class App extends Component {
  render() {
    return (
      // <Splash />
      <SignIn />
    )
  }
}

export default App
