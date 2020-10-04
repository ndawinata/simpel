import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'
import { TextInput, Button } from 'react-native-paper';

const Isian = (props) =>{
    return(
        <View>
            <ScrollView >
                <TextInput
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Lokasi" 
                    value={props.lokasi}
                    placeholder="Lokasi Stasiun"/>
                <TextInput
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Merek" 
                    value={props.merek}
                    placeholder="Merek Alat"/>
                <TextInput
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Tahun" 
                    value={props.thn}
                    placeholder="Tahun Pembelian"/>
                <TextInput
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Kondisi" 
                    value={props.kondisi}
                    placeholder="ON atau OFF"/>
                <TextInput
                    mode={"outlined"}
                    multiline={true}
                    numberOfLines={3}
                    style={{marginVertical:3}}
                    label="Catatan" 
                    value={props.kondisi}
                    placeholder="Catatan"/>
                <TextInput
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Foto" 
                    value={props.kondisi}
                    placeholder="Foto Alat"/>
                <Button color={"#334753"} icon="send" mode="contained" style={{marginVertical:25}}>
                    Kirim
                </Button>
            </ScrollView>
        </View>
    )
}

export default class Radiosonde extends Component {
    state={
        lokasi:"Stasiun Meteorologi Kls I Soekarno-Hatta",
        merek:"EEC",
        tahun:"2009",
        kondisi:"",
        catatan:"",
    }
    render() {
        return (
            <View>
                <Header 
                    judul="Radiosonde" 
                    subjudul="Stamet Soetta" 
                    isi={<Isian 
                        lokasi={this.state.lokasi} 
                        merek={this.state.merek} 
                        thn={this.state.tahun} 
                        kondisi={this.state.kondisi} 
                        catatan={this.state.catatan} 
                        />} 
                    navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
