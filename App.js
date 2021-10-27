import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Tab from './Tabs/Tab'; 

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" options={{
           headerShown:false,
         }} component={Tab} />
      </Stack.Navigator>
      </NavigationContainer>
      </View>
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



