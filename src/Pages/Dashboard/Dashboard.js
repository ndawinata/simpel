import React, { Component } from 'react'
import { Text, StyleSheet, View, RefreshControl, ScrollView } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'
import { List, Badge, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { GlobalConsumer } from '../../Component/Context/Context';
import moment from 'moment'
import Axios from 'axios'

const warna = (c) =>{
    switch(c) {
        case 'ON':
            return('green')
            break;
        case 'OFF':
            return('red')
            break;
        default:
            return('red')
    } 
}

const isian = (c) =>{
    // console.log(c.props.state)
    // console.log(c.state)
    return(
        <ScrollView 
                refreshControl={
                    <RefreshControl refreshing={c.state.refreshing} onRefresh={c._onRefresh.bind(c)} />
                } 
                >
            <View style={{marginHorizontal:10}}>
                    <Text style={styles.tanggal}>{moment().format('dddd, D MMMM YYYY')}</Text>
                    <List.Item
                        title="Radar Cuaca"
                        titleStyle={styles.alat}
                        style={styles.bayangan}
                        right={props => {
                            return(
                                <View style={{flexDirection:"row"}}>
                                    <List.Icon {...props} icon="chevron-right" />
                                    <Badge size={32} style={{fontSize:14, backgroundColor:`${warna(c.state.radar.kondisi)}`, position:'absolute',right:-18,top:-18}}>{c.state.radar.kondisi}</Badge>
                                </View>
                            )}
                        }
                        onPress={()=>{
                            c.props.dispatch({type:'radar'})
                        }}
                    />
                    <List.Item
                        title="AWOS"
                        style={styles.bayangan}
                        titleStyle={styles.alat}
                        right={props => {
                            return(
                                <View style={{flexDirection:"row"}}>
                                    <List.Icon {...props} icon="chevron-right" />
                                    <Badge size={32} style={{fontSize:14, backgroundColor:`${warna(c.state.awos.kondisi)}`, position:'absolute',right:-18,top:-18}}>{c.state.awos.kondisi}</Badge>
                                </View>
                            )}
                        }
                        onPress={()=>{
                            c.props.dispatch({type:'awos'})
                        }}
                    />
                    <List.Item
                        title="Digitalisasi"
                        style={styles.bayangan}
                        titleStyle={styles.alat}
                        right={props => {
                            return(
                                <View style={{flexDirection:"row"}}>
                                    <List.Icon {...props} icon="chevron-right" />
                                    <Badge size={32} style={{fontSize:14, backgroundColor:`${warna(c.state.digitalisasi.kondisi)}`, position:'absolute',right:-18,top:-18}}>{c.state.digitalisasi.kondisi}</Badge>
                                </View>
                            )}
                        }
                        onPress={()=>{
                            c.props.dispatch({type:'digitalisasi'})
                        }}
                    />
                    <List.Item
                        title="Radiosonde"
                        style={styles.bayangan}
                        titleStyle={styles.alat}
                        right={props => {
                            return(
                                <View style={{flexDirection:"row"}}>
                                    <List.Icon {...props} icon="chevron-right" />
                                    <Badge size={32} style={{fontSize:14, backgroundColor:`${warna(c.state.radiosonde.kondisi)}`, position:'absolute',right:-18,top:-18}}>{c.state.radiosonde.kondisi}</Badge>
                                </View>
                            )}
                        }
                        onPress={()=>{
                            c.props.dispatch({type:'radiosonde'})
                        }}
                    />
            </View>
        </ScrollView>
    )
}

class Dashboard extends Component {
    state={
        refreshing:false,
        subjudul:this.props.state.data[0].statsiun,
        radar:this.props.state.data.filter( element => element.alat =="Radar")[this.props.state.data.filter( element => element.alat =="Radar").length-1],
        awos:this.props.state.data.filter( element => element.alat =="AWOS")[this.props.state.data.filter( element => element.alat =="AWOS").length-1],
        digitalisasi:this.props.state.data.filter( element => element.alat =="Digitalisasi")[this.props.state.data.filter( element => element.alat =="Digitalisasi").length-1],
        radiosonde:this.props.state.data.filter( element => element.alat =="Radiosonde")[this.props.state.data.filter( element => element.alat =="Radiosonde").length-1]
    }


    _onRefresh() {
        this.setState({...this.state, refreshing: true});
        console.log(this.props.state.user)
        Axios.get(`http://139.180.220.65:3000/api/users/statsiun/soekarnohatta`)
            .then((dat)=>{
                this.props.updateValue({data:dat.data.data})
                this.setState({...this.state, awos:this.props.state.data.filter( element => element.alat =="Radiosonde")[this.props.state.data.filter( element => element.alat =="Radiosonde").length-1]})

                // this.setState({...this.state, refreshing: false})
            })
            .then((dat)=>{
                this.setState({...this.state, radiosonde:this.props.state.data.filter( element => element.alat =="Radiosonde")[this.props.state.data.filter( element => element.alat =="Radiosonde").length-1]})

                this.setState({...this.state, refreshing: false})
            })
    }

    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({...this.state, awos:this.props.state.data.filter( element => element.alat =="AWOS")[this.props.state.data.filter( element => element.alat =="AWOS").length-1]})
    //     },15000)
    // }

    render() {
        
        return (
            <View>
                <Portal>
                    <Dialog visible={this.props.state.visible} onDismiss={()=>{this.props.dispatch({type:'hiddenDialog'})}}>
                        <Dialog.Title>{this.props.state.alat}</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>Waktu   : {this.props.state.dWaktu}</Paragraph>
                        <Paragraph>Merek   : {this.props.state.dMerek}</Paragraph>
                        <Paragraph>Kondisi : {this.props.state.dKondisi}</Paragraph>
                        <Paragraph>Tahun   : {this.props.state.dTahun}</Paragraph>
                        </Dialog.Content>
                    </Dialog>
                </Portal>
                <Header judul={'Dashboard'} subjudul={this.state.subjudul} isi={isian(this)} navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bayangan:{
        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginVertical:8,
    },
    tanggal:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:16,
        margin:10
    },
    alat:{
        fontSize:18, 
        letterSpacing:1, 
        fontWeight:"bold"
    }
})

export default GlobalConsumer(Dashboard)