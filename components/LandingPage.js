import React, { Component } from 'react'
import { StatusBar, ImageBackground, Text, Image, Dimensions, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default class LandingPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         stausBarHeight: null
      }
    }
    
    render() {
        const dimensions = Dimensions.get('window')

        return (
            <View style={{flex: 1}}>
                <StatusBar  
                    ref={'statusBar'} 
                    backgroundColor= 'transparent' 
                    translucent={true} />
                <ImageBackground 
                    style={{flex: 1, width: dimensions.width, height: dimensions.height}}
                    source={require('./assets/background_home.jpg')}>

                    <View style={{flex: 1, marginTop: getStatusBarHeight()}}>
                        <Image 
                            style={{width: 25, height: 25, margin: 15}}
                            source={require('./assets/nav_drawer_white.png')} />

                        <Text
                            style={{color: 'white', marginLeft: 15}}
                            >Good Morning</Text>

                        <View
                            style={{flex: 1, margin: 10, justifyContent: 'flex-end'}}
                            >
                            <Text style={{textAlign: "center", color: 'white', padding: 10, borderRadius: 5, backgroundColor: '#32ad4c'}}>SIGN UP</Text>
                            <Text style={{textAlign: "center", borderRadius: 5, borderColor: 'white', borderWidth: 1.5, padding: 10, marginTop: 10, color: 'white'}} >LOGIN</Text>
                        </View>
                    </View>

            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
})
