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

// import INDIGO from '../../assets/Image/INDIGO.png';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LeftInBound = (props) => {
  const navigation = useNavigation();
  const [choice, setChoice] = useState('1');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItemBg, setCurrentItemBg] = useState('');
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
    let inBoundCount = Flight.outBound.length;

    // console.log('Outbound Count:', Flight.outBound.length);
    // console.log('airline-', props.data.airline);
    //  if(inBoundCount==1){
    let getToAirport = Flight.outBound[inBoundCount - 1].toAirport;
    let getFromAirport = Flight.outBound[0].fromAirport;
    let geteft = Flight.outBound[0].eft + Flight.outBound[0].layOverTime;
    let getairlineName = Flight.outBound[0].airline;
    let getflightNo = Flight.outBound[0].flightNo;
    let getStops = inBoundCount - 1;

    //  }else if (inBoundCount==2){

    //  }

    var round = Flight.fare.grandTotal;
    var SeldepDate;

    round = round.toFixed(2);

    return (
      <View key={Flight.resultID.toString()} style={{ marginBottom: 20 }}>
        {/* {console.log('Lenfth' + Flight.outBound.length)} */}

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
                      {Flight.outBound[0].depDate.split('T')[1].substring(0, 5)}
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
                      {Flight.outBound[inBoundCount - 1].reachDate
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
    // console.log(selectedFlight);
    // let uri = `https://www.travomint.com/resources/images/airline-logo/${selectedFlight.airline}.png`;
    let totalAmount;
    //round = round.toFixed(2);
    //starting the Bottom sheet selected view
    // console.log(
    //   'checking object',
    console.log(selectedFlight.Flight.farell ? 'ok' : 'not ok');
    // );

    return (
      <>
        <View
          style={{
            backgroundColor: COLOR.blue,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '300',
              marginLeft: 5,
              padding: 10,
              color: COLOR.white,
            }}
          >
            Flight Details
          </Text>
        </View>
        <ScrollView>
          <Animatable.View
            key={selectedFlight.Flight.resultID.toString()}
            animation="fadeInDownBig"
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            {selectedFlight.Flight.outBound != null &&
              selectedFlight.Flight.outBound.length !== undefined &&
              selectedFlight.Flight.outBound.map((selItem, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
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
                    <View
                      style={{
                        backgroundColor: COLOR.blue,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <FontAwesome5
                        name="suitcase"
                        color={COLOR.white}
                        size={15}
                        style={{ marginLeft: 5 }}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '300',
                          marginLeft: 5,
                          marginTop: 12,
                          height: 30,
                          color: COLOR.white,
                        }}
                      >
                        Baggage Allowance
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '300',
                          marginLeft: 5,
                          color: COLOR.dark,
                        }}
                      >
                        {selItem.fromAirport}
                      </Text>
                      <FontAwesome5
                        name="arrow-right"
                        size={15}
                        style={{ marginLeft: 5, marginTop: 5 }}
                        color={COLOR.grey}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '300',
                          marginLeft: 5,
                          color: COLOR.dark,
                        }}
                      >
                        {selItem.toAirport}
                      </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '300',
                          marginLeft: 5,
                          color: COLOR.dark,
                        }}
                      >
                        Cabin - {selItem.cabinBaggage} - {selItem.baggage}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: COLOR.blue,
                        flexDirection: 'row',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '300',
                          marginLeft: 5,
                          padding: 10,
                          color: COLOR.white,
                        }}
                      >
                        Flight Booking Terms & Conditions
                      </Text>
                    </View>
                    <View>
                      <Text style={{ padding: 10 }}>
                        * This is a booking acknowledgment and not the e ticket.
                        The tickets will be issued shortly and sent to you on a
                        separate email. Please contact us if you do not receive
                        your e tickets within 24 hours. {'\n'}* The passengers
                        assume all responsibilities of procuring travel related
                        documents including passport (minimum 6 months validity
                        from trip completion), VISAs, medical documents, etc.{' '}
                        {'\n'}* Name changes are not permitted once the booking
                        is confirmed. Minor corrections to the spellings may be
                        allowed in some exceptional cases and such corrections
                        will incur a penalty. {'\n'}* Prices do not include any
                        additional fees charged by the airlines for services
                        like baggage, seats, etc. {'\n'}* Fares are not
                        guaranteed until ticketed. Fares are subject to change
                        as per seat or class availability.{'\n'} * The tickets
                        are non-refundable and non-transferable/ endorsable.{' '}
                        {'\n'}* Changes to the itinerary are subject to airline
                        fare rules. {'\n'}* Convenience Fee is non-refundable. *
                        The flights must be used in the booked sequence. If any
                        flight is unused/missed, all the subsequent flights will
                        be cancelled and the amount paid towards such ticket(s)
                        will be forfeited. {'\n'}* Web Check-in is Mandatory
                        (opens 48 hrs. before departure): - Use PNR and last
                        name only. * We recommend to use the traveler's credit
                        card, or else the booking will be considered a third
                        party booking and in such cases the credit card will not
                        be charged until the verification process is completed
                        and you may receive a call to complete the same.
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            <View></View>
          </Animatable.View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginBottom: 60,
            height: 30,
            alignItems: 'flex-end',
            marginRight: 10,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                borderRadius: 0,
                height: 50,
                width: 120,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOR.primary,
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
                {totalAmount} Book
              </Text>
            </TouchableOpacity>
          </View>
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
            height={height / 1.5}
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

export default LeftInBound;
