import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import Splash from './Pages/Splash/Splash'
import SideNavbar from './Component/Navbar/SideNav/SideNavbar';
// import Log from './Pages/LogMessage/Log';
import Dashboard from './Pages/Dashboard/Dashboard';
import GlobalProvider from './Component/Context/Context';
// import Radar from './Pages/Radar/Radar';

const App = () => {
  const [splash, setsplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setsplash(false)
    },5000)
  },[])

  // return(<Dashboard />)
  if(splash){
    return(<Splash/>)
  }else{
    return(<SideNavbar/>)
  }
}

export default GlobalProvider(App)
