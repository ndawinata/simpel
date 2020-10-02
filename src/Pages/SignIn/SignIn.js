import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Dimensions, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Logo from '../../Assets/icons/Logo.png'
import Axios from 'axios'
import { GlobalConsumer } from '../../Component/Context/Context';


const windowWidth = Dimensions.get('window').width;

export class SignIn extends Component {

    state = {
        username:"",
        password:"",
        val:0
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#334753', resizeMode:'cover', justifyContent:"center"}} >
                <StatusBar hidden={true} />
                <View style={{justifyContent:'center', alignItems:'center'}} >
                    <Image source={Logo} style={{width:190, height:96, marginLeft:50, marginBottom:50}} />
                    <TextInput 
                        style={style.username} 
                        onChangeText = {text => this.setState({...this.state, username:text})} 
                        placeholder="Username"
                        underlineColorAndroid = "#30BBBA" 
                        placeholderTextColor="#30BBBA"
                        selectionColor="#30BBBA"
                        // keyboardType="email-address"
                        placeholderTextColor="#30BBBA"
                        // autoCompleteType="email"
                        value={this.state.username} />
                    <TextInput 
                        style={style.password} 
                        onChangeText = {text => this.setState({...this.state, password:text})} 
                        secureTextEntry={true}
                        underlineColorAndroid = "#30BBBA" 
                        placeholderTextColor="#30BBBA"
                        selectionColor="#30BBBA"
                        placeholderTextColor="#30BBBA"
                        placeholder="Password"
                        value={this.state.password} />
                    <TouchableOpacity 
                        style={style.signin}
                        onPress={()=>{
                            // login(this.state)
                            
                            const body = {
                                "username":this.state.username,
                                "password":this.state.password
                            }
                            Axios.post('http://139.180.220.65:3000/api/users/login', body)
                                .then((dat)=>{
                                    Axios.get(`http://139.180.220.65:3000/api/users/statsiun/${this.state.username}`, {
                                        headers:{'Authorization':`Bearer ${dat.data.token}`}
                                        })
                                        .then((c)=>{
                                            // console.log(c.data.success)
                                            switch(c.data.success) {
                                                case 1:
                                                    this.props.updateValue({username:this.state.username})
                                                    this.props.updateValue({data:c.data.data})
                                                    return(this.props.navigation.navigate('MyDrawer'))
                                                    break;
                                                default:
                                                    Alert.alert(
                                                        "Alert",
                                                        "Incorrect Username OR Password",
                                                        [
                                                            { text: "OK" }
                                                        ],
                                                        { cancelable: false }
                                                    )
                                            } 
                                        })
                                    })
                            // this.props.navigation.navigate('MyDrawer')
                        }}
                        >
                        <Text style={{fontSize:20}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    username:{
        fontSize:18, 
        height:40, 
        width:windowWidth*0.65, 
        color:'#fff', 
        marginVertical:10, 
        paddingHorizontal:10
    },
    password:{
        fontSize:18, 
        height:40, 
        width:windowWidth*0.65, 
        color:'#fff', 
        marginVertical:10, 
        paddingHorizontal:10
    },
    signin:{
        borderRadius:8,
        justifyContent:'center', 
        alignItems:'center', 
        height:40, 
        width:windowWidth*0.65, 
        backgroundColor:'#30BBBA',
        marginVertical:10, 
        marginVertical:15
    }
})

export default GlobalConsumer(SignIn)
