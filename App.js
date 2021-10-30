import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// Components
import DrawerScreen from './Tabs/DrawerScreen'
import Flightsearch from './Screens/FlightSearch';
import Flightsearchresult from './Screens/FlightSearchResult';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
             <StatusBar backgroundColor="#fff"/>
      <NavigationContainer>
       <Stack.Navigator>
         {/* <Stack.Screen name="Home" options={{
           headerShown:false,
         }} component={Tab} /> */}

         <Stack.Screen name="Root" options={{headerShown:false}} component={DrawerScreen}/>
         <Stack.Screen name="FlightSearch" options={{headerTitle:"Book Your Flight",headerStyle: {
            backgroundColor: '#195fb9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} headerStyle={{backgroundColor:"black"}} component={Flightsearch}/>

         <Stack.Screen name="FlightSearchResult" options={{headerTitle:"Flight Search" , headerStyle:{
          backgroundColor:"#f15b2f" 
          },
        headerTintColor:"#fff"}} component={Flightsearchresult}
         />
      </Stack.Navigator>
      </NavigationContainer>
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



