import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderTab from '../Components/Home/HeaderTab';
import BestOffer from '../Components/Home/BestOffer';
import Categories from '../Components/Home/Categories';
import WelcomeSection from '../Components/Home/Header/WelcomeSection';
import Cards from '../CardsData';

const HomeScreen = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <HeaderTab {...props} />
      <WelcomeSection {...props} />
      <BestOffer />
      <Categories />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
