import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useEffect, useReducer } from 'react';
import Constants from 'expo-constants';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import counterReducer from './Components/Reducer';
import LottieView from 'lottie-react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// icons
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const rootReducer = combineReducers({
  counter: counterReducer,
});

let store = createStore(rootReducer);

import COLOR from './assets/consts/colors';

const Stack = createStackNavigator();

// auth
import { AuthContext } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Components
import DrawerScreen from './Tabs/DrawerScreen';
import Flightsearch from './Screens/FlightSearch';
import Flightsearchresult from './Screens/FlightSearchResult';
import RootStackScreen from './Screens/RootStackScreen';
import FlightSearchtwo from './Screens/FlightSearchtwo';
import Roundwaysearchresult from './Screens/RoundWaySearchResult';
import PayNow from './Screens/PayNow';
import TravelInfo from './Screens/TravelInfo';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [isloading, setIsloading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  AsyncStorage.getItem('userId').then((token) => {
    // console.log(token);
    setUserId(token);
    console.log(userId);
  });

  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case 'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // const authContext = useMemo(
  //   () => ({
  //     signIn: () => {
  //       setUserToken('dffd');
  //       setIsloading(false);
  //       // let userToken;
  //       // const userToken = null;
  //       // if (userName == 'user' && password == 'pass') {
  //       //   userToken = 'sdsd';
  //       // } else dispatch({ type: 'LOGIN', id: userName, token: userToken });
  //     },
  //     signOut: () => {
  //       setUserToken(null);
  //       setIsloading(false);
  //       // dispatch({ type: 'LOGOUT' });
  //     },
  //     signUp: () => {
  //       setUserToken('dffd');
  //       setIsloading(false);
  //     },
  //   }),
  //   []
  // );
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
      // dispatch({ type: 'REGISTER', token: 'ddfef' });
    }, 4000);
  }, []);

  if (isloading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <ActivityIndicator size="large" color="#000" /> */}
        <LottieView
          source={require('./9932-flight-ticket.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLOR.primary} barStyle="light-content" />
        <NavigationContainer>
          {userId ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Root"
                options={{ headerShown: false }}
                component={DrawerScreen}
              />
              <Stack.Screen
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
              ></Stack.Screen>
              <Stack.Screen
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
              <Stack.Screen
                name="FlightSearchResult"
                options={{
                  headerTitle: 'Flight Search',
                  headerStyle: {
                    backgroundColor: '#f15b2f',
                  },
                  headerTintColor: COLOR.white,
                }}
                component={Flightsearchresult}
              />
              <Stack.Screen
                name="RoundWaySearchResult"
                options={{
                  headerTitle: 'Flight Search',
                  headerStyle: {
                    backgroundColor: COLOR.blue,
                  },
                  headerTintColor: COLOR.white,
                }}
                component={Roundwaysearchresult}
              />
              <Stack.Screen
                name="PayNow"
                options={{
                  headerTitle: 'Pay Now',
                  headerStyle: { backgroundColor: COLOR.primary },
                  headerTintColor: COLOR.white,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                component={PayNow}
              />
              <Stack.Screen
                name="TravelInfo"
                options={{
                  headerTitle: 'Travel Information',
                  headerStyle: { backgroundColor: COLOR.primary },
                  headerTintColor: COLOR.white,
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
                component={TravelInfo}
              />
              <Stack.Screen
                name="SignInScreen"
                options={{ headerShown: false }}
                component={SignInScreen}
              />
              <Stack.Screen
                name="SignUpScreen"
                options={{ headerShown: false }}
                component={SignUpScreen}
              />
            </Stack.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
