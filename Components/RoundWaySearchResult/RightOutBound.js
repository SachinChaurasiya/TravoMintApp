import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  Image,
  Alert,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Moment from 'moment';
import COLOR from '../../assets/consts/colors';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
// import INDIGO from '../../assets/Image/INDIGO.png';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const RightOutBound = (props) => {
  const [childValue, setChildValue] = useState(props.data);
  // -----------------------------------------------------------------------------------------------

  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };
  const Flight = ({ Flight }) => {
    let uri = `https://www.travomint.com/resources/images/airline-logo/${Flight.airline}.png`;
    // console.log(uri);

    var round = Flight.fare.grandTotal;
    round = round.toFixed(2);
    return (
      <View style={{ flexDirection: 'row', width: width - 200 }}>
        {/* {console.log('Lenfth' + Flight.inBound.length)} */}
        <View style={{ width: width }}>
          {Flight.outBound != null &&
            Flight.outBound.length !== undefined &&
            Flight.outBound.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
                // onPress={() =>
                //   navigation.navigate('Book', { flightdata: datapass })
                // }
                onPress={() => console.log(childValue.child)}
              >
                <View
                  style={{
                    flex: 1,
                    width: width / 2,
                    borderWidth: 1,
                    // borderRadius: 10,
                    borderOpacity: 0.4,
                    borderColor: COLOR.grey,
                    // marginHorizontal: 10,
                  }}
                >
                  <View>
                    <View>
                      <Text
                        style={{
                          fontSize: 10,
                          marginLeft: 10,
                          opacity: 0.7,
                          marginTop: 10,
                        }}
                      >
                        {item.airlineName} {item.flightID} {item.flightNo}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      padding: 15,
                    }}
                  >
                    <View>
                      <Image
                        source={{ uri: uri }}
                        style={{ width: 15, height: 15, marginRight: 10 }}
                      />
                    </View>
                    <View
                      style={{
                        marginRight: 5,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <View>
                        {/* <Text>15:40</Text> */}
                        <Text style={{ fontSize: 7 }}>
                          {item.depDate.split('T')[1].substring(0, 5)}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 7 }}>{item.fromAirport}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <View>
                        {/* <Text>2h:20m</Text> */}
                        <Text style={{ fontSize: 11 }}>
                          <ConvertMinsToTime data={item.eft} />
                        </Text>
                      </View>
                      <View
                        style={{
                          height: 1,
                          width: 30,
                          backgroundColor: '#ccc',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 5,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <View>
                        <Text style={{ fontSize: 7 }}>
                          {' '}
                          {item.reachDate.split('T')[1].substring(0, 5)}
                        </Text>
                        {/* <Text>20:40</Text> */}
                      </View>
                      <View>
                        <Text style={{ fontSize: 7 }}>{item.toAirport}</Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}
                      >
                        {/* ${Flight.fare.grandTotal} */}₹{round}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              // <View key={item.key}>
              //   <Text>
              //     {console.log(index)}
              //     {/* {console.log(item.toAirport, item.fromAirport)} */}
              //   </Text>
              //   <Text>{item.flightID}</Text>
              //   <Text>{item.fromAirport}</Text>
              //   <Text>{item.toAirport}</Text>
              //   <Text>{item.airline}</Text>
              //   <Text>{Flight.fare.grandTotal}</Text>
              // </View>
            ))}
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <View>
            <View>
              <FlatList
                data={props.data.flightResult}
                renderItem={({ item }) => <Flight Flight={item} />}
                //   // numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </Animatable.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f15b2f',
  },
  // contentDiv:{
  //     flex:1,
  //     backgroundColor:'white',
  //     marginTop:150,
  //     borderTopLeftRadius:30,
  //     borderTopRightRadius:30
  // },
  header: {
    flex: 2,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: width,
    borderWidth: 1,
    borderTopColor: COLOR.secondary,
    borderBottomColor: COLOR.white,
    borderLeftColor: COLOR.white,
    borderRightColor: COLOR.white,
    // justifyContent: 'flex-end',
    // top:100
  },
  btn: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#f15b2f',
    borderRadius: 30,
    marginBottom: 10,
  },
  card: {
    marginTop: 10,
  },
  icon: {
    // marginTop:18,
    justifyContent: 'center',
  },
  refundableDiv: {
    // elevation:1,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    justifyContent: 'center',
  },
  shadowContainerStyle: {
    borderWidth: 1,
    borderColor: COLOR.primary,
    width: 290,
    borderRadius: 10,
    height: 100,
  },
  InsideRefundable: {
    margin: 10,
    borderRadius: 20,
    shadowOpacity: 10,
    shadowColor: '#ccc',
    shadowRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  modalView: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'red',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flex: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // marginTop:150
  },
  Time: {
    fontWeight: 'bold',
    marginLeft: 2,
  },
  Duration: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default RightOutBound;