import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'
import { TextInput, Button } from 'react-native-paper';
import moment from 'moment'
import Axios from 'axios'
import { GlobalConsumer } from '../../Component/Context/Context';

const Isian = (props) =>{
    // console.log(props.isiState.state)
    return(
        <View>
            <ScrollView >
                <TextInput
                    onChangeText = {text => props.isiState.setState({...props.isiState.state, lokasi:text})} 
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Lokasi" 
                    value={props.lokasi}
                    placeholder="Lokasi Stasiun"/>
                <TextInput
                    onChangeText = {text => props.isiState.setState({...props.isiState.state, merek:text})} 
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Merek" 
                    value={props.merek}
                    placeholder="Merek Alat"/>
                <TextInput
                    onChangeText = {text => props.isiState.setState({...props.isiState.state, tahun:text})} 
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Tahun" 
                    value={props.thn}
                    placeholder="Tahun Pembelian"/>
                <TextInput
                    onChangeText = {text => props.isiState.setState({...props.isiState.state, kondisi:text})} 
                    mode={"outlined"}
                    style={{marginVertical:3}}
                    label="Kondisi" 
                    value={props.kondisi}
                    placeholder="ON atau OFF"/>
                <TextInput
                    onChangeText = {text => props.isiState.setState({...props.isiState.state, catatan:text})} 
                    mode={"outlined"}
                    multiline={true}
                    numberOfLines={3}
                    style={{marginVertical:3}}
                    label="Catatan" 
                    value={props.catatan}
                    placeholder="Catatan"/>
                
                <Button color={"#334753"} icon="send" mode="contained" style={{marginVertical:25}} onPress={()=>{
                    const body = {
                        "waktu": moment().format(),
                        "statsiun": props.isiState.state.lokasi,
                        "alat": "AWOS",
                        "merek": props.isiState.state.merek,
                        "tahun": props.isiState.state.tahun,
                        "kondisi": props.isiState.state.kondisi,
                        "catatan": props.isiState.state.catatan
                    }
                    Axios.post(`http://139.180.220.65:3000/api/users/statsiun/add`, body)
                        .then((c)=>{
                            // console.log(c.data.success)
                            if(c.data.success==1){
                                let up = props.isiState.props.state.update
                                let tgl = moment().format('dddd, D MMMM YYYY  |  h:mm A')
                                let altUp = 'AWOS Update'
                                let isiUp = {
                                    alat:altUp,
                                    tgl:tgl
                                }
                                up.push(isiUp)
                                props.isiState.setState({updt:up})
                                Alert.alert(
                                    "Success",
                                    "Sukses Menambahkan Data",
                                    [
                                        { text: "OK" }
                                    ],
                                    { cancelable: false }
                                )
                            }else{
                                Alert.alert(
                                    "Failed",
                                    "Gagal Menambahkan Data",
                                    [
                                        { text: "OK" }
                                    ],
                                    { cancelable: false }
                                )
                            }
                            
                        })
                        .then(()=>{
                            console.log(props.isiState.props.state.update)
                        })
                }} >
                    Kirim
                </Button>
            </ScrollView>
        </View>
    )
}

class Awos extends Component {
    state={
        lokasi:this.props.state.data[1].statsiun,
        merek:this.props.state.data[1].merek,
        tahun:this.props.state.data[1].tahun,
        kondisi:"",
        catatan:"",
        url:`http://139.180.220.65:3000/api/users/statsiun/${this.props.state.user}`
    }
    render() {
        return (
            <View>
                <Header 
                    judul="AWOS" 
                    subjudul={this.state.lokasi}
                    isi={<Isian 
                        lokasi={this.state.lokasi} 
                        merek={this.state.merek} 
                        thn={this.state.tahun} 
                        kondisi={this.state.kondisi} 
                        catatan={this.state.catatan}
                        isiState={this}
                        />} 
                    navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default GlobalConsumer(Awos)