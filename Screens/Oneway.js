import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Oneway = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={{ width: 400, height: 500 }}>
      <LottieView
        source={require('../9932-flight-ticket.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Oneway;
