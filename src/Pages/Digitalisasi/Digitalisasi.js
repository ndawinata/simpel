import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'

const isian = () =>{
    return(
        <Text>Digitalisasi</Text>
    )
}

export default class Digitalisasi extends Component {
    render() {
        return (
            <View>
                <Header judul="Digitalisasi" subjudul="Stamet Soetta" isi={isian()} navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
