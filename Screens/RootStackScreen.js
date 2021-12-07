import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// icons
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
// import MainTabScreens from './MainTabSceens';
import DrawerScreen from '../Tabs/DrawerScreen';
// import Flightsearch from './FlightSearch';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import FlightSearchResult from './FlightSearchResult';
import TravelInfo from './TravelInfo';

// color
import COLOR from '../assets/consts/colors';
import HotelForm from './Hotels';
import Lotti from './Oneway';
import Transferscreen from './TransferScreen';
import calendar from '../Components/Calendar/Calendar';
import FlightSearchtwo from './FlightSearchtwo';
import UserEditScreen from '../Components/More/UserEditScreen';
import BookNow from './BookNow';
import Paynow from './PayNow';
import Flightpromo from './FlightPromo';
import RoundWaySearchResult from './RoundWaySearchResult';
import Flightsearch from './FlightSearch';
import Roundwaysearchresult from './RoundWaySearchResult';
import MyBooking from './My booking';
import Support from './Support';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator initialRouteName={Support}>
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
          backgroundColor: COLOR.primary,
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
          backgroundColor: COLOR.primary,
        },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View>
            <TouchableOpacity>
              <FontAwesome5
                name="hand-holding-usd"
                size={20}
                style={{ marginRight: 5 }}
                color={COLOR.white}
              />
            </TouchableOpacity>
          </View>
        ),
      }}
      component={Flightsearch}
    ></RootStack.Screen>

    <RootStack.Screen
      name="FlightSearchtwo"
      options={{
        headerTitle: 'Flight Result',
        headerStyle: { backgroundColor: COLOR.primary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              name="user-edit"
              size={20}
              style={{ marginRight: 10 }}
              color={COLOR.white}
            />
          </TouchableOpacity>
        ),
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
          backgroundColor: COLOR.primary,
        },
        headerTintColor: COLOR.white,
      }}
      component={HotelForm}
    />
    {/* <RootStack.Screen name="calendar" component={calendar} /> */}
    <RootStack.Screen name="UserEdit" component={UserEditScreen} />
    <RootStack.Screen
      options={{
        headerTitle: 'Flight Details',
        headerStyle: { backgroundColor: COLOR.primary },
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
        headerStyle: { backgroundColor: COLOR.primary },
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
        headerStyle: { backgroundColor: COLOR.primary },
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
        headerStyle: { backgroundColor: COLOR.primary },
        headerTintColor: COLOR.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      name="FlightPromo"
      component={Flightpromo}
    />
    <RootStack.Screen
      options={{
        headerTitle: 'Flight Search',
        headerStyle: {
          backgroundColor: COLOR.blue,
        },
        headerTintColor: COLOR.white,
      }}
      name="RoundWaySearchResult"
      component={RoundWaySearchResult}
    />
    <RootStack.Screen
      name="My booking"
      options={{
        headerTitle: 'My Bookings',
        headerStyle: {
          backgroundColor: COLOR.blue,
        },
        headerTintColor: COLOR.white,
      }}
      component={MyBooking}
    />
    <RootStack.Screen
      name="Support"
      options={{
        headerTitle: 'My Bookings',
        headerStyle: {
          backgroundColor: COLOR.blue,
        },
        headerTintColor: COLOR.white,
      }}
      component={Support}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
