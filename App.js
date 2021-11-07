import { StatusBar } from 'expo-status-bar';
import React,{useState,useMemo,useEffect} from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import COLOR from './assets/consts/colors'

const Stack = createStackNavigator();


// auth
import {AuthContext} from './Context'
// Components
import DrawerScreen from './Tabs/DrawerScreen'
import Flightsearch from './Screens/FlightSearch';
import Flightsearchresult from './Screens/FlightSearchResult';
import RootStackScreen from './Screens/RootStackScreen';

export default function App({navigation}) {
  const [isloading, setIsloading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn:(userName , password)=>{
      setUserToken("dffd")
      setIsloading(false)
      // let userNames;
      // userNames = null;
      // if(userNames === 'user' && password === 'pass'){
      //   userToken = "sdsd";
      // }
      // dispatch({type : 'LOGIN' , id : userName, token : userToken})
    },
    signOut:()=>{
      setUserToken("null")
      setIsloading(false)
      // dispatch({type : 'LOGOUT'})
    },
    signUp:()=>{
      setUserToken("dffd")
      setIsloading(false)
    }
  }),[]);


  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
      // dispatch({type : 'REGISTER' , token : 'ddfef'})
    }, 1000);
  }, []);

if(isloading) {
  return(
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#000"/>
        </View>
  )
}


  return (
    <SafeAreaView style={styles.container}>
             <StatusBar backgroundColor={COLOR.secondary}  barStyle="light-content"/>
             <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ===! null ?(
          <Stack.Navigator>
 
          <Stack.Screen name="Root" options={{headerShown:false}} component={DrawerScreen}/>
       </Stack.Navigator>
        ): 
        <RootStackScreen/>
        }       
      </NavigationContainer>
      </AuthContext.Provider>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    // paddingTop: Platform.OS === 'android' ? 55 : 0,
    backgroundColor:"#fff",
  },
});



