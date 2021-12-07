import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';

const Icons = ({ name, color, size }) => {
  return (
    <View>
      <FontAwesome5
        name={name}
        color={color}
        size={size}
        style={{ marginRight: 5, marginVertical: 10 }}
      />
    </View>
  );
};
export default Icons;
