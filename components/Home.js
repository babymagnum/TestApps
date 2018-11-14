import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       //place some state
    }
  }
  
  login = (email, password) => {
    
  }
  

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  textNormal: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
  }
})
