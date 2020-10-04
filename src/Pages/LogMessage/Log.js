import React, { Component } from 'react'
import { Text, StyleSheet, View, RefreshControl, ScrollView } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'
import { Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment'
import { GlobalConsumer } from '../../Component/Context/Context';

const IsiCard = (val) => {
    return(
        <Card style={{margin:2.7}}>
            <Card.Content>
                <Title>{val.alat}</Title>
                <Paragraph>{val.tanggal}</Paragraph>
            </Card.Content>
        </Card>
    )
}

const HandleIsi = (val) => {
    return val.data.map((data, index)=>{
        return <IsiCard key={index} alat={data.alat} tanggal={data.tgl} />
    })
}

const isian = (c) =>{
    console.log(c.state)
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={c.state.refreshing} onRefresh={c._onRefresh.bind(c)} />
            } 
            >
            <Text style={{fontWeight:"bold", fontSize:16, textAlign:"center", margin:10}}>{moment().format('dddd, D MMMM YYYY')}</Text>
            <HandleIsi data={c.state.update} />
        </ScrollView>
    )
}

class Log extends Component {
    state={
        update:this.props.state.update,
        refreshing:false,
        lokasi:this.props.state.data[0].statsiun
    }

    _onRefresh() {
        this.setState({...this.state, refreshing: true});
        this.setState({...this.state, update:this.props.state.update})
        setTimeout(()=>this.setState({...this.state, refreshing: false}),2000)
    }

    render() {
        return (
            <View>
                <Header 
                    judul="Log Message" 
                    subjudul={this.state.lokasi} 
                    isi={isian(this)} 
                    navigasi={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default GlobalConsumer(Log)