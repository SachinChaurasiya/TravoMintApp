// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   Modal,
//   Image,
//   Alert,
//   TouchableOpacity,
//   Pressable,
// } from 'react-native';
// import BottomSheet from 'reanimated-bottom-sheet';
// import { Button } from 'react-native-paper';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import * as Animatable from 'react-native-animatable';
// import Moment from 'moment';
// import COLOR from '../assets/consts/colors';
// import { CheckBox } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';
// import INDIGO from '../assets/Image/INDIGO.png';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

// const RoundWaySearchResult = ({ route, navigation }) => {
//   const [datapass, setDatapass] = useState({});

//   const {
//     originAirportName,
//     destinationAirportName,
//     departureTravelDate,
//     arriveTravelDate,
//   } = route.params;

//   // postApi
//   const flightresultfetchApi = () => {
//     console.log('Pressed');
//     console.log(originAirportName);
//     console.log(destinationAirportName);
//     console.log(departureTravelDate);
//     // console.log(arriveTravelDate);

//     const a1 = originAirportName;
//     const a2 = destinationAirportName;
//     const a3 = departureTravelDate;
//     // const a4 = arriveTravelDate;

//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     var raw = JSON.stringify({
//       searchID: '0fgg48ux7h6421l',
//       client: 2,
//       segment: [
//         {
//           originAirport: a1,
//           destinationAirport: a2,
//           travelDate: a3,
//         },
//         // {
//         //   originAirport: a2,
//         //   destinationAirport: a1,
//         //   travelDate: a4,
//         // },
//       ],
//       searchDirectFlight: false,
//       flexibleSearch: false,
//       tripType: 1,
//       adults: 2,
//       child: 1,
//       infants: 1,
//       infantsWs: 0,
//       cabinType: 1,
//       airline: 'All',
//       currencyCode: 'INR',
//       siteId: 6,
//       source: 'online',
//       media: 'online',
//       sID: '',
//       rID: '',
//       locale: 'en',
//       isNearBy: false,
//       limit: 300,
//       pageValue: 'search',
//       userIP: '0:0:0:0:0:0:0:1',
//       serverIP: '',
//       device: 'Desktop',
//       browser: 'WINDOWS_10',
//       userCountry: 'US',
//       userSearch: true,
//     });

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };

//     fetch(
//       'http://stest2.hunterwave.com/Flights/GetFlightResult?authcode=Trav3103s987876',
//       requestOptions
//     )
//       .then((response) => response.json())
//       // .then((result) => console.log(result))
//       .then((result) => setDatapass(result))
//       .catch((error) => console.log('error', error));
//   };

//   useEffect(() => {
//     flightresultfetchApi();
//   }, []);
//   console.log('No' + datapass);

//   // -----------------------------------------------------------------------------------------------

//   const ConvertMinsToTime = ({ data }) => {
//     let hours = Math.floor(data / 60);
//     let minutes = data % 60;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     return `${hours}h:${minutes}m`;
//   };

//   // const [modalVisible, setModalVisible] = useState(false);
//   // const flightdeatils = (Flight) => {
//   //   return (
//   //     <View
//   //       style={{
//   //         flex: 1,
//   //         backgroundColor: COLOR.primary,
//   //         height: 500,
//   //         width: width,
//   //       }}
//   //     >
//   //       <Text>{console.log('Sachin')}</Text>
//   //       <Text>{console.log(Flight.fare.grandTotal)}</Text>
//   //       <Text>{Flight.fare.grandTotal}</Text>
//   //     </View>
//   //   );
//   // };

//   const Flight = ({ Flight }) => {
//     let uri = `https://www.travomint.com/resources/images/airline-logo/${Flight.airline}.png`;
//     // console.log(uri);

//     var round = Flight.fare.grandTotal;
//     round = round.toFixed(2);
//     return (
//       <View style={{ flexDirection: 'row', width: width - 200 }}>
//         {/* {console.log('Lenfth' + Flight.outBound.length)} */}
//         <View style={{ width: width / 2 }}>
//           {Flight.outBound.length !== undefined &&
//             Flight.outBound.map((item, index) => (
//               <TouchableOpacity
//                 activeOpacity={0.6}
//                 onPress={() =>
//                   navigation.navigate('Book', { flightdata: datapass })
//                 }
//                 // onPress={() => setModalVisible(true)}
//               >
//                 <View
//                   style={{
//                     flex: 1,
//                     width: width / 2,
//                     borderWidth: 1,
//                     // borderRadius: 10,
//                     borderOpacity: 0.4,
//                     borderColor: COLOR.grey,
//                     // marginHorizontal: 10,
//                   }}
//                 >
//                   <View>
//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 10,
//                           marginLeft: 10,
//                           opacity: 0.7,
//                           marginTop: 10,
//                         }}
//                       >
//                         {item.airlineName} {item.flightID} {item.flightNo}
//                       </Text>
//                     </View>
//                   </View>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                       justifyContent: 'space-evenly',
//                       padding: 15,
//                     }}
//                   >
//                     <View>
//                       <Image
//                         source={{ uri: uri }}
//                         style={{ width: 15, height: 15, marginRight: 10 }}
//                       />
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       <View>
//                         {/* <Text>15:40</Text> */}
//                         <Text style={{ fontSize: 7 }}>
//                           {item.depDate.split('T')[1].substring(0, 5)}
//                         </Text>
//                       </View>
//                       <View>
//                         <Text style={{ fontSize: 7 }}>{item.fromAirport}</Text>
//                       </View>
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <View>
//                         {/* <Text>2h:20m</Text> */}
//                         <Text style={{ fontSize: 11 }}>
//                           <ConvertMinsToTime data={item.eft} />
//                         </Text>
//                       </View>
//                       <View
//                         style={{
//                           height: 1,
//                           width: 60,
//                           backgroundColor: '#ccc',
//                         }}
//                       />
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       <View>
//                         <Text style={{ fontSize: 7 }}>
//                           {' '}
//                           {item.reachDate.split('T')[1].substring(0, 5)}
//                         </Text>
//                         {/* <Text>20:40</Text> */}
//                       </View>
//                       <View>
//                         <Text style={{ fontSize: 7 }}>{item.toAirport}</Text>
//                       </View>
//                     </View>
//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           fontWeight: 'bold',
//                           marginLeft: 10,
//                         }}
//                       >
//                         {/* ${Flight.fare.grandTotal} */}₹{round}
//                       </Text>
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>

//               // <View key={item.key}>
//               //   <Text>
//               //     {console.log(index)}
//               //     {/* {console.log(item.toAirport, item.fromAirport)} */}
//               //   </Text>
//               //   <Text>{item.flightID}</Text>
//               //   <Text>{item.fromAirport}</Text>
//               //   <Text>{item.toAirport}</Text>
//               //   <Text>{item.airline}</Text>
//               //   <Text>{Flight.fare.grandTotal}</Text>
//               // </View>
//             ))}
//         </View>
//         <View style={{ width: width / 2 }}>
//           {Flight.outBound.length !== undefined &&
//             Flight.outBound.map((item, index) => (
//               <TouchableOpacity
//                 activeOpacity={0.6}
//                 onPress={() =>
//                   navigation.navigate('Book', { flightdata: datapass })
//                 }
//                 // onPress={() => setModalVisible(true)}
//               >
//                 <View
//                   style={{
//                     flex: 1,
//                     width: width / 2,
//                     borderWidth: 1,
//                     // borderRadius: 10,
//                     borderOpacity: 0.4,
//                     borderColor: COLOR.grey,
//                     // marginHorizontal: 10,
//                   }}
//                 >
//                   <View>
//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 10,
//                           marginLeft: 10,
//                           opacity: 0.7,
//                           marginTop: 10,
//                         }}
//                       >
//                         {item.airlineName} {item.flightID} {item.flightNo}
//                       </Text>
//                     </View>
//                   </View>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                       padding: 15,
//                     }}
//                   >
//                     <View>
//                       <Image
//                         source={{ uri: uri }}
//                         style={{ width: 15, height: 15, marginRight: 10 }}
//                       />
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       <View>
//                         {/* <Text>15:40</Text> */}
//                         <Text style={{ fontSize: 9 }}>
//                           {item.depDate.split('T')[1].substring(0, 5)}
//                         </Text>
//                       </View>
//                       <View>
//                         <Text style={{ fontSize: 9 }}>{item.fromAirport}</Text>
//                       </View>
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                       }}
//                     >
//                       <View>
//                         {/* <Text>2h:20m</Text> */}
//                         <Text style={{ fontSize: 8 }}>
//                           <ConvertMinsToTime data={item.eft} />
//                         </Text>
//                       </View>
//                       <View
//                         style={{
//                           height: 0.6,
//                           width: 30,
//                           backgroundColor: '#ccc',
//                         }}
//                       />
//                     </View>
//                     <View
//                       style={{
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       <View>
//                         <Text style={{ fontSize: 9 }}>
//                           {' '}
//                           {item.reachDate.split('T')[1].substring(0, 5)}
//                         </Text>
//                         {/* <Text>20:40</Text> */}
//                       </View>
//                       <View>
//                         <Text style={{ fontSize: 9 }}>{item.toAirport}</Text>
//                       </View>
//                     </View>
//                     <View>
//                       <Text
//                         style={{
//                           fontSize: 14,
//                           fontWeight: 'bold',
//                           marginLeft: 10,
//                         }}
//                       >
//                         {/* ${Flight.fare.grandTotal} */}₹{round}
//                       </Text>
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>

//               // <View key={item.key}>
//               //   <Text>
//               //     {console.log(index)}
//               //     {/* {console.log(item.toAirport, item.fromAirport)} */}
//               //   </Text>
//               //   <Text>{item.flightID}</Text>
//               //   <Text>{item.fromAirport}</Text>
//               //   <Text>{item.toAirport}</Text>
//               //   <Text>{item.airline}</Text>
//               //   <Text>{Flight.fare.grandTotal}</Text>
//               // </View>
//             ))}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <>
//       <View style={styles.container}>
//         <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//           <View>
//             <View>
//               <FlatList
//                 data={datapass.flightResult}
//                 renderItem={({ item }) => <Flight Flight={item} />}
//                 //   // numColumns={2}
//                 keyExtractor={(item, index) => index.toString()}
//                 showsVerticalScrollIndicator={false}
//               />
//             </View>
//           </View>
//         </Animatable.View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f15b2f',
//   },
//   // contentDiv:{
//   //     flex:1,
//   //     backgroundColor:'white',
//   //     marginTop:150,
//   //     borderTopLeftRadius:30,
//   //     borderTopRightRadius:30
//   // },
//   header: {
//     flex: 2,
//     position: 'absolute',
//     bottom: 0,
//     backgroundColor: '#fff',
//     width: width,
//     borderWidth: 1,
//     borderTopColor: COLOR.secondary,
//     borderBottomColor: COLOR.white,
//     borderLeftColor: COLOR.white,
//     borderRightColor: COLOR.white,
//     // justifyContent: 'flex-end',
//     // top:100
//   },
//   btn: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     borderWidth: 1,
//     borderColor: '#f15b2f',
//     borderRadius: 30,
//     marginBottom: 10,
//   },
//   card: {
//     marginTop: 10,
//   },
//   icon: {
//     // marginTop:18,
//     justifyContent: 'center',
//   },
//   refundableDiv: {
//     // elevation:1,
//     marginTop: 10,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconText: {
//     justifyContent: 'center',
//   },
//   shadowContainerStyle: {
//     borderWidth: 1,
//     borderColor: COLOR.primary,
//     width: 290,
//     borderRadius: 10,
//     height: 100,
//   },
//   InsideRefundable: {
//     margin: 10,
//     borderRadius: 20,
//     shadowOpacity: 10,
//     shadowColor: '#ccc',
//     shadowRadius: 20,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     marginTop: 10,
//   },
//   modalView: {
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     backgroundColor: 'red',
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 5,
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   footer: {
//     flex: Platform.OS === 'ios' ? 0 : 0,
//     backgroundColor: '#fff',
//     // paddingHorizontal: 10,
//     // paddingVertical: 10,
//     // marginTop:150
//   },
//   Time: {
//     fontWeight: 'bold',
//     marginLeft: 2,
//   },
//   Duration: {
//     fontSize: 14,
//     marginLeft: 5,
//     fontWeight: 'bold',
//   },
// });

// export default RoundWaySearchResult;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LeftInBound from '../Components/RoundWaySearchResult/LeftInBound';
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
    adultNo,
    childNo,
    infantNo,
  } = route.params;
  // const {
  //   originAirportName,
  //   destinationAirportName,
  //   departureTravelDate,
  //   arriveTravelDate,
  // } = route.params;

  // postApi
  const flightresultfetchApi = () => {
    console.log('Pressed');
    console.log(originAirportName);
    console.log(destinationAirportName);
    console.log(departureTravelDate);
    console.log(arriveTravelDate);
    console.log(adultNo);
    console.log(childNo);
    console.log(infantNo);

    const a1 = originAirportName;
    const a2 = destinationAirportName;
    const a3 = departureTravelDate;
    const a4 = arriveTravelDate;
    const a5 = adultNo;
    const a6 = childNo;
    const a7 = infantNo;

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
        {
          originAirport: a2,
          destinationAirport: a1,
          travelDate: a4,
        },
      ],
      searchDirectFlight: false,
      flexibleSearch: false,
      tripType: 2,
      adults: a5,
      child: a6,
      infants: a7,
      infantsWs: 0,
      cabinType: 1,
      airline: 'All',
      currencyCode: 'INR',
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
      setDatapass(FlightData);
    }, 2000);
  }, []);

  const sortListASC = () => {
    datapass.fare.sort((obj1, obj2) => {
      return obj1.grandTotal - obj2.grandTotal;
    });

    setDatapass([...datapass]); // update
  };

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

          opacity: 0.5,
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
  //console.log('No' + datapass);
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
        <LeftInBound data={datapass} />
        <View style={{ width: 1 }}></View>
        <RightOutBound data={datapass} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Roundwaysearchresult;
