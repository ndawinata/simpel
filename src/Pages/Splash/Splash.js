import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Dimensions } from 'react-native'
import Logo from '../../Assets/icons/Logo.png'

// const windowWidth = Dimensions.get('window').width;

export class Splash extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#334753', resizeMode:'cover', justifyContent:"center"}} >
                <StatusBar hidden={true} />
                <View style={{justifyContent:'center', alignItems:'center'}} >
                    <Image source={Logo} style={{width:190, height:96, marginLeft:50}} />
                </View>
            </View>
        )
    }
}

export default Splash
