import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'

const isian = () =>{
    return(
        <Text>Logs</Text>
    )
}

export default class Log extends Component {
    render() {
        return (
            <View>
                <Header judul="Log Message" subjudul="Stamet Soetta" isi={isian()} navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
