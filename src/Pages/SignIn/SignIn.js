import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Dimensions, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Logo from '../../Assets/icons/Logo.png'
import Axios from 'axios'
import { GlobalConsumer } from '../../Component/Context/Context';
import Spinner from 'react-native-loading-spinner-overlay';

const windowWidth = Dimensions.get('window').width;

export class SignIn extends Component {

    state = {
        username:"",
        password:"",
        spinner:false
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#334753', resizeMode:'cover', justifyContent:"center"}} >
                <StatusBar hidden={true} />
                <Spinner visible={this.state.spinner} textContent={'Sign In'} textStyle={style.spinnerText} />
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
                            const body = {
                                "username":this.state.username,
                                "password":this.state.password
                            }
                            // this.props.updateValue({user:this.state.username})
                            Axios.post('http://139.180.220.65:3000/api/users/login', body)
                                .then((dat)=>{
                                    // this.props.updateUser({user:this.state.username})
                                    this.setState({...this.state, spinner:true})
                                    if(dat.data.success==1){
                                        Axios.get(`http://139.180.220.65:3000/api/users/statsiun/${this.state.username}`)
                                            .then((c)=>{
                                                this.props.updateValue({data:c.data.data, user:this.state.username})
                                                this.props.navigation.navigate('MyDrawer')
                                                this.setState({...this.state, spinner:false})
                                            })
                                    }else{
                                        Alert.alert(
                                            "Alert",
                                            "Incorrect Username OR Password",
                                            [
                                                { 
                                                    text: "OK",
                                                    onPress:()=>this.setState({...this.state, spinner:false})
                                                }
                                            ],
                                                { cancelable: false }
                                        )
                                    }
                                })
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
    spinnerText:{
        color:'#30BBBA'
    },
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
