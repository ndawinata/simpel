import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import Log from '../../../Pages/LogMessage/Log';
import Radar from '../../../Pages/Radar/Radar';
import Awos from '../../../Pages/Awos/Awos';
import Digitalisasi from '../../../Pages/Digitalisasi/Digitalisasi';
import Radiosonde from '../../../Pages/Radiosonde/Radiosonde';
import SignIn from '../../../Pages/SignIn/SignIn'

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
       <View style={{alignItems:"center"}}>
        <Avatar.Text size={100} label="NW" style={{backgroundColor:"#E6E6E6", margin:20}} />
       </View>
       <View style={{alignItems:"center", marginBottom:20}}>
        <Text style={{color:"#fff", letterSpacing:1}}>Nanda Winata</Text>
        <Text style={{color:"#fff", letterSpacing:1}}>Stamet Soetta</Text>
       </View>
      <DrawerItemList {...props} />
      <Button onPress={()=>props.navigation.navigate('SignIn')} style={{marginTop:25, marginHorizontal:20}} mode="contained" color="#30BBBA" icon="logout" title="Logout">Logout</Button>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
        drawerContentOptions={{labelStyle:{color:"#fff", letterSpacing:1}}} 
        drawerStyle={{backgroundColor:"#334753", width:windowWidth*0.5, }} 
        drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Log Message" component={Log} />
      <Drawer.Screen name="Radar Cuaca" component={Radar} />
      <Drawer.Screen name="Awos" component={Awos} />
      <Drawer.Screen name="Digitalisasi" component={Digitalisasi} />
      <Drawer.Screen name="Radiosonde" component={Radiosonde} />

    </Drawer.Navigator>
  );
}

export default function SideNavbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}