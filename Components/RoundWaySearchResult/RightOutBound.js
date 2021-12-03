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
import { StatusBar } from 'expo-status-bar';
import BottomSheet from 'reanimated-bottom-sheet';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Moment from 'moment';
import COLOR from '../../assets/consts/colors';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomSelectButton from '../CustomAppElements/CustomSelectButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import INDIGO from '../../assets/Image/INDIGO.png';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RightInBound = (props) => {
  const navigation = useNavigation();
  const [choice, setChoice] = useState('1');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItemBg, setCurrentItemBg] = useState('');
  const predatapass = props.data.flightResult;

  //console.log(predatapass);
  //const [datapassPost, setDatapassPost] = useState(predatapass);

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

  // useEffect(() => {
  //   setDatapassPost(predatapass);
  // }, []);

  const sortListToal = () => {
    let newdata = predatapass.sort((obj1, obj2) => {
      console.log(obj2.resultID);
      return obj1.resultID - obj2.resultID;
    });

    //  console.log(datapass);
    // let newdata = predatapass.filter((obj1) => {
    //   return obj1.resultID > 40;
    //   // console.log(obj1.resultID);
    // });
    setDatapassPost(newdata);
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
    // console.log(Flight);
    let uri = `https://www.travomint.com/resources/images/airline-logo/${Flight.airline}.png`;
    let inBoundCount = Flight.inBound.length;

    // console.log('Outbound Count:', Flight.outBound.length);
    // console.log('airline-', props.data.airline);
    //  if(inBoundCount==1){
    let getToAirport = Flight.inBound[inBoundCount - 1].toAirport;
    let getFromAirport = Flight.inBound[0].fromAirport;
    let geteft = Flight.inBound[0].eft + Flight.inBound[0].layOverTime;
    let getairlineName = Flight.inBound[0].airline;
    let getflightNo = Flight.inBound[0].flightNo;
    let getStops = inBoundCount - 1;

    //  }else if (inBoundCount==2){

    //  }

    var round = Flight.fare.grandTotal;
    var SeldepDate;

    round = round.toFixed(2);

    return (
      <View key={Flight.resultID.toString()} style={{ marginBottom: 20 }}>
        {/* {console.log('Lenfth' + Flight.inBound.length)} */}

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            // Flight['fare'] = round;
            setSelectedItem({ Flight });
            //  [RBSheet + index].open(selectedItem);

            refRBSheet.current.open(selectedItem);
          }}
        >
          <View
            style={{
              width: width / 2,
              //borderBottomWidth: 2,
              //  borderBottomColor: COLOR.grey,
            }}
          >
            <View
              style={{
                flex: 1,
                width: width / 2,

                borderWidth: 0.5,
                // height: 100,
                // borderRadius: 10,
                borderOpacity: 0.4,
                borderColor: '#f0f8ff',
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
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                      {getFromAirport}
                    </Text>
                  </View>
                  <View>
                    {/* <Text>15:40</Text> */}
                    <Text style={{ fontSize: 14 }}>
                      {Flight.inBound[0].depDate.split('T')[1].substring(0, 5)}
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
                    <Text style={{ fontSize: 12 }}>
                      <ConvertMinsToTime data={geteft} />
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 0.6,
                      width: 50,
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
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                      {getToAirport}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 14 }}>
                      {' '}
                      {Flight.inBound[inBoundCount - 1].reachDate
                        .split('T')[1]
                        .substring(0, 5)}
                    </Text>
                    {/* <Text>20:40</Text> */}
                  </View>
                </View>
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 0,
                  backgroundColor: '#f0f8ff',
                }}
              >
                <View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 10,
                        opacity: 0.7,
                        marginTop: 5,
                      }}
                    >
                      {/* {props.data.airline
                        .filter((airline) => airline.code == getairlineName)
                        .map((airline) => airline.name)} 
                       {Flight.airline
                        .filter((item) => item.code == getairlineName)
                        .map((item) => item.name)} 
                      {getairlineName} {'\n'}
                      <Text style={{ fontSize: 9, color: '#696969' }}>
                        ({getStops > 0 ? `${getStops} Stop` : 'Non-Stop'})
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text
                    style={{
                      fontSize: 21,
                      fontWeight: 'bold',
                      margin: 10,
                      // textShadowColor: COLOR.white,
                      // textShadowRadius: 1,
                      //  color: '#343434',
                    }}
                  >
                    ${round}
                    {/* {item.SequenceNumber > 0 ? item.SequenceNumber : round} {''}
                    {item.length === 1 ? round : 'Non-Stop'} 
                  </Text>
                </View>
              </View> */}
            </View>
          </View>
        </TouchableOpacity>

        <CustomSelectButton
          onPress={() => setChoice(Flight.resultID.toString())}
          isChecked={choice === Flight.resultID.toString()}
          text={round}
          smalltext={getStops > 0 ? `${getStops} Stop` : 'Non-Stop'}
          mediumtext={getairlineName}
          textSize={21}
          iconName="checksquareo"
          iconColor="#fff"
          iconSize={20}
          buttonDefaultColor="#f0f8ff"
          buttonSelectedColor={COLOR.primary}
          textDefaultColor="#333"
          textSelectedColor={COLOR.white}
          fontWeight="bold"
        />
      </View>
    );
  };

  const FlightSelectedBottom = ({ selectedFlight }) => {
    console.log(selectedFlight);
    // let uri = `https://www.travomint.com/resources/images/airline-logo/${selectedFlight.airline}.png`;

    //round = round.toFixed(2);
    //starting the Bottom sheet selected view

    return (
      <>
        <ScrollView>
          <Animatable.View
            key={selectedFlight.Flight.resultID.toString()}
            animation="fadeInDownBig"
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              margin: 3,
              padding: 2,
              width: width,
            }}
          >
            {selectedFlight.Flight.inBound != null &&
              selectedFlight.Flight.inBound.length !== undefined &&
              selectedFlight.Flight.inBound.map((selItem, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 3,
                    padding: 2,
                    borderColor: '#bbb',
                    borderWidth: 0.3,
                    width: width,
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
                          width: width,
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
                              {selItem.fromAirport}
                            </Text>
                          </View>
                          <View>
                            <Text style={{ fontSize: 12 }}>
                              {' '}
                              {selItem.depDate.split('T')[1].substring(0, 5)}
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
                              <ConvertMinsToTime data={selItem.eft} />
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
                              {selItem.toAirport}
                            </Text>
                            {/* <Text>20:40</Text> */}
                          </View>
                          <View>
                            <Text style={{ fontSize: 12 }}>
                              {selItem.reachDate.split('T')[1].substring(0, 5)}
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
                              {selItem.airline} {''}
                              {selItem.flightNo}
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
                            {/* ${Flight.fare.grandTotal} */}₹
                            {selectedFlight.Flight.fare.grandTotal}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </Animatable.View>
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
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
                data={predatapass}
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
            height={height / 3}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: COLOR.secondary,
              },
              container: {
                backgroundColor: '#ffffff',
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
