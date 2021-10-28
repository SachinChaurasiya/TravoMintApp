import React from 'react';
import {ScrollView, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// icons
import Icons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
// Components Screens
import HomeScreen from '../Screens/HomeScreen';
import NotificationsScreen from '../Screens/NotificationScreen';
import OfferScreen from '../Screens/Offers'
import MoreScreen from '../Screens/More';
// import SupportScreens from './SupportScreens'
// import { Drawer } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const HotelsStack = createStackNavigator();


const MainTabScreens = () => (
    <Tab.Navigator
    activeColor="#fff"
    options={{
      tabBarColor:"#000"
    }}
     >
    <Tab.Screen
      name="Flight"
      component={HomeStackScreen }
      options={{
        headerShown:false,
        tabBarLabel: 'Homes',
        // tabBarColor:"#195fb9",
        tabBarIcon: ({ color }) => (
          <Icons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Hotel"
      component={NotificationStackScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Hotels',
        // tabBarColor:"#f15b2f",
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
        // tabBarColor:"#f15b2f",
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
        // tabBarColor:"#f15b2f",
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
    <HotelsStack.Navigator>
        <HotelsStack.Screen name='Notification' options={{headerShown:false}} component={NotificationsScreen} />
      </HotelsStack.Navigator> 
  )

  const OfferStackScreen = ({navigation}) => (
    <HotelsStack.Navigator>
        <HotelsStack.Screen name='Offer' options={{headerShown:false}} component={OfferScreen} />
      </HotelsStack.Navigator> 
  )

  const MoreStackScreen = ({navigation}) => (
    <HotelsStack.Navigator>
        <HotelsStack.Screen name='More' options={{headerShown:false}} component={MoreScreen} />
      </HotelsStack.Navigator> 
  )