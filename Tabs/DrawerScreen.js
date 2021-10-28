
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import{FontAwesome5} from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';

// Components Screens
import MainTabScreens from './MainTabSceens'
import DrawerContent from './DrawerContent'


// image
// import Logo from '../assets/Travomint.png'

const Drawer = createDrawerNavigator();

// function LogoTitle() {
//   return (
//     <Image source={Logo} style={{width:150 , height:30, }}/>
//   );
// }


export default function DrawerScreen(props) {
  return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name='Drawer'
       options={{
         headerShown:false,
        headerRight: () => (
          <View style={{flexDirection: 'row' , marginTop:7 ,alignItems:'center',justifyContent: 'center', marginRight:10}}>
                <View>
                <FontAwesome5
                  name='ellipsis-v' 
                  size={25} 
                  color='#000'/>
                 </View>
              </View>
        )
         }} component={MainTabScreens} />
    </Drawer.Navigator>

  )}