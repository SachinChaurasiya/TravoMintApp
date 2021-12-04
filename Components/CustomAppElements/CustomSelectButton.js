import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomSelectButton = ({
  text,
  smalltext,
  mediumtext,
  textSize,
  iconName,
  iconColor,
  iconSize,
  buttonDefaultColor,
  buttonSelectedColor,
  textDefaultColor,
  textSelectedColor,
  isChecked,
  ...props
}) => {
  // console.log(props);
  return (
    <TouchableOpacity {...props} style={{ paddingVertical: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          //  borderRadius: 5,
          overflow: 'hidden',
          textAlign: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor:
            isChecked === true ? buttonSelectedColor : buttonDefaultColor,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            marginLeft: 10,
            //opacity: 0.7,
            marginTop: 0,
            color: isChecked === true ? '#fff' : '#696969',
          }}
        >
          {mediumtext}
          {'\n'}
          <Text
            style={{
              fontSize: 8,
              color: isChecked === true ? '#fff' : '#696969',
            }}
          >
            ({smalltext})
          </Text>
          {/* {item.SequenceNumber > 0 ? item.SequenceNumber : round} {''}
                    {item.length === 1 ? round : 'Non-Stop'} */}
        </Text>
        <Text
          style={[
            styles.button_item,
            {
              fontSize: isChecked === true ? 20 : 18,
              fontWeight: 'bold',
              color: isChecked === true ? textSelectedColor : textDefaultColor,
            },
          ]}
        >
          ${text}
        </Text>
        <Text style={[styles.button_item]}>
          {isChecked === true ? (
            <AntDesign name={iconName} size={iconSize} color={iconColor} />
          ) : (
            <AntDesign name="checksquareo" size={iconSize} color="#ccc" />
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_item: {
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default CustomSelectButton;
