import React, { useState, useEffect, useRef } from 'react';
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
import RBSheet from 'react-native-raw-bottom-sheet';

// import INDIGO from '../../assets/Image/INDIGO.png';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RightInBound = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([
    {
      grandTotal: '9800.00',
      fromTraveller: 'AMD',
      toTraveller: 'Mum',
      airline: 'SG',
    },
    {
      grandTotal: '9800.00',
      fromTraveller: 'CHN',
      toTraveller: 'Mum',
      airline: 'SG',
    },
  ]);
  const refRBSheet = useRef();

  const handelProceed = () => {
    navigation.navigate('TravelInfo');
  };

  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  // const [modalVisible, setModalVisible] = useState(false);
  // const flightdeatils = (Flight) => {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: COLOR.primary,
  //         height: 500,
  //         width: width,
  //       }}
  //     >
  //       <Text>{console.log('Sachin')}</Text>
  //       <Text>{console.log(Flight.fare.grandTotal)}</Text>
  //       <Text>{Flight.fare.grandTotal}</Text>
  //     </View>
  //   );
  // };

  const Flight = ({ Flight }) => {
    let uri = `https://www.travomint.com/resources/images/airline-logo/${Flight.airline}.png`;
    // console.log(uri);

    var round = Flight.fare.grandTotal;
    var SeldepDate;

    round = round.toFixed(2);
    return (
      <View>
        {/* {console.log('Lenfth' + Flight.outBound.length)} */}
        <View style={{ width: width / 2 }}>
          {Flight.outBound != null &&
            Flight.outBound.length !== undefined &&
            Flight.outBound.map(
              (item, index) => (
                (SeldepDate = item.depDate.split('T')[1].substring(0, 5)),
                (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      setSelectedItem([
                        {
                          grandTotal: round,
                          fromTraveller: 'LKO',
                          toTraveller: 'HYD',
                          airline: 'UK',
                          depDate: SeldepDate,
                          recDate: '17:05',
                          Duration: '2h:10m',
                          FlightCode: 'UK 861',
                        },
                        {
                          grandTotal: round,
                          fromTraveller: 'GOI',
                          toTraveller: 'Mum',
                          airline: 'UK',
                          depDate: SeldepDate,
                          recDate: '19:30',
                          Duration: '2h:45m',
                          FlightCode: 'UK 814',
                        },
                      ]);
                      refRBSheet.current.open(selectedItem);
                    }}
                  >
                    <View
                      key={index}
                      style={{
                        flex: 1,
                        width: width / 2,
                        borderWidth: 0.5,
                        // height: 100,
                        // borderRadius: 10,
                        borderOpacity: 0.4,
                        borderColor: COLOR.grey,
                        // marginHorizontal: 10,
                      }}
                    >
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
                            style={{ width: 30, height: 30, marginRight: 10 }}
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
                            <Text style={{ fontSize: 14 }}>
                              {item.depDate.split('T')[1].substring(0, 5)}
                            </Text>
                          </View>
                          <View>
                            <Text style={{ fontSize: 12 }}>
                              {item.fromAirport}
                            </Text>
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
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
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
                            <Text style={{ fontSize: 14 }}>
                              {' '}
                              {item.reachDate.split('T')[1].substring(0, 5)}
                            </Text>
                            {/* <Text>20:40</Text> */}
                          </View>
                          <View>
                            <Text style={{ fontSize: 12 }}>
                              {item.toAirport}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          margin: 5,
                        }}
                      >
                        <View>
                          <View>
                            <Text
                              style={{
                                fontSize: 16,
                                marginLeft: 10,
                                opacity: 0.7,
                                marginTop: 10,
                              }}
                            >
                              {item.airlineName} {item.flightNo}
                            </Text>
                          </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              margin: 10,
                            }}
                          >
                            {/* ${Flight.fare.grandTotal} */}₹{round}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              )
            )}
        </View>
      </View>
    );
  };

  const FlightSelectedBottom = ({ selectedFlight }) => {
    console.log(selectedFlight);
    let uri = `https://www.travomint.com/resources/images/airline-logo/${selectedFlight.airline}.png`;

    var round = selectedFlight.grandTotal;
    var reachDate = selectedFlight.grandTotal;
    var depDate = selectedFlight.depDate;
    var gTotal = gTotal + round;

    //round = round.toFixed(2);
    //starting the Bottom sheet selected view

    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 3,
            padding: 2,
          }}
        >
          {selectedFlight.map((selItem, index) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 3,
                padding: 2,
                borderColor: '#bbb',
                borderWidth: 0.3,
              }}
            >
              <TouchableOpacity activeOpacity={0.6}>
                <View>
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
                        source={{
                          uri: `https://www.travomint.com/resources/images/airline-logo/${selItem.airline}.png`,
                        }}
                        style={{ width: 30, height: 30, marginRight: 10 }}
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
                        <Text style={{ fontSize: 14 }}>
                          {selItem.fromTraveller}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 12 }}> {selItem.recDate}</Text>
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
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                          {selItem.Duration}
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
                        <Text style={{ fontSize: 14 }}>
                          {' '}
                          {selItem.toTraveller}
                        </Text>
                        {/* <Text>20:40</Text> */}
                      </View>
                      <View>
                        <Text style={{ fontSize: 12 }}>{selItem.recDate}</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 5,
                    }}
                  >
                    <View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            marginLeft: 10,
                            opacity: 0.7,
                            marginTop: 10,
                          }}
                        >
                          {selItem.FlightCode}
                        </Text>
                      </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          margin: 10,
                        }}
                      >
                        {/* ${Flight.fare.grandTotal} */}₹{selItem.grandTotal}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 60,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 8,
              height: 50,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLOR.primary,
              marginTop: 30,
            }}
            activeOpacity={0.7}
            onPress={handelProceed}
          >
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              Proceed >>
            </Text>
          </TouchableOpacity>
        </View>
      </>
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
                renderItem={({ item }) => (
                  <View>
                    <Flight Flight={item} />
                  </View>
                )}
                //   // numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </Animatable.View>
        <View
          style={{
            flex: 1,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ccc',
          }}
        >
          {/* renderItem = (item, index) => (
  <View>
    <Button title={`Oopen-${index}`} onPress={() => this[RBSheet + index].open()} />
    <RBSheet
      ref={ref => {
        this[RBSheet + index] = ref;
      }}
    >
      <YourOwnComponent onPress={() => this[RBSheet + index].close()} />
    </RBSheet>
  </View>
); */}

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: COLOR.primary,
              },
              container: {
                backgroundColor: '#F9f9f9',
              },
            }}
          >
            {/* <YourOwnComponent /> */}
            <FlightSelectedBottom selectedFlight={selectedItem} />
          </RBSheet>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f15b2f',
  },
  containerSelFlight: {
    flex: 2,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
  },
  selFlightPrice: {
    color: COLOR.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  selectedFlightNormalText: {
    color: COLOR.dark,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
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

export default RightInBound;
