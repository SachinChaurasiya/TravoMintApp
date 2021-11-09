import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity , TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DateRangePicker from "rn-select-date-range";

const calendar = ( props ) => {
  const [selectedRange, setRange] = useState({});
  const [calendarVisible, setCalendarVisible] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="DD-MM-YYYY"
          maxDate={moment().add(730, "days")}
          minDate={moment().subtract(730, "days")}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <View style={styles.container}>

          <TextInput
          placeholder="date"
          keyboardType="numeric"
          style = {{backgroundColor:'whitesmoke'}}
          >{selectedRange.firstDate}</TextInput>
          <Text>second date: {selectedRange.secondDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});

export default calendar;



