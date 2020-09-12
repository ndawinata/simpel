import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import Splash from './Pages/Splash/Splash'
import SideNavbar from './Component/Navbar/SideNav/SideNavbar';

const App = () => {
  const [splash, setsplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setsplash(false)
    },5000)
  },[])

  if(splash){
    return(<Splash/>)
  }else{
    return(<SideNavbar/>)
  }
}

export default App
