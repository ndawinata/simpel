import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'

const isian = () =>{
    return(
        <Text>Radar</Text>
    )
}

export default class Radar extends Component {
    render() {
        return (
            <View>
                <Header judul="Radar Cuaca" subjudul="Stamet Soetta" isi={isian()} navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
