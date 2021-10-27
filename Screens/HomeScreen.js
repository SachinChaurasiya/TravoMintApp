import React from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';
import HeaderTab from '../Components/Home/HeaderTab';
import BestOffer from '../Components/Home/BestOffer';
import Categories from "../Components/Home/Categories";
const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <HeaderTab/>
      <BestOffer/>
      <Categories/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,backgroundColor:"#fff"
  }
})

export default HomeScreen;
