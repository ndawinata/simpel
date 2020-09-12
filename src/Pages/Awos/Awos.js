import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'

const isian = () =>{
    return(
        <Text>Awos</Text>
    )
}

export default class Awos extends Component {
    render() {
        return (
            <View>
                <Header judul="Awos" subjudul="Stamet Soetta" isi={isian()} navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
