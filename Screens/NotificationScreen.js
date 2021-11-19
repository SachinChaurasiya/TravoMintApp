// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import {
//     View,
//     Text,
//     Dimensions,
//     StyleSheet,
//     Image,
//     ScrollView,
// } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import COLOR from '../assets/consts/colors';

// const Width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// const Separator = () => <View style={styles.separator} />;

// const NotificationScreen = () => {
//     return (
//         <>
//             <View style={{ backgroundColor: COLOR.white, flex: 1 }}>
//                 {/* <StatusBar backgroundColor={COLOR.secondary}/> */}
//                 <ScrollView>
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             backgroundColor: COLOR.primary,
//                             borderRadius: 10,
//                             marginTop: 10,
//                             marginHorizontal: 10,
//                         }}
//                     >
//                         <View style={styles.Logo}>
//                             <View>
//                                 {/* <Image
//                   source={require('../assets/Image/logoT.png')}
//                   style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
//                 /> */}
//                                 <Text style={{ color: COLOR.primary }}>
//                                     Flights
//                                 </Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text
//                                 style={{
//                                     marginTop: 20,
//                                     color: COLOR.white,
//                                     fontWeight: 'bold',
//                                     marginLeft: 5,
//                                 }}
//                             >
//                                 Flat 100 OFF On Domestic Flight
//                             </Text>
//                             <View
//                                 style={{
//                                     flexDirection: 'row',
//                                     justifyContent: 'space-between',
//                                 }}
//                             >
//                                 <View>
//                                     <Text
//                                         style={{
//                                             marginLeft: 5,
//                                             color: COLOR.white,
//                                         }}
//                                     >
//                                         Flat 100 OFF Discount For New User only
//                                     </Text>
//                                 </View>

//                                 <View style={{ marginLeft: 5 }}>
//                                     <FontAwesome5
//                                         name="chevron-right"
//                                         color={COLOR.white}
//                                         size={18}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <Separator />

//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             backgroundColor: COLOR.primary,
//                             borderRadius: 10,
//                             marginTop: 10,
//                             marginHorizontal: 10,
//                         }}
//                     >
//                         <View style={styles.Logo}>
//                             <View>
//                                 {/* <Image
//                   source={require('../assets/Image/logoT.png')}
//                   style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
//                 /> */}
//                                 <Text style={{ color: COLOR.primary }}>
//                                     Flights
//                                 </Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text
//                                 style={{
//                                     marginTop: 20,
//                                     color: COLOR.white,
//                                     fontWeight: 'bold',
//                                     marginLeft: 5,
//                                 }}
//                             >
//                                 Flat 100 OFF On Domestic Flight
//                             </Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <View>
//                                     <Text
//                                         style={{
//                                             marginLeft: 5,
//                                             color: COLOR.white,
//                                         }}
//                                     >
//                                         Flat 100 OFF Discount For New User only
//                                     </Text>
//                                 </View>

//                                 <View style={{ marginLeft: 5 }}>
//                                     <FontAwesome5
//                                         name="chevron-right"
//                                         color={COLOR.white}
//                                         size={18}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <Separator />

//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             backgroundColor: COLOR.primary,
//                             borderRadius: 10,
//                             marginTop: 10,
//                             marginHorizontal: 10,
//                         }}
//                     >
//                         <View style={styles.Logo}>
//                             <View>
//                                 {/* <Image
//                   source={require('../assets/Image/logoT.png')}
//                   style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
//                 /> */}
//                                 <Text style={{ color: COLOR.primary }}>
//                                     Flights
//                                 </Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text
//                                 style={{
//                                     marginTop: 20,
//                                     color: COLOR.white,
//                                     fontWeight: 'bold',
//                                     marginLeft: 5,
//                                 }}
//                             >
//                                 Flat 100 OFF On Domestic Flight
//                             </Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <View>
//                                     <Text
//                                         style={{
//                                             marginLeft: 5,
//                                             color: COLOR.white,
//                                         }}
//                                     >
//                                         Flat 100 OFF Discount For New User only
//                                     </Text>
//                                 </View>

//                                 <View style={{ marginLeft: 5 }}>
//                                     <FontAwesome5
//                                         name="chevron-right"
//                                         color={COLOR.white}
//                                         size={18}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <Separator />

//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             backgroundColor: COLOR.primary,
//                             borderRadius: 10,
//                             marginTop: 10,
//                             marginHorizontal: 10,
//                         }}
//                     >
//                         <View style={styles.Logo}>
//                             <View>
//                                 {/* <Image
//                   source={require('../assets/Image/logoT.png')}
//                   style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
//                 /> */}
//                                 <Text style={{ color: COLOR.primary }}>
//                                     Flights
//                                 </Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text
//                                 style={{
//                                     marginTop: 20,
//                                     color: COLOR.white,
//                                     fontWeight: 'bold',
//                                     marginLeft: 5,
//                                 }}
//                             >
//                                 Flat 100 OFF On Domestic Flight
//                             </Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <View>
//                                     <Text
//                                         style={{
//                                             marginLeft: 5,
//                                             color: COLOR.white,
//                                         }}
//                                     >
//                                         Flat 100 OFF Discount For New User only
//                                     </Text>
//                                 </View>

//                                 <View style={{ marginLeft: 5 }}>
//                                     <FontAwesome5
//                                         name="chevron-right"
//                                         color={COLOR.white}
//                                         size={18}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <Separator />

//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             backgroundColor: COLOR.primary,
//                             borderRadius: 10,
//                             marginTop: 10,
//                             marginHorizontal: 10,
//                         }}
//                     >
//                         <View style={styles.Logo}>
//                             <View>
//                                 {/* <Image
//                   source={require('../assets/Image/logoT.png')}
//                   style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
//                 /> */}
//                                 <Text style={{ color: COLOR.primary }}>
//                                     Flights
//                                 </Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text
//                                 style={{
//                                     marginTop: 20,
//                                     color: COLOR.white,
//                                     fontWeight: 'bold',
//                                     marginLeft: 5,
//                                 }}
//                             >
//                                 Flat 100 OFF On Domestic Flight
//                             </Text>

//                             <View style={{ flexDirection: 'row' }}>
//                                 <View>
//                                     <Text
//                                         style={{
//                                             marginLeft: 5,
//                                             color: COLOR.white,
//                                         }}
//                                     >
//                                         Flat 100 OFF Discount For New User only
//                                     </Text>
//                                 </View>

//                                 <View style={{ marginLeft: 5 }}>
//                                     <FontAwesome5
//                                         name="chevron-right"
//                                         color={COLOR.white}
//                                         size={18}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <Separator />

//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             backgroundColor: COLOR.primary,
//                             borderRadius: 10,
//                             marginTop: 10,
//                             marginHorizontal: 10,
//                         }}
//                     >
//                         <View style={styles.Logo}>
//                             <View>
//                                 {/* <Image
//                   source={require('../assets/Image/logoT.png')}
//                   style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
//                 /> */}
//                                 <Text style={{ color: COLOR.primary }}>
//                                     Flights
//                                 </Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text
//                                 style={{
//                                     marginTop: 20,
//                                     color: COLOR.white,
//                                     fontWeight: 'bold',
//                                     marginLeft: 5,
//                                 }}
//                             >
//                                 Flat 100 OFF On Domestic Flight
//                             </Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <View>
//                                     <Text
//                                         style={{
//                                             marginLeft: 5,
//                                             color: COLOR.white,
//                                         }}
//                                     >
//                                         Flat 100 OFF Discount For New User only
//                                     </Text>
//                                 </View>

//                                 <View style={{ marginLeft: 5 }}>
//                                     <FontAwesome5
//                                         name="chevron-right"
//                                         color={COLOR.white}
//                                         size={18}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                     <Separator />
//                 </ScrollView>
//             </View>
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     NotifyDiv: {},
//     Logo: {
//         width: 50,
//         margin: 10,
//         height: 50,
//         borderRadius: 50,
//         justifyContent: 'center',
//         borderWidth: 1,
//         borderColor: COLOR.grey,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: COLOR.white,
//     },
//     separator: {
//         marginVertical: 8,
//         borderBottomColor: COLOR.primary,
//         borderBottomWidth: StyleSheet.hairlineWidth,
//     },
// });

// export default NotificationScreen;

import React, { useState, useMemo } from 'react';
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
} from 'react-native';
import { Button } from 'react-native-paper';
import FlightData from '../FlightData';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Moment from 'moment';
import COLOR from '../assets/consts/colors';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const NotificationScreen = (props) => {
  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  const BookDetails = (props) => {
    //   console.log(props.inBound);
    //   setApiData(props);
    return (
      <View>
        {console.log(props.inBound[0].fromAirport)}
        <Text>{props.inBound[0].fromAirport}</Text>
      </View>
    );
  };

  const Flight = ({ Flight }) => {
    const [apiData, setApiData] = useState(Flight);

    // useMemo(Flight)
    const navigation = useNavigation();

    var count = Object.keys(Flight.inBound).length;

    var round = Flight.fare.grandTotal;
    round = round.toFixed(2);
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState({
      name: Moment(Flight.inBound[0].depDate.split('T')[0]),
    });

    const [activetab, setActiveTab] = useState('Go to');

    const [check, setCheck] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const toggleFunction = (props) => {
      {
        !isVisible ? setIsVisible(!isVisible) : setIsVisible(isVisible);
      }
    };
    const toggleFunctionvisible = (props) => {
      {
        !isVisible ? setIsVisible(isVisible) : setIsVisible(!isVisible);
      }
    };

    return (
      <View>
        <View style={styles.btn}>
          <View>
            <Text>
              <HeaderButtons
                text="Go to"
                onPress={toggleFunction}
                btncolor="#f15b2f"
                textcolor="white"
                activetab={activetab}
                setActiveTab={setActiveTab}
              />
            </Text>
          </View>
          <View>
            <Text>
              <HeaderButtons
                text="Return"
                onPress={toggleFunctionvisible}
                btncolor="white"
                textcolor="#195fb9"
                activetab={activetab}
                setActiveTab={setActiveTab}
              />
            </Text>
          </View>
        </View>
        <View>
          <View>
            {isVisible ? (
              <Animatable.View
                animation="lightSpeedIn"
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <View style={styles.card}>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: 4,
                        fontWeight: 'bold',
                      }}
                    >
                      {Flight.inBound[0].fromAirport}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 2,
                      }}
                    >
                      {Flight.inBound[0].depDate.split('T')[1].substring(0, 5)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 1,
                      }}
                    >
                      {/* {Flight.inBound[0].depDate.split("T")[0]}   */}
                      {/* {date.name.format('DD-MM-YYYY')} */}
                    </Text>
                  </View>
                </View>
                <View style={styles.icon}>
                  <Image
                    source={require('../assets/Image/INDIGO.png')}
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'contain',
                      marginLeft: 10,
                    }}
                  />
                  {/* <FontAwesome5
                                    name="plane" 
                                    style= {{marginLeft:14}}
                                    color="#f15b2f"
                                    size={24} />  */}
                  <View style={styles.iconText}>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 5,
                        fontWeight: 'bold',
                      }}
                    >
                      {' '}
                      <ConvertMinsToTime data={Flight.inBound[0].eft} />
                    </Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 2,
                      }}
                    >
                      {Flight.outBound[0].fromAirport}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 2,
                      }}
                    >
                      {Flight.inBound[0].reachDate
                        .split('T')[1]
                        .substring(0, 5)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}
                    >
                      {/* {Flight.inBound[0].depDate.split("T")[0]} */}
                      {/* {date.name.format('DD-MM-YYYY')} */}
                    </Text>
                  </View>
                </View>
              </Animatable.View>
            ) : (
              <FlatList
                data={Flight.outBound}
                renderItem={({ item }) => (
                  <Animatable.View animation="lightSpeedIn">
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            marginLeft: 4,
                            fontWeight: 'bold',
                            marginTop: 15,
                          }}
                        >
                          {item.fromAirport}
                        </Text>
                        <Text style={styles.Time}>
                          {item.depDate.split('T')[1].substring(0, 5)}
                        </Text>
                      </View>

                      <View style={styles.icon}>
                        <View>
                          <Image
                            source={require('../assets/Image/INDIGO.png')}
                            style={{
                              width: 40,
                              height: 40,
                              resizeMode: 'contain',
                              marginLeft: 10,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.Duration}>
                            <ConvertMinsToTime data={item.eft} />
                          </Text>
                        </View>
                      </View>

                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            marginLeft: 4,
                            fontWeight: 'bold',
                            marginTop: 15,
                          }}
                        >
                          {item.toAirport}
                        </Text>
                        <Text style={styles.Time}>
                          {item.reachDate.split('T')[1].substring(0, 5)}
                        </Text>
                      </View>
                    </View>
                  </Animatable.View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            )}

            {/* Refundable */}
            <View style={styles.refundableDiv}>
              <View style={styles.shadowContainerStyle}>
                <View style={styles.InsideRefundable}>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 22,
                        }}
                      >
                        ₹{round}
                      </Text>
                    </View>

                    <View>
                      <Text>
                        ({count}
                        -Stop)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <View>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            marginBottom: 20,
                          }}
                        >
                          Refundable
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <CheckBox
                        // center
                        checked={check}
                        checkedColor={COLOR.primary}
                        onPress={() => setCheck(!check)}
                        // onPressIn={() => setApiData(Flight)}
                        onPressIn={() => setApiData(Flight)}
                      />
                      {/* <BookDetails/> */}
                    </View>
                    {check ? (
                      <View
                        style={{
                          position: 'absolute',
                          width: width,
                          justifyContent: 'flex-end',
                          bottom: 65,
                          left: 160,
                        }}
                      >
                        <Button
                          style={{
                            width: 100,
                          }}
                          color={COLOR.primary}
                          mode="contained"
                          onPress={() => navigation.navigate('Book')}
                        >
                          Book
                        </Button>
                      </View>
                    ) : null}

                    {check ? (
                      <View
                        style={{
                          position: 'absolute',
                          flex: 1,
                          height: height / 2 / 2,
                          top: -180,
                          flexDirection: 'row',
                        }}
                      >
                        <Text style={{ fontWeight: 'bold' }}>
                          {apiData.inBound[0].fromAirport}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            position: 'absolute',
                            right: -250,
                          }}
                        >
                          {apiData.inBound[0].toAirport}
                        </Text>
                      </View>
                    ) : null}

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginBottom: 20,
                        }}
                      >
                        <Text
                          style={{
                            marginTop: 10,
                            fontWeight: 'bold',
                          }}
                        >
                          Details
                        </Text>
                        <FontAwesome5
                          style={{
                            marginTop: 10,
                          }}
                          name="info-circle"
                          size={20}
                          color={COLOR.primary}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View
                      style={[
                        styles.modalView,
                        {
                          marginTop: 240,
                        },
                      ]}
                    >
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                          style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            marginVertical: 5,
                            marginHorizontal: 20,
                          }}
                        >
                          <FontAwesome5
                            name="times-circle"
                            color={COLOR.primary}
                            size={25}
                            onPress={() => setModalVisible(!modalVisible)}
                          />
                        </View>
                        <View>
                          <View
                            style={{
                              alignItems: 'center',
                            }}
                          >
                            <Text style={styles.modalText}>Flight Details</Text>
                            <View
                              style={{
                                width: 200,
                                height: 1,
                                marginBottom: 10,
                                backgroundColor: COLOR.primary,
                                //  marginLeft:80
                              }}
                            ></View>
                          </View>
                          <View
                            style={{
                              justifyContent: 'space-around',
                              flexDirection: 'row',
                            }}
                          >
                            <View
                              style={{
                                margin: 10,
                                width: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: COLOR.primary,
                              }}
                            >
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  padding: 10,
                                  fontSize: 15,
                                }}
                              >
                                New Delhi-Goa
                              </Text>
                            </View>

                            <View
                              style={{
                                margin: 10,
                                width: 150,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: COLOR.primary,
                              }}
                            >
                              <Text
                                style={{
                                  fontWeight: 'bold',
                                  padding: 10,
                                  fontSize: 15,
                                }}
                              >
                                Fri ,12th November
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View></View>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: COLOR.primary,
                            borderRadius: 5,
                            margin: 5,
                          }}
                        >
                          <Text
                            style={{
                              padding: 10,
                            }}
                          >
                            The baggage information is just for reference.
                            Please Check with airline before check-in. For more
                            information, visit the airline's official website.
                          </Text>
                        </View>
                        <View></View>

                        <FlatList
                          data={Flight.inBound}
                          renderItem={({ item }) => (
                            <View>
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginTop: 10,
                                }}
                              >
                                <Image
                                  source={require('../assets/Image/INDIGO.png')}
                                  style={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'contain',
                                  }}
                                />
                              </View>

                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginTop: 10,
                                }}
                              >
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Indigo , SG985
                                </Text>
                                <Text>Operated By Indigo</Text>
                              </View>
                              <View
                                style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginTop: 5,
                                }}
                              >
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Check-In Baggage
                                </Text>
                                <Text>{item.baggage} Per Person</Text>
                              </View>
                              <View
                                style={{
                                  marginTop: 5,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                  }}
                                >
                                  Cabin Baggage
                                </Text>
                                <Text>{item.cabinBaggage} Per Person</Text>
                              </View>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'space-between',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <View
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontSize: 15,
                                      fontWeight: 'bold',
                                      marginTop: 10,
                                    }}
                                  >
                                    {' '}
                                    ({item.fromAirport})
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: 15,
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    {item.depDate.split('T')[1].substring(0, 5)}
                                  </Text>
                                </View>

                                {/* 
                        <View style = {styles.icon}>
                         <View>
                           <Text style = {styles.Duration}><ConvertMinsToTime data = {item.eft}/></Text>
                         </View>
                       </View> */}

                                <View>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      marginTop: 5,
                                      justifyContent: 'space-between',
                                      backgroundColor: 'whitesmoke',
                                    }}
                                  >
                                    <View
                                      style={{
                                        width: 160,
                                        marginTop: 11,
                                        height: 2,
                                        backgroundColor: COLOR.primary,
                                      }}
                                    ></View>
                                    <View>
                                      <FontAwesome5
                                        style={{
                                          marginLeft: 20,
                                        }}
                                        name="plane"
                                        size={24}
                                        color={COLOR.primary}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        width: 170,
                                        height: 2,
                                        marginTop: 11,
                                        backgroundColor: COLOR.primary,
                                        marginLeft: 15,
                                      }}
                                    ></View>
                                  </View>
                                </View>

                                <View>
                                  <Text
                                    style={{
                                      fontSize: 15,
                                      fontWeight: 'bold',
                                      marginTop: 10,
                                    }}
                                  >
                                    ({item.toAirport})
                                  </Text>
                                  <Text style={styles.Time}>
                                    {item.reachDate
                                      .split('T')[1]
                                      .substring(0, 5)}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          )}
                          keyExtractor={(item, index) => index.toString()}
                        />

                        <View>
                          <FlatList
                            data={Flight.outBound}
                            renderItem={({ item }) => (
                              <View>
                                <View
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                  }}
                                >
                                  <Image
                                    source={require('../assets/Image/INDIGO.png')}
                                    style={{
                                      width: 40,
                                      height: 40,
                                      resizeMode: 'contain',
                                    }}
                                  />
                                </View>

                                <View
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    Indigo , SG985
                                  </Text>
                                  <Text>Operated By Indigo</Text>
                                </View>
                                <View
                                  style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 5,
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    Check-In Baggage
                                  </Text>
                                  <Text>{item.baggage} Per Person</Text>
                                </View>
                                <View
                                  style={{
                                    marginTop: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    Cabin Baggage
                                  </Text>
                                  <Text>{item.cabinBaggage} Per Person</Text>
                                </View>
                                <View
                                  style={{
                                    flex: 1,
                                    justifyContent: 'space-between',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}
                                >
                                  <View
                                    style={{
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                      }}
                                    >
                                      {' '}
                                      ({item.fromAirport})
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                      }}
                                    >
                                      {item.depDate
                                        .split('T')[1]
                                        .substring(0, 5)}
                                    </Text>
                                  </View>

                                  {/* 
                        <View style = {styles.icon}>
                         <View>
                           <Text style = {styles.Duration}><ConvertMinsToTime data = {item.eft}/></Text>
                         </View>
                       </View> */}

                                  <View>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        marginTop: 5,
                                        justifyContent: 'space-between',
                                        backgroundColor: 'whitesmoke',
                                      }}
                                    >
                                      <View
                                        style={{
                                          width: 160,
                                          marginTop: 11,
                                          height: 2,
                                          backgroundColor: COLOR.primary,
                                        }}
                                      ></View>
                                      <View>
                                        <FontAwesome5
                                          style={{
                                            marginLeft: 20,
                                          }}
                                          name="plane"
                                          size={24}
                                          color={COLOR.primary}
                                        />
                                      </View>
                                      <View
                                        style={{
                                          width: 170,
                                          height: 2,
                                          marginTop: 11,
                                          backgroundColor: COLOR.primary,
                                          marginLeft: 15,
                                        }}
                                      ></View>
                                    </View>
                                  </View>

                                  <View>
                                    <Text
                                      style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                      }}
                                    >
                                      ({item.toAirport})
                                    </Text>
                                    <Text style={styles.Time}>
                                      {item.reachDate
                                        .split('T')[1]
                                        .substring(0, 5)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const HeaderButtons = (props) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            backgroundColor:
              props.activetab === props.text ? '#f15b2f' : 'white',
            borderRadius: 30,
            paddingVertical: 6,
            paddingHorizontal: 16,
          }}
          onPressIn={() => props.setActiveTab(props.text)}
          onPress={props.onPress}
        >
          <Text
            style={{
              color: props.activetab === props.text ? 'white' : '#000',
              fontSize: 15,
              fontWeight: '900',
            }}
          >
            {props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View>
          {/* <RoundOneWayBtn {...props} /> */}
          {/* <View style= {styles.btn}>
            <View>
            <Text><HeaderButtons 
            text="Go to"
            btncolor="#f15b2f" 
            textcolor="white"
            activetab={activetab}
            setActiveTab={setActiveTab}
           /></Text>
            </View>
            <View>
            <Text>
              <HeaderButtons
             text="Return" 
             btncolor="white" 
             textcolor="#195fb9"
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View>  */}
          <View>
            <FlatList
              data={FlightData.flightResult}
              renderItem={({ item }) => (
                <>
                  <Flight
                    Flight={item}
                    BookDetails={item.inBound}
                    inBound={item.inBound}
                    Bound={item.inBound}
                    airline={item.airline}
                  />
                </>
              )}
              ItemSeparatorComponent={(props) => {
                return (
                  <View
                    style={{
                      height: 1,
                      marginVertical: 10,
                      marginHorizontal: 5,
                      backgroundColor: props.highlighted
                        ? 'green'
                        : 'rgb(199, 199, 204)',
                    }}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.header}>
            <Text>Flight Result</Text>
            <Text>Flight Result</Text>
            <Text>Flight Result</Text>
            <Text>Flight Result</Text>
            <Text>Flight Result</Text>
            <Text>Flight Result</Text>
            <Text>Flight Result</Text>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f15b2f',
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
    // flexDirection:"row",
    justifyContent: 'flex-start',
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
    backgroundColor: 'whitesmoke',
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
    paddingHorizontal: 10,
    paddingVertical: 10,
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

export default NotificationScreen;
