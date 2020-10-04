// import Axios from 'axios'
// import moment from 'moment'
import React, { Component, createContext } from 'react'
import { Alert } from 'react-native'
import moment from 'moment'
// var parseString = require('react-native-xml2js').parseString;


const RootContext = createContext()

//Provider
const Provider = RootContext.Provider
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                visible:false,
                alat:'',
                data:{},
                dWaktu:'',
                dMerek:'',
                dKondisi:'',
                dTahun:'',
                user:'',
                update:[]
            }
            updateValue = (val) =>{
                // this.setState({...this.state, coba:val.coba})
                this.setState({...this.state, data:val.data, user:val.user})
            }

            updateNotif = (val) =>{
                this.setState({...this.state, update:val.updt})
            }

            dispatch = (action) =>{
                switch(action.type){
                    case 'coba':
                        this.setState({...this.state, coba:action.value})
                        break
                    case 'hiddenDialog':
                        this.setState({...this.state, visible:false})
                        break
                    case 'radar':
                        const dat = this.state.data.filter( element => element.alat =="Radar")[this.state.data.filter( element => element.alat =="Radar").length-1]
                        this.setState({
                            ...this.state, 
                            alat:'Radar', 
                            visible:true, 
                            dWaktu:moment(dat.waktu).format('lll'),
                            dMerek:dat.merek,
                            dKondisi:dat.kondisi,
                            dTahun:dat.tahun
                        })
                        break
                    case 'awos':
                        const dat1 = this.state.data.filter( element => element.alat =="AWOS")[this.state.data.filter( element => element.alat =="AWOS").length-1]
                        this.setState({
                            ...this.state, 
                            alat:'AWOS', 
                            visible:true, 
                            dWaktu:moment(dat1.waktu).format('lll'),
                            dMerek:dat1.merek,
                            dKondisi:dat1.kondisi,
                            dTahun:dat1.tahun
                        })
                        break
                    case 'digitalisasi':
                        const dat2 = this.state.data.filter( element => element.alat =="Digitalisasi")[this.state.data.filter( element => element.alat =="Digitalisasi").length-1]
                        this.setState({
                            ...this.state, 
                            alat:'Digitalisasi', 
                            visible:true, 
                            dWaktu:moment(dat2.waktu).format('lll'),
                            dMerek:dat2.merek,
                            dKondisi:dat2.kondisi,
                            dTahun:dat2.tahun
                        })
                        break
                    case 'radiosonde':
                        const dat3 = this.state.data.filter( element => element.alat =="Radiosonde")[this.state.data.filter( element => element.alat =="Radiosonde").length-1]
                        this.setState({
                            ...this.state, 
                            alat:'Radiosonde', 
                            visible:true, 
                            dWaktu:moment(dat3.waktu).format('lll'),
                            dMerek:dat3.merek,
                            dKondisi:dat3.kondisi,
                            dTahun:dat3.tahun
                        })
                        break
                    default :
                        this.setState({...this.state})
                }
            }

            
            // componentDidMount(){
            //     setTimeout(()=>{this.setState({...this.state, visible:true})},10000)
            // }

            render(){
                return(
                    <Provider value={
                        {
                            state:this.state,
                            dispatch:this.dispatch,
                            updateValue:this.updateValue,
                            updateNotif:this.updateNotif
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider

//Consumer
const Consumer = RootContext.Consumer

export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }                        
                    </Consumer>                    
                )
            }
        }        
    )
}
