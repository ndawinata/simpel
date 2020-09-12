import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { StatusBar, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({navigasi, judul, subjudul, isi}) => (
    <View>
        <Appbar.Header statusBarHeight={windowHeight*0.10} style={{backgroundColor:"#334753", paddingBottom:windowHeight*0.08}}>
            <StatusBar backgroundColor={'#334753'} />
            <Appbar.Action size={38} icon="menu" onPress={() => {navigasi.openDrawer()}} />
            <Appbar.Content title={judul} titleStyle={{letterSpacing:2}} subtitle={subjudul} />
            <Avatar.Text size={50} label="NW" style={{backgroundColor:"#E6E6E6", marginRight:10}} />
        </Appbar.Header>
        <View style={{margin:15}}>
            {isi}
        </View>
    </View>
);

export default Header;