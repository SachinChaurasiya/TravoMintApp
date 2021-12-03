import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Flag } from 'react-native-svg-flagkit';
import * as Animatable from 'react-native-animatable';
import DateRangePicker from 'rn-select-date-range';
import moment from 'moment';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
// import { useRoute } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';

// color
import COLOR from '../assets/consts/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Flightsearch = ({ route, navigation }) => {
  const [originAirportData, setOriginAirportData] = useState('DEL');
  const [destinationAirportData, setDestinationAirportData] = useState('GOI');
  const [calendarVisible, setCalendarVisible] = useState('');
  const [secondCalendarVisible, setSecondCalendarVisible] = useState('');
  const [ArriveTravelDate, setArriveTravelDate] = useState('');
  // const [Currency, setCurrency] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('INR');

  // Adult Child Infant
  const [AdultNo, setAdultNo] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const [state, setState] = useState({ data: [], loading: false }); // only one data source
  const { data, loading } = state;
  // post Api
  const flightresultfetchApi = () => {
    console.log('Pressed');
    console.log(originAirportData);
    console.log(destinationAirportData);
    console.log(selectedRange.firstDate);
    console.log(selectedRange.secondDate);
    console.log(selectedLanguage);

    const a1 = originAirportData;
    const a2 = destinationAirportData;
    const a3 = selectedRange.firstDate;
    const a4 = selectedRange.secondDate;
    const a8 = selectedLanguage;

    if (a1 && a2 && a3 && a4) {
      if (a1 && a2 && a3 === a4) {
        console.log('lOOP 1');
        navigation.navigate('FlightSearchtwo', {
          originAirportName: a1,
          destinationAirportName: a2,
          departureTravelDate: a3,
          arriveTravelDate: a4,
          selectedLanguage: a8,
        });
      } else {
        console.log('LOOP @');
        navigation.navigate('RoundWaySearchResult', {
          originAirportName: a1,
          destinationAirportName: a2,
          departureTravelDate: a3,
          arriveTravelDate: a4,
          selectedLanguage: a8,
        });
      }
    } else if (a1 && a2 && a3 && !a4) {
      console.log('lOOP 3');
      navigation.navigate('FlightSearchtwo', {
        originAirportName: a1,
        destinationAirportName: a2,
        departureTravelDate: a3,
        selectedLanguage: a8,
      });
    } else {
      console.log('err');
    }
  };

  // get api
  const fetchAPI = () => {
    //setState({data:[], loading: true});
    return fetch(
      'http://34.221.84.222/Flights/GetAirport?authcode=Trav3103s987876&data'
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setState({ data, loading: false }); // set only data
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  const filterdData = originAirportData // based on text, filter data and use filtered data
    ? data.filter((item) => {
        const itemData = item.airportName.toUpperCase();
        const airportCode = item.airportCode.toUpperCase();
        const textData = originAirportData.toUpperCase();
        return (
          itemData.indexOf(textData) > -1, airportCode.indexOf(textData) > -1
        );
      })
    : null; // on on text, u can return all data

  const filterdDatas = destinationAirportData // based on text, filter data and use filtered data
    ? data.filter((item) => {
        const itemDatas = item.airportCode.toUpperCase();
        const textDatas = destinationAirportData.toUpperCase();
        return itemDatas.indexOf(textDatas) > -1;
      })
    : null; // on on text, u can return all data
  // console.log(data);
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

  const [activetab, setActiveTab] = useState('Round Trip');
  // Input text controller
  // const [flyingfromtext, flyingfromText] = React.useState('');
  // const [totext, flyingtoText] = React.useState('');
  // const [flyingdatetext, flyingdateText] = React.useState('');
  // const [returndatetext, returndateText] = React.useState('');
  const [selectedRange, setRange] = React.useState('Date');

  // hide and unhide
  const [isVisible, setIsVisible] = useState(true);
  const [selectedValue, setSelectedValue] = useState('Economy');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibles, setModalVisibles] = useState(false);
  const [FlyingDate, setFlyingDate] = useState(false);

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
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={COLOR.secondary} barStyle="light-content"/> */}
      <View
        style={{
          borderColor: COLOR.blue,
          borderWidth: 1,
          flexDirection: 'row',
          alignSelf: 'flex-end',
          borderRadius: 10,
        }}
      >
        <View style={{ padding: 5 }}>
          <Flag id={'IN'} size={0.1} style={{ borderRadius: 10 }} />
        </View>
        <Picker
          selectedValue={selectedLanguage}
          mode="dropdown"
          dropdownIconRippleColor={COLOR.blue}
          style={{
            width: 130,
            backgroundColor: COLOR.blue,
            height: 30,
            padding: 10,
            color: COLOR.whitesmoke,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="₹-INR" value="INR" />
          <Picker.Item label="$-USD" value="USD" />
          <Picker.Item label="£-GBP" value="GBP" />
          <Picker.Item label="$-AUD" value="AUD" />
          <Picker.Item label="د.إ-AED" value="AED" />
          <Picker.Item label="€-EUR" value="EUR" />
          <Picker.Item label="C$-CAD" value="CAD" />
          {console.log(selectedLanguage)}
        </Picker>
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>Flight Search Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View>
          <View style={styles.btn}>
            <View>
              <Text>
                <HeaderButtons
                  text="Round Trip"
                  onPress={toggleFunction}
                  btncolor={COLOR.primary}
                  textcolor={COLOR.white}
                  activetab={activetab}
                  setActiveTab={setActiveTab}
                />
              </Text>
            </View>
            <View>
              <Text>
                <HeaderButtons
                  text="One Way"
                  onPress={toggleFunctionvisible}
                  btncolor={COLOR.primary}
                  textcolor={COLOR.primary}
                  activetab={activetab}
                  setActiveTab={setActiveTab}
                />
              </Text>
            </View>
          </View>

          {/* INR 
          £-GBP
          $-AUD
          €-EUR
          C$-CAD*/}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text style={styles.title}>Flying From</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Fontisto name="plane" size={18} color={COLOR.primary} />

                    <View>
                      <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        activeOpacity={0.6}
                      >
                        <View>
                          <Text
                            style={[styles.flightDest, { marginTop: 10 }]}
                            numberOfLines={1}
                          >
                            {originAirportData}
                          </Text>
                          {/* <Text style={{color:"black"}}>{route.params.myData}</Text> */}
                        </View>
                      </TouchableOpacity>
                      <View
                        style={{
                          marginLeft: 0,
                          // marginTop:18,
                          width: width - 240,
                          height: 1,
                          backgroundColor: COLOR.grey,
                        }}
                      />
                    </View>

                    {/* modal */}
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          {/* <Text>cnscjbdjcbbkdsddvdvdsdsz</Text> */}
                          <View>
                            {loading === false ? (
                              <View>
                                <TextInput
                                  placeholder="Flying To"
                                  style={[
                                    styles.input,
                                    {
                                      width: width,
                                      paddingHorizontal: 12,
                                    },
                                  ]}
                                  //  onChangeText={flyingfromText}
                                  onChangeText={(originAirportData) =>
                                    setOriginAirportData(originAirportData)
                                  }
                                  value={originAirportData}
                                />
                                <View>
                                  {/* <Text>{originAirportData}</Text> */}
                                  {/* {golist} */}
                                </View>

                                <FlatList
                                  data={filterdData}
                                  vertical={true}
                                  keyExtractor={(item, index) =>
                                    index.toString()
                                  }
                                  ItemSeparatorComponent={itemSeparator}
                                  renderItem={({ item }) => (
                                    <ScrollView>
                                      <View>
                                        <Text
                                          onPress={() => (
                                            setOriginAirportData(
                                              item.airportCode
                                            ),
                                            setModalVisible(!modalVisible)
                                          )}
                                          style={{
                                            marginVertical: 10,
                                            marginLeft: 10,
                                          }}
                                        >{`${item.airportName} (${item.airportCode})`}</Text>
                                      </View>
                                    </ScrollView>
                                  )}
                                  style={{
                                    marginTop: 10,
                                    height: height - 360,
                                  }}
                                />
                              </View>
                            ) : (
                              <Text>loading</Text>
                            )}
                            <Button
                              title="close"
                              onPress={() => setModalVisible(!modalVisible)}
                            />
                          </View>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </View>

                <View>
                  {/* <TextInput
            placeholder="Flying To"
             style={styles.input}
             onChangeText={flyingtoText}
             value={totext}
             underlineColorAndroid="transparent"
            /> */}
                  <Text style={styles.title}>Flying From</Text>
                  <TouchableOpacity onPress={() => setModalVisibles(true)}>
                    <View>
                      <Text
                        style={[styles.flightDest, { marginTop: 10 }]}
                        numberOfLines={1}
                      >
                        {destinationAirportData}
                      </Text>
                      {/* <Text style={{color:"black"}}>{route.params.myData}</Text> */}
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginLeft: 0,
                      // marginTop:18,
                      width: width - 240,
                      height: 1,
                      backgroundColor: COLOR.grey,
                    }}
                  />
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibles}
                    onRequestClose={() => {
                      alert('Modal has been closed.');
                      setModalVisibles(!modalVisibles);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        {/* <Text>cnscjbdjcbbkdsddvdvdsdsz</Text> */}
                        <View>
                          {loading === false ? (
                            <View>
                              <TextInput
                                placeholder="Flying To"
                                style={[
                                  styles.input,
                                  {
                                    width: width,
                                    paddingHorizontal: 12,
                                  },
                                ]}
                                //  onChangeText={flyingfromText}
                                onChangeText={(destinationAirportData) =>
                                  setDestinationAirportData(
                                    destinationAirportData
                                  )
                                }
                                value={destinationAirportData}
                              />

                              <FlatList
                                data={filterdDatas}
                                vertical={true}
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={itemSeparator}
                                renderItem={({ item }) => (
                                  <ScrollView>
                                    <View>
                                      <Text
                                        onPress={() => (
                                          setDestinationAirportData(
                                            item.airportCode
                                          ),
                                          setModalVisibles(!modalVisibles)
                                        )}
                                        style={{
                                          marginVertical: 10,
                                          marginLeft: 10,
                                        }}
                                      >{`${item.airportName} (${item.airportCode})`}</Text>
                                    </View>
                                  </ScrollView>
                                )}
                                style={{
                                  marginTop: 10,
                                  height: height - 360,
                                }}
                              />
                            </View>
                          ) : (
                            <Text>loading</Text>
                          )}
                          <Button
                            title="close"
                            onPress={() => setModalVisibles(!modalVisibles)}
                          />
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}
              >
                <View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <View>
                        {loading === false ? (
                          <View
                            style={
                              {
                                // marginTop: 20,
                                // marginHorizontal: 10,
                              }
                            }
                          >
                            <TouchableOpacity
                              onPress={() => setCalendarVisible(true)}
                              activeOpacity={0.6}
                            >
                              <View
                                style={{
                                  justifyContent: 'space-between',
                                  borderBottomWidth: 1,
                                  borderBottomColor: COLOR.whitesmoke,
                                  width: 155,
                                  marginLeft: 10,
                                }}
                              >
                                <Text style={styles.Text}>Departure</Text>
                                <View style={{ flexDirection: 'row' }}>
                                  <FontAwesome5
                                    name="calendar-alt"
                                    color={COLOR.primary}
                                    size={20}
                                    style={{
                                      marginBottom: 5,
                                    }}
                                  />
                                  <TextInput
                                    onChangeText={(DepartureTravelDate) =>
                                      setOriginAirportData(DepartureTravelDate)
                                    }
                                    value={selectedRange.firstDate}
                                    style={{}}
                                  ></TextInput>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <Text>loading</Text>
                        )}
                        {/* <Button
                                title="Ok"
                                onPress={() => setFlyingDate(!FlyingDate)}
                              /> */}
                      </View>
                      {/* </View>
                        </View>
                      </Modal> */}
                      {isVisible ? (
                        <Animatable.View animation="lightSpeedIn">
                          <View>
                            <TouchableOpacity
                              onPress={() => setSecondCalendarVisible(true)}
                              activeOpacity={0.6}
                            >
                              <View
                                style={{
                                  justifyContent: 'space-between',
                                  borderBottomWidth: 1,
                                  borderBottomColor: COLOR.whitesmoke,
                                  width: 150,
                                  marginLeft: 20,
                                  justifyContent: 'flex-end',
                                }}
                              >
                                <Text style={styles.Text}>Arrive</Text>
                                <View style={{ flexDirection: 'row' }}>
                                  <FontAwesome5
                                    name="calendar-alt"
                                    color={COLOR.primary}
                                    size={20}
                                    style={{
                                      marginBottom: 5,
                                    }}
                                  />
                                  <TextInput
                                    onChangeText={(ArriveTravelDate) =>
                                      setOriginAirportData(ArriveTravelDate)
                                    }
                                    value={selectedRange.secondDate}
                                  ></TextInput>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </Animatable.View>
                      ) : null}
                    </View>
                  </View>

                  {/* --------------------------------------------------------------------------------------------------------- */}
                </View>
              </View>
              <EBFClassbtnfunction />
              <View>
                {/* Adult */}
                <View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: COLOR.blue,
                      }}
                    >
                      Adult(+18)
                    </Text>
                  </View>
                  <View
                    style={{
                      width: width - 50,
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    {/* <Counter /> */}
                    <TouchableOpacity
                      onPress={() => {
                        setAdultNo(1);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 1 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 1 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        1{/* {AdultNo} */}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(2)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 2 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 2 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        2
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(3)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 3 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 3 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        3
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(4)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 4 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 4 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        4
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(5)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 5 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 5 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        5
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setAdultNo(6);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 6 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 6 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        6
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setAdultNo(7);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 7 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 7 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        7
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setAdultNo(8);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 8 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 8 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        8
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(9)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 9 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 9 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        9
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Child */}
                <View>
                  <View>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 10,
                        color: COLOR.blue,
                        // marginLeft: 14,
                      }}
                    >
                      Childern(2-12)
                    </Text>
                  </View>
                  <View
                    style={{
                      width: width - 50,
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    {/* <Counter /> */}
                    <TouchableOpacity
                      onPress={() => {
                        setChild(0);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 0 ? COLOR.primary : COLOR.white,
                            color: child === 0 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        0{/* {AdultNo} */}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setChild(1)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 1 ? COLOR.primary : COLOR.white,
                            color: child === 1 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        1
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setChild(2)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 2 ? COLOR.primary : COLOR.white,
                            color: child === 2 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        2
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setChild(3)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 3 ? COLOR.primary : COLOR.white,
                            color: child === 3 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        3
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setChild(4)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 4 ? COLOR.primary : COLOR.white,
                            color: child === 4 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        4
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setChild(5);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 5 ? COLOR.primary : COLOR.white,
                            color: child === 5 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        5
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setChild(6);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 6 ? COLOR.primary : COLOR.white,
                            color: child === 6 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        6
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setChild(7);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 7 ? COLOR.primary : COLOR.white,
                            color: child === 7 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        7
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setChild(8)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              child === 8 ? COLOR.primary : COLOR.white,
                            color: child === 8 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        8
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* infant */}
                <View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        marginTop: 10,
                        color: COLOR.blue,
                        // marginLeft: 14,
                      }}
                    >
                      Infant(0-2)
                    </Text>
                  </View>
                  <View
                    style={{
                      width: width,
                      flexDirection: 'row',
                      marginLeft: 7,
                      // justifyContent: 'space-evenly',
                    }}
                  >
                    {/* <Counter /> */}
                    <TouchableOpacity
                      onPress={() => {
                        setInfant(0);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              infant === 0 ? COLOR.primary : COLOR.white,
                            color: infant === 0 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        0{/* {AdultNo} */}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setInfant(1)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              infant === 1 ? COLOR.primary : COLOR.white,
                            color: infant === 1 ? COLOR.white : COLOR.dark,
                            marginLeft: 8,
                          },
                        ]}
                      >
                        1
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setInfant(2)}</View>}
                    >
                      {/* <Text style={styles.Adultchildinfant}>2</Text> */}
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              infant === 2 ? COLOR.primary : COLOR.white,
                            color: infant === 2 ? COLOR.white : COLOR.dark,
                            marginLeft: 8,
                          },
                        ]}
                      >
                        2
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setInfant(3)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              infant === 3 ? COLOR.primary : COLOR.white,
                            color: infant === 3 ? COLOR.white : COLOR.dark,
                            marginLeft: 8,
                          },
                        ]}
                      >
                        4
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setInfant(4)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              infant === 4 ? COLOR.primary : COLOR.white,
                            color: infant === 4 ? COLOR.white : COLOR.dark,
                            marginLeft: 8,
                          },
                        ]}
                      >
                        4
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setInfant(5);
                      }}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              infant === 5 ? COLOR.primary : COLOR.white,
                            color: infant === 5 ? COLOR.white : COLOR.dark,
                            marginLeft: 8,
                          },
                        ]}
                      >
                        5
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* Search Button  */}
              <View style={{ marginBottom: 20 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  //   onPress={() => navigation.navigate('FlightSearchtwo')}
                  onPress={() => flightresultfetchApi()}
                >
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 50,
                      backgroundColor: COLOR.blue,
                      borderRadius: 30,
                      marginTop: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: COLOR.white,
                        fontSize: 15,
                        padding: 10,
                        fontWeight: 'bold',
                      }}
                    >
                      Search Flights
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Animatable.View>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={calendarVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
            setCalendarVisible(!calendarVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DateRangePicker
                onSelectDateRange={(range) => {
                  setRange(range);
                }}
                responseFormat="MM/DD/YYYY"
                maxDate={moment().add(90, 'days')}
                minDate={moment().subtract(90, 'days')}
                selectedDateContainerStyle={styles.selectedDateContainerStyle}
                selectedDateStyle={styles.selectedDateStyle}
              />
              <TouchableOpacity
                onPress={() => setCalendarVisible(!calendarVisible)}
              >
                <View
                  style={{
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: COLOR.primary,
                    backgroundColor: COLOR.primary,
                    width: 80,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      padding: 10,
                      marginLeft: 12,
                      color: COLOR.white,
                    }}
                  >
                    Done
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={secondCalendarVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
            setSecondCalendarVisible(!secondCalendarVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DateRangePicker
                onSelectDateRange={(range) => {
                  setRange(range);
                }}
                responseFormat="MM/DD/YYYY"
                maxDate={moment().add(90, 'days')}
                minDate={moment().subtract(90, 'days')}
                selectedDateContainerStyle={styles.selectedDateContainerStyle}
                selectedDateStyle={styles.selectedDateStyle}
              />
              <TouchableOpacity
                onPress={() => setSecondCalendarVisible(!secondCalendarVisible)}
              >
                <View
                  style={{
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: COLOR.primary,
                    backgroundColor: COLOR.primary,
                    width: 80,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      padding: 10,
                      marginLeft: 12,
                      color: COLOR.white,
                    }}
                  >
                    Done
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
            props.activetab === props.text ? COLOR.blue : COLOR.white,
          borderRadius: 30,
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
        onPressIn={() => {
          props.setActiveTab(props.text);
        }}
        onPress={props.onPress}
        // onPress={()=>ffFun()}
      >
        <Text
          style={{
            color: props.activetab === props.text ? COLOR.white : COLOR.blue,
            fontSize: 15,
            fontWeight: '900',
          }}
        >
          {props.text}
        </Text>
        {/* <Button style={{color: props.activetab === props.text?COLOR.white:COLOR.secondary,fontSize:15,fontWeight:'900'}} title={props.text}/> */}
      </TouchableOpacity>
    </View>
  );
};

import { increment, decrement } from '../Components/Reducer';
const Counter = () => {
  const { counter } = useSelector((state) => state?.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <View style={styles.SignDiv}>
        <View>
          <TouchableOpacity onPress={() => dispatch(decrement())}>
            <Text style={styles.DecrementSign}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 13, marginLeft: 15, width: 24 }}>
            {counter}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch(increment())}>
            <Text style={styles.IncrementSign}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const EBFClassbtnfunction = () => {
  const [activetab, setActiveTab] = useState('Economy');

  return (
    <View>
      <View style={{ width: width / 1.1, marginTop: 5 }}>
        <View style={[styles.btn, { marginTop: 15 }]}>
          <View style={{ borderRightWidth: 0.2, borderRadius: 20 }}>
            <Text>
              <EBFClassbtn
                text="Economy"
                btncolor={COLOR.blue}
                textcolor="white"
                activetab={activetab}
                setActiveTab={setActiveTab}
              />
            </Text>
          </View>
          <View style={{ borderRightWidth: 0.2, borderRadius: 20 }}>
            <Text>
              <EBFClassbtn
                text="Premium"
                btncolor={COLOR.blue}
                textcolor={COLOR.white}
                activetab={activetab}
                setActiveTab={setActiveTab}
              />
            </Text>
          </View>
          <View style={{ borderRightWidth: 0.2, borderRadius: 20 }}>
            <Text>
              <EBFClassbtn
                text="Business"
                btncolor={COLOR.white}
                textcolor={COLOR.blue}
                activetab={activetab}
                setActiveTab={setActiveTab}
              />
            </Text>
          </View>
          <View>
            <Text>
              <EBFClassbtn
                text="First"
                btncolor={COLOR.blue}
                textcolor={COLOR.dark}
                activetab={activetab}
                setActiveTab={setActiveTab}
              />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const EBFClassbtn = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor:
            props.activetab === props.text ? COLOR.blue : COLOR.white,
          borderRadius: 30,
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
        onPress={() => props.setActiveTab(props.text)}
      >
        <Text
          style={{
            color: props.activetab === props.text ? COLOR.white : COLOR.blue,
            fontSize: 11.5,
            fontWeight: '900',
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  flightpage: {
    flex: 1,
    marginTop: 100,
    backgroundColor: COLOR.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  SignDiv: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR.secondary,
    alignItems: 'center',
    height: 30,
    width: 80,
    marginLeft: 5,
    borderRadius: 10,
  },
  IncrementSign: {
    fontSize: 25,
    paddingLeft: 1,
    color: COLOR.secondary,
  },
  DecrementSign: {
    fontSize: 25,
    paddingLeft: 10,
    color: COLOR.secondary,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  btn: {
    flexDirection: 'row',
    alignSelf: 'center',
    // padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLOR.grey,
    borderRadius: 30,
  },
  input: {
    width: width - 230,
    height: 40,
    // borderWidth: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.grey,
  },
  title: {
    color: COLOR.primary,
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 20,
  },
  adultNo: {
    borderWidth: 2,
    alignItems: 'center',
    borderColor: COLOR.primary,
    paddingHorizontal: 5,
    marginRight: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  AddNo: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.primary,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  flightDest: {
    marginLeft: 5,
    marginBottom: 10,
    width: 160,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 210,
    backgroundColor: COLOR.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  modalView: {
    marginVertical: 20,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  Adultchildinfant: {
    borderWidth: 0.5,
    borderColor: COLOR.grey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  Text: {
    color: COLOR.primary,
    fontWeight: 'bold',
    marginTop: 15,
  },
  // Adultchildinfanttouch: {
  //   borderWidth: 0.5,
  //   borderColor: COLOR.secondary,
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   borderRadius: 5,
  //   fontSize: 13,
  //   fontWeight: 'bold',
  // },
});

export default Flightsearch;
