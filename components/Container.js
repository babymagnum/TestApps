/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import LandingPage from './LandingPage'
import Login from './Login'
import Home from './Home'
import Menu from './Menu'

export default class Container extends Component {
  render() {
    return (
      <STACK_NAVIGATOR/>
    )
  }
}

const STACK_NAVIGATOR = createStackNavigator({
  LandingPage: LandingPage,
  Login: Login,
  Home: Home,
  Menu: Menu
},
{
  initialRouteName: 'LandingPage',
  headerMode: 'none'
}
)
