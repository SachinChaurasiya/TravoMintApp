import React from 'react';
import {ScrollView, View,Text,Pressable,TouchableOpacity,Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {DrawerActions} from '@react-navigation/native';

// color
import COLOR from '../assets/consts/colors'

// icons
import Icons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// Components Screens
import HomeScreen from '../Screens/HomeScreen';
import NotificationsScreen from '../Screens/NotificationScreen';
import OfferScreen from '../Screens/Offers'
import MoreScreen from '../Screens/More';
// import SupportScreens from './SupportScreens'
// import { Drawer } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const OfferStack = createStackNavigator();
const MoreStack = createStackNavigator();



const MainTabScreens = (props) => (
    <Tab.Navigator
    activeColor="#fff"
     >
    <Tab.Screen
      name="Flight"
      component={HomeStackScreen }
      options={{
        headerShown:false,
        tabBarLabel: 'Homes',
        tabBarColor:COLOR.primary,
        tabBarIcon: ({ color }) => (
          <Icons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Notification',
        tabBarColor:COLOR.primary,
        tabBarIcon: ({ color }) => (
          <Octicons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Offers"
      component={OfferStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Offers',
        tabBarColor:COLOR.primary,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="local-offer" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Mores"
      component={MoreStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'More',
        tabBarColor:COLOR.primary,
        tabBarIcon: ({ color }) => (
          <Icons name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreens;


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Nav' options={{headerShown:false}} component={HomeScreen} />
      </HomeStack.Navigator> 
  )
  
  const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator>
        <NotificationStack.Screen name='Notification' 
          options={{
            headerTitle:"Notification" ,
            headerStyle:{ backgroundColor:COLOR.secondary },
            headerTintColor:COLOR.white,
            headerLeft:()=>(
            <View>
              <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
              <FontAwesome5 name="bars" size={20} style={{marginLeft:10}} color={COLOR.white}/>
              </TouchableOpacity>
            </View>)}}
        component={NotificationsScreen} />
      </NotificationStack.Navigator> 
  )

  const OfferStackScreen = ({navigation,props}) => (
    <OfferStack.Navigator>
        <OfferStack.Screen name='Offer' options={{
          headerTitle:"Offers" ,
          headerStyle:{ backgroundColor:COLOR.secondary  },
          headerTintColor:COLOR.white,
          headerLeft:()=>(
          <View>
            <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
            <FontAwesome5 name="bars" size={20} style={{marginLeft:10}} color={COLOR.white}/>
            </TouchableOpacity>
          </View>)}}component={OfferScreen} />
      </OfferStack.Navigator> 
  )

  const MoreStackScreen = ({navigation}) => (
    <MoreStack.Navigator>
        <MoreStack.Screen name='More' options={{
          headerTitle:"More" ,
          headerStyle:{ backgroundColor:COLOR.secondary},
          headerTintColor:COLOR.white,
          headerLeft:()=>(
          <View>
            <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
            <FontAwesome5 name="bars" size={20} style={{marginLeft:10}} color={COLOR.white}/>
            </TouchableOpacity>
          </View>),
        headerRight: () => (
          <TouchableOpacity onPress={()=>navigation.navigate("UserEdit")}>
          <FontAwesome5 name="user-edit" size={20} style={{marginRight:10}} color={COLOR.white}/>
          </TouchableOpacity>
        ),
        }} component={MoreScreen} />
      </MoreStack.Navigator> 
  )


  // options={{headerTitle:"Flight Search" , headerStyle:{
  //   backgroundColor:"#f15b2f" 
  //   },
  // headerTintColor:COLOR.white}}