import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LeftInBoundOneWay from '../Components/RoundWaySearchResult/LeftInBoundOneWay';
import RightOutBound from '../Components/RoundWaySearchResult/RightOutBound';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DummyFlightData from '../FlightData';
import LottieView from 'lottie-react-native';
import FlightData from '../RoundWayData';
import COLORS from '../assets/consts/colors';
const Roundwaysearchresult = ({ route, navigation }) => {
  const [isloading, setIsloading] = useState(true);
  const [datapass, setDatapass] = useState({});

  const {
    originAirportName,
    destinationAirportName,
    departureTravelDate,
    arriveTravelDate,
    values,
    AdultNo,
    child,
    infant,
    selectedLanguage,
  } = route.params;

  // postApi
  const flightresultfetchApi = () => {
    console.log('Pressed');
    console.log(originAirportName);
    console.log(destinationAirportName);
    console.log(departureTravelDate);
    console.log(arriveTravelDate);
    console.log(values);
    console.log(AdultNo);
    console.log(child);
    console.log(infant);
    console.log(selectedLanguage);

    const a1 = originAirportName;
    const a2 = destinationAirportName;
    const a3 = departureTravelDate;
    const a4 = arriveTravelDate;
    const a5 = values;
    const a6 = AdultNo;
    const a7 = child;
    const a8 = infant;
    const a9 = selectedLanguage;

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      searchID: '0fgg48ux7h6421l',
      client: 2,
      segment: [
        {
          originAirport: a1,
          destinationAirport: a2,
          travelDate: a3,
        },
      ],
      searchDirectFlight: false,
      flexibleSearch: false,
      tripType: 1,
      adults: a6,
      child: a7,
      infants: a8,
      infantsWs: 0,
      cabinType: a5,
      airline: 'All',
      currencyCode: a9,
      siteId: 6,
      source: 'online',
      media: 'online',
      sID: '',
      rID: '',
      locale: 'en',
      isNearBy: false,
      limit: 300,
      pageValue: 'search',
      userIP: '0:0:0:0:0:0:0:1',
      serverIP: '',
      device: 'Desktop',
      browser: 'WINDOWS_10',
      userCountry: 'US',
      userSearch: true,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    //console.log('requestOptions--', requestOptions);

    fetch(
      'http://api.traveloes.com/Flights/GetFlightResult?authcode=Trav3103s987876',
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setDatapass(result))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 8000);
    flightresultfetchApi();
  }, []);

  console.log(datapass);

  // const sortListASC = () => {
  //   datapass.fare.sort((obj1, obj2) => {
  //     return obj1.grandTotal - obj2.grandTotal;
  //   });

  //   setDatapass([...datapass]); // update
  // };

  const sortListToal = () => {
    alert('clicked');
    // let cloneObj = datapass;
    // // console.log(datapass);
    // cloneObj.flightResult.filter((obj1) => {
    //   // console.log(obj1.resultID);
    //   return obj1.resultID == '2';
    // });
    // setDatapass([]);
  };

  if (isloading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        {/* <ActivityIndicator size="large" color="#000" /> */}
        <LottieView
          source={require('../9932-flight-ticket.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
  console.log('No' + datapass);
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
        <TouchableOpacity onPress={sortListToal}>
          <View>
            <MaterialIcons name="filter-list" color="#000" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('In Progress')}>
          <View>
            <MaterialIcons name="sort-by-alpha" color="#000" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <LeftInBoundOneWay data={datapass} language={selectedLanguage} />
        <View style={{ width: 1 }}></View>
        {/* <RightOutBound data={datapass} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Roundwaysearchresult;
