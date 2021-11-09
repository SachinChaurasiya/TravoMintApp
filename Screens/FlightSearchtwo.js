import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

export default function FlightSearchtwo() {
  const [text, setText] = useState('');
  const [state, setState] = useState({ data: [], loading: false }); // only one data source
  const { data, loading } = state;
  const fetchAPI = () => {
    //setState({data:[], loading: true});
    return fetch('https://api.covid19api.com/countries')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setState({ data, loading: false }); // set only data
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []); // use `[]` to avoid multiple side effect

  const filterdData = text // based on text, filter data and use filtered data
    ? data.filter(item => {
        const itemData = item.Country.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : null; // on on text, u can return all data
//   console.log(data);
  const itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  return (
    <View>
      {loading === false ? (
        <View style={styles.MainContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setText(text)}
            value={text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={filterdData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={itemSeparator}
            renderItem={({ item }) => (
              <Text style={styles.row}>{item.Country}</Text>
            )}
            style={{ marginTop: 10 }}
          />
        </View>
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    //flex: 1,
    margin: 5,
    height: 800,
  },

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: '#333',
  },
});