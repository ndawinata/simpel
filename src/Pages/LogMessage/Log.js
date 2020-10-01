import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Component/Navbar/Header/Header'
import { Card, Title, Paragraph } from 'react-native-paper';

const isian = () =>{
    return(
        <View>
            <Text style={{fontWeight:"bold", fontSize:16, textAlign:"center", margin:10}}>Tuesday, 2 January 2020</Text>
            <Card style={{margin:3}}>
                <Card.Content>
                    <Title>Radar Cuaca Update</Title>
                    <Paragraph>Tuesday, 2 January 2020</Paragraph>
                </Card.Content>
            </Card>
            <Card style={{margin:3}}>
                <Card.Content>
                    <Title>Awos Update</Title>
                    <Paragraph>Friday, 7 January 2020</Paragraph>
                </Card.Content>
            </Card>
        </View>
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
