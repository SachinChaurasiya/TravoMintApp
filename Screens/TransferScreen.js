import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Transferscreen = () => {
  return (
    <View
      style={{ padding: '50%', justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('../assets/Image/ComingSoon.png')}
        style={{ width: 280, height: 200, reizeMode: 'contain' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Transferscreen;
