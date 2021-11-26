import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
// import MainTabScreens from './MainTabSceens';
import DrawerScreen from '../Tabs/DrawerScreen';
import Flightsearch from './FlightSearch';
import FlightSearchResult from './FlightSearchResult';
import TravelInfo from './TravelInfo';

// color
import COLOR from '../assets/consts/colors';
import HotelForm from './Hotels';
import Transferscreen from './TransferScreen';
import calendar from '../Components/Calendar/Calendar';
import FlightSearchtwo from './FlightSearchtwo';
import UserEditScreen from '../Components/More/UserEditScreen';
import BookNow from './BookNow';
import Paynow from './PayNow';
import Flightpromo from './FlightPromo';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="SplashScreen"
      options={{ headerShown: false }}
      component={SplashScreen}
    />
    <RootStack.Screen
      name="SignInScreen"
      options={{ headerShown: false }}
      component={SignInScreen}
    />
    <RootStack.Screen
      name="SignUpScreen"
      options={{ headerShown: false }}
      component={SignUpScreen}
    />
    <RootStack.Screen
      name="MainTabScreens"
      options={{ headerShown: false }}
      component={DrawerScreen}
    />
    <RootStack.Screen
      name="transfer"
      options={{
        headerTitle: 'Transfer',
        headerStyle: {
          backgroundColor: COLOR.secondary,
        },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      component={Transferscreen}
    />
    <RootStack.Screen
      name="FlightSearch"
      options={{
        headerTitle: 'Book Your Flight',
        headerStyle: {
          backgroundColor: COLOR.secondary,
        },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      component={Flightsearch}
    />

    <RootStack.Screen
      name="FlightSearchtwo"
      options={{
        headerTitle: 'Flight Result',
        headerStyle: { backgroundColor: COLOR.secondary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      component={FlightSearchtwo}
    />
    <RootStack.Screen
      name="FlightSearchResult"
      options={{
        headerTitle: 'Flight Search',
        headerStyle: {
          backgroundColor: '#f15b2f',
        },
        headerTintColor: COLOR.white,
      }}
      component={FlightSearchResult}
    />
    <RootStack.Screen
      name="Hotel"
      options={{
        headerTitle: 'Hotel Form',
        headerStyle: {
          backgroundColor: COLOR.secondary,
        },
        headerTintColor: COLOR.white,
      }}
      component={HotelForm}
    />
    <RootStack.Screen name="calendar" component={calendar} />
    <RootStack.Screen name="UserEdit" component={UserEditScreen} />
    <RootStack.Screen
      options={{
        headerTitle: 'Flight Details',
        headerStyle: { backgroundColor: COLOR.secondary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="Book"
      component={BookNow}
    />
    <RootStack.Screen
      options={{
        headerTitle: 'Travel Information',
        headerStyle: { backgroundColor: COLOR.secondary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="TravelInfo"
      component={TravelInfo}
    />
    <RootStack.Screen
      options={{
        headerTitle: 'Pay Now',
        headerStyle: { backgroundColor: COLOR.secondary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="PayNow"
      component={Paynow}
    />
    <RootStack.Screen
      options={{
        headerTitle: 'Flight Promo',
        headerStyle: { backgroundColor: COLOR.secondary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="FlightPromo"
      component={Flightpromo}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
