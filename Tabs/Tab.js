import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../Screens/HomeScreen';
import NotificationsScreen from '../Screens/NotificationScreen'
import OfferScreen from '../Screens/Offers';
import MoreScreen from '../Screens/More';


const Tabs = createBottomTabNavigator();


const Tab = () => {
    return (
            <Tabs.Navigator>
              <Tabs.Screen options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                  <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <Image source={require("../assets/Image/home.png")} 
                    resizeMode="contain" 
                    style={{
                      width:20,
                      height:20,
                      tintColor: focused ? "#195fb9" : "#000"
                      }}/>
                      {/* <Text style={{color: focused ? "#195fb9" : "#000"}}>
                        Home
                      </Text> */}
                  </View>
                )
              }}
              name="Homes" component={HomeScreen} />
              <Tabs.Screen name="Settings"
              options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                  <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <Image source={require("../assets/Image/bell.png")} 
                    resizeMode="contain" 
                    style={{
                      width:20,
                      height:20,
                      tintColor: focused ? "#195fb9" : "#000"
                      }}/>
                      {/* <Text style={{color: focused ? "#195fb9" : "#000"}}>
                        Notification
                      </Text> */}
                  </View>
                )
              }}
              component={NotificationsScreen} />
              <Tabs.Screen name="Offers"
              options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                  <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <Image source={require("../assets/Image/discount.png")} 
                    resizeMode="contain" 
                    style={{
                      width:20,
                      height:20,
                      tintColor: focused ? "#195fb9" : "#000"
                      }}/>
                      {/* <Text style={{color: focused ? "#195fb9" : "#000"}}>
                        Offers
                      </Text> */}
                  </View>
                )
              }}
              component={OfferScreen} />
              <Tabs.Screen name="More"
              options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                  <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <Image source={require("../assets/Image/more.png")} 
                    resizeMode="contain" 
                    style={{
                      width:20,
                      height:20,
                      tintColor: focused ? "#195fb9" : "#000"
                      }}/>
                      {/* <Text style={{color: focused ? "#195fb9" : "#000"}}>
                        More
                      </Text> */}
                  </View>
                )
              }}
              component={MoreScreen} />
            </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Tab;
