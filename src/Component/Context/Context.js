// import Axios from 'axios'
// import moment from 'moment'
import React, { Component, createContext } from 'react'
import { Alert } from 'react-native'
// var parseString = require('react-native-xml2js').parseString;


const RootContext = createContext()

//Provider
const Provider = RootContext.Provider
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                visible:false,
                coba:'Dashboard',
                alat:''
            }

            dispatch = (action) =>{
                switch(action.type){
                    case 'hiddenDialog':
                        this.setState({...this.state, visible:false})
                        break
                    case 'radar':
                        this.setState({...this.state, alat:'Radar', visible:true})
                        break
                    case 'awos':
                        this.setState({...this.state, alat:'Awos', visible:true})
                        break
                    case 'digitalisasi':
                        this.setState({...this.state, alat:'Digitalisasi', visible:true})
                        break
                    case 'radiosonde':
                        this.setState({...this.state, alat:'Radiosonde', visible:true})
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
                            dispatch:this.dispatch
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
