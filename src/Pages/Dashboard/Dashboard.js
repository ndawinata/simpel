import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'
import { List, Badge, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { GlobalConsumer } from '../../Component/Context/Context';

const isian = (c) =>{
    // console.log(c.state)
    return(
        <View style={{marginHorizontal:10}}>
            <Text style={styles.tanggal}>Tuesday, 2 January 2020</Text>
            <List.Item
                title="Radar Cuaca"
                titleStyle={styles.alat}
                style={styles.bayangan}
                right={props => {
                    return(
                        <View style={{flexDirection:"row"}}>
                            <List.Icon {...props} icon="chevron-right" />
                            <Badge size={32} style={{fontSize:14, backgroundColor:"green", position:'absolute',right:-18,top:-18}}>ON</Badge>
                        </View>
                    )}
                }
                onPress={()=>{
                    c.dispatch({type:'radar'})
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
                            <Badge size={32} style={{fontSize:14, backgroundColor:"green", position:'absolute',right:-18,top:-18}}>ON</Badge>
                        </View>
                    )}
                }
                onPress={()=>{
                    c.dispatch({type:'awos'})
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
                            <Badge size={32} style={{fontSize:14, backgroundColor:"green", position:'absolute',right:-18,top:-18}}>ON</Badge>
                        </View>
                    )}
                }
                onPress={()=>{
                    c.dispatch({type:'digitalisasi'})
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
                            <Badge size={32} style={{fontSize:14, backgroundColor:"red", position:'absolute',right:-18,top:-18}}>OFF</Badge>
                        </View>
                    )}
                }
                onPress={()=>{
                    c.dispatch({type:'radiosonde'})
                }}
            />
        </View>
    )
}

class Dashboard extends Component {

    render() {
        return (
            <View>
                <Portal>
                    <Dialog visible={this.props.state.visible} onDismiss={()=>{this.props.dispatch({type:'hiddenDialog'})}}>
                        <Dialog.Title>{this.props.state.alat}</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>This is simple dialog</Paragraph>
                        </Dialog.Content>
                    </Dialog>
                </Portal>
                <Header judul={this.props.state.coba} subjudul="Stamet Soetta" isi={isian(this.props)} navigasi={this.props.navigation}/>
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