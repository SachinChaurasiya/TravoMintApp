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
// import { Button } from 'react-native-paper';
// import FlightData from '../FlightData';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import * as Animatable from 'react-native-animatable';
// import Moment from 'moment';
// import COLOR from '../assets/consts/colors';
// import { CheckBox } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;




// const FlightSearchtwo = ({route}) => {
//   const [datapass, setDatapass] = useState({});
//  const {
//    originAirportName,
//    destinationAirportName,
//    departureTravelDate,
//    arriveTravelDate,
//  } = route.params;

//   // postApi
// const flightresultfetchApi = () => {


//   console.log('Pressed');
//   console.log(originAirportName);
//   console.log(destinationAirportName);
//   console.log(departureTravelDate);
//   console.log(arriveTravelDate);

//   const a1 = originAirportName;
//   const a2 = destinationAirportName;
//   const a3 = departureTravelDate;
//   const a4 = arriveTravelDate;

//   var myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'application/json');

//   var raw = JSON.stringify({
//     searchID: '0fgg48ux7h6421l',
//     client: 2,
//     segment: [
//       {
//         originAirport: a1,
//         destinationAirport: a2,
//         travelDate: a3,
//       },
//       {
//         originAirport: a2,
//         destinationAirport: a1,
//         travelDate: a4,
//       },
//     ],
//     searchDirectFlight: false,
//     flexibleSearch: false,
//     tripType: 2,
//     adults: 2,
//     child: 1,
//     infants: 1,
//     infantsWs: 0,
//     cabinType: 1,
//     airline: 'All',
//     currencyCode: 'CAD',
//     siteId: 6,
//     source: 'online',
//     media: 'online',
//     sID: '',
//     rID: '',
//     locale: 'en',
//     isNearBy: false,
//     limit: 300,
//     pageValue: 'search',
//     userIP: '0:0:0:0:0:0:0:1',
//     serverIP: '',
//     device: 'Desktop',
//     browser: 'WINDOWS_10',
//     userCountry: 'US',
//     userSearch: true,
//   });

//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow',
//   };

//   fetch(
//     'http://stest2.hunterwave.com/Flights/GetFlightResult?authcode=Trav3103s987876',
//     requestOptions
//   )
//     .then((response) => response.json())
//     // .then((result) => console.log(result))
//     .then((result) => setDatapass(result))
//     .catch((error) => console.log('error', error));
// };

//  useEffect(() => {
//    flightresultfetchApi();
//  }, []);
// console.log('No' + datapass);

// // -----------------------------------------------------------------------------------------------




//   const ConvertMinsToTime = ({ data }) => {
//     let hours = Math.floor(data / 60);
//     let minutes = data % 60;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     return `${hours}h:${minutes}m`;
//   };

//   // const BookDetails = (props) => {
//   //   //   console.log(props.inBound);
//   //   //   setApiData(props);
//   //   return (
//   //     <View>
//   //       {console.log(props.inBound[0].fromAirport)}
//   //       <Text>{props.inBound[0].fromAirport}</Text>
//   //     </View>
//   //   );
//   // };

//   const Flight = ({ Flight}) =>{
//     const [activetab, setActiveTab] = useState('Go to');
//      const [isVisible, setIsVisible] = useState(true);
//      const toggleFunction = (props) => {
//        {
//          !isVisible ? setIsVisible(!isVisible) : setIsVisible(isVisible);
//        }
//      };
//      const toggleFunctionvisible = (props) => {
//        {
//          !isVisible ? setIsVisible(isVisible) : setIsVisible(!isVisible);
//        }
//      };
//     return (
//       <View>
//         <View style={styles.btn}>
//           <View>
//             <Text>
//               <HeaderButtons
//                 text="Go to"
//                 onPress={toggleFunction}
//                 btncolor="#f15b2f"
//                 textcolor="white"
//                 activetab={activetab}
//                 setActiveTab={setActiveTab}
//               />
//             </Text>
//           </View>
//           <View>
//             <Text>
//               <HeaderButtons
//                 text="Return"
//                 onPress={toggleFunctionvisible}
//                 btncolor="white"
//                 textcolor="#195fb9"
//                 activetab={activetab}
//                 setActiveTab={setActiveTab}
//               />
//             </Text>
//           </View>
//         </View>
//         {/* Card */}
//         <View>
//           {isVisible ? (
//             <Animatable.View
//               animation="lightSpeedIn"
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//               }}
//             >
//               <View style={styles.card}>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 15,
//                       marginLeft: 4,
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {/* {Flight.inBound.fromAirport} */}
//                     {/* {Flight.inBound.map((item) =>
//                       console.log(item.fromAirport)
//                     )} */}
//                     {console.log('Lenfth' + Flight.inBound.length)}
//                     {Flight.inBound.length !== undefined &&
//                       Flight.inBound.map((item) =>
//                         console.log(item.fromAirport)
//                       )}
//                   </Text>
//                   <Text
//                     style={{
//                       fontWeight: 'bold',
//                       marginLeft: 2,
//                     }}
//                   >
//                     {/* {Flight.inBound.depDate.split('T')[1].substring(0, 5)} */}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontWeight: 'bold',
//                       marginLeft: 1,
//                     }}
//                   >
//                     {/* {Flight.inBound[0].depDate.split("T")[0]}   */}
//                     {/* {date.name.format('DD-MM-YYYY')} */}
//                   </Text>
//                 </View>
//               </View>
//               <View style={styles.icon}>
//                 <Image
//                   source={require('../assets/Image/INDIGO.png')}
//                   style={{
//                     width: 40,
//                     height: 40,
//                     resizeMode: 'contain',
//                     marginLeft: 10,
//                   }}
//                 />
//                 {/* <FontAwesome5
//                                   name="plane"
//                                   style= {{marginLeft:14}}
//                                   color="#f15b2f"
//                                   size={24} />  */}
//                 <View style={styles.iconText}>
//                   <Text
//                     style={{
//                       fontSize: 14,
//                       marginLeft: 5,
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {' '}
//                     {/* <ConvertMinsToTime
//                       data={Flight.inBound[0].eft}
//                     /> */}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.card}>
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 15,
//                       fontWeight: 'bold',
//                       marginLeft: 2,
//                     }}
//                   >
//                     {/* {Flight.outBound[0].fromAirport} */}
//                   </Text>
//                   <Text
//                     style={{
//                       fontWeight: 'bold',
//                       marginLeft: 2,
//                     }}
//                   >
//                     {/* {Flight.inBound[0].reachDate.split('T')[1].substring(0, 5)} */}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {/* {Flight.inBound[0].depDate.split("T")[0]} */}
//                     {/* {date.name.format('DD-MM-YYYY')} */}
//                   </Text>
//                 </View>
//               </View>
//             </Animatable.View>
//           ) : null}
//         </View>
//         <Text>Sachin</Text>
//         <Text>{Flight.resultID}</Text>
//       </View>
//     );
//   }

//   // const Flight = ({ Flight }) => {
//   //   // const [apiData, setApiData] = useState(FlightData);
//   //   const [CheckboxDataVisible, setCheckboxDataVisible] = useState(false);

//   //   // useMemo(Flight)
//   //   const navigation = useNavigation();

//   //   // var count = Object.keys(Flight.inBound).length;

//   //   var round = Flight.fare.grandTotal;
//   //   round = round.toFixed(2);
//   //   const [modalVisible, setModalVisible] = useState(false);
//   //   const [date, setDate] = useState({
//   //     name: Moment(Flight.inBound[0].depDate.split('T')[0]),
//   //   });

//   //   const [activetab, setActiveTab] = useState('Go to');

//   //   const [check, setCheck] = useState(false);

//   //   const [isVisible, setIsVisible] = useState(true);
//   //   const toggleFunction = (props) => {
//   //     {
//   //       !isVisible ? setIsVisible(!isVisible) : setIsVisible(isVisible);
//   //     }
//   //   };
//   //   const toggleFunctionvisible = (props) => {
//   //     {
//   //       !isVisible ? setIsVisible(isVisible) : setIsVisible(!isVisible);
//   //     }
//   //   };

//   //   return (
//   //     <View>
//   //       <View style={styles.btn}>
//   //         <View>
//   //           <Text>
//   //             <HeaderButtons
//   //               text="Go to"
//   //               onPress={toggleFunction}
//   //               btncolor="#f15b2f"
//   //               textcolor="white"
//   //               activetab={activetab}
//   //               setActiveTab={setActiveTab}
//   //             />
//   //           </Text>
//   //         </View>
//   //         <View>
//   //           <Text>
//   //             <HeaderButtons
//   //               text="Return"
//   //               onPress={toggleFunctionvisible}
//   //               btncolor="white"
//   //               textcolor="#195fb9"
//   //               activetab={activetab}
//   //               setActiveTab={setActiveTab}
//   //             />
//   //           </Text>
//   //         </View>
//   //       </View>
//   //       <View>
//   //         <View>
//   //           {isVisible ? (
//   //             <Animatable.View
//   //               animation="lightSpeedIn"
//   //               style={{
//   //                 flexDirection: 'row',
//   //                 justifyContent: 'space-around',
//   //               }}
//   //             >
//   //               <View style={styles.card}>
//   //                 <View>
//   //                   <Text
//   //                     style={{
//   //                       fontSize: 15,
//   //                       marginLeft: 4,
//   //                       fontWeight: 'bold',
//   //                     }}
//   //                   >
//   //                     {Flight.inBound[0].fromAirport}
//   //                   </Text>
//   //                   <Text
//   //                     style={{
//   //                       fontWeight: 'bold',
//   //                       marginLeft: 2,
//   //                     }}
//   //                   >
//   //                     {Flight.inBound[0].depDate
//   //                       .split('T')[1]
//   //                       .substring(0, 5)}
//   //                   </Text>
//   //                 </View>
//   //                 <View
//   //                   style={{
//   //                     flexDirection: 'row',
//   //                   }}
//   //                 >
//   //                   <Text
//   //                     style={{
//   //                       fontWeight: 'bold',
//   //                       marginLeft: 1,
//   //                     }}
//   //                   >
//   //                     {/* {Flight.inBound[0].depDate.split("T")[0]}   */}
//   //                     {/* {date.name.format('DD-MM-YYYY')} */}
//   //                   </Text>
//   //                 </View>
//   //               </View>
//   //               <View style={styles.icon}>
//   //                 <Image
//   //                   source={require('../assets/Image/INDIGO.png')}
//   //                   style={{
//   //                     width: 40,
//   //                     height: 40,
//   //                     resizeMode: 'contain',
//   //                     marginLeft: 10,
//   //                   }}
//   //                 />
//   //                 {/* <FontAwesome5
//   //                                   name="plane" 
//   //                                   style= {{marginLeft:14}}
//   //                                   color="#f15b2f"
//   //                                   size={24} />  */}
//   //                 <View style={styles.iconText}>
//   //                   <Text
//   //                     style={{
//   //                       fontSize: 14,
//   //                       marginLeft: 5,
//   //                       fontWeight: 'bold',
//   //                     }}
//   //                   >
//   //                     {' '}
//   //                     <ConvertMinsToTime
//   //                       data={Flight.inBound[0].eft}
//   //                     />
//   //                   </Text>
//   //                 </View>
//   //               </View>

//   //               <View style={styles.card}>
//   //                 <View>
//   //                   <Text
//   //                     style={{
//   //                       fontSize: 15,
//   //                       fontWeight: 'bold',
//   //                       marginLeft: 2,
//   //                     }}
//   //                   >
//   //                     {Flight.outBound[0].fromAirport}
//   //                   </Text>
//   //                   <Text
//   //                     style={{
//   //                       fontWeight: 'bold',
//   //                       marginLeft: 2,
//   //                     }}
//   //                   >
//   //                     {Flight.inBound[0].reachDate
//   //                       .split('T')[1]
//   //                       .substring(0, 5)}
//   //                   </Text>
//   //                 </View>
//   //                 <View
//   //                   style={{
//   //                     flexDirection: 'row',
//   //                   }}
//   //                 >
//   //                   <Text
//   //                     style={{
//   //                       fontWeight: 'bold',
//   //                     }}
//   //                   >
//   //                     {/* {Flight.inBound[0].depDate.split("T")[0]} */}
//   //                     {/* {date.name.format('DD-MM-YYYY')} */}
//   //                   </Text>
//   //                 </View>
//   //               </View>
//   //             </Animatable.View>
//   //           ) : (
//   //             // <FlatList
//   //             //   data={Flight.outBound}
//   //             //   renderItem={({ item }) => (
//   //             //     <Animatable.View animation="lightSpeedIn">
//   //             //       <View
//   //             //         style={{
//   //             //           flex: 1,
//   //             //           flexDirection: 'row',
//   //             //           justifyContent: 'space-around',
//   //             //         }}
//   //             //       >
//   //             //         <View>
//   //             //           <Text
//   //             //             style={{
//   //             //               fontSize: 15,
//   //             //               marginLeft: 4,
//   //             //               fontWeight: 'bold',
//   //             //               marginTop: 15,
//   //             //             }}
//   //             //           >
//   //             //             {item.fromAirport}
//   //             //           </Text>
//   //             //           <Text style={styles.Time}>
//   //             //             {item.depDate.split('T')[1].substring(0, 5)}
//   //             //           </Text>
//   //             //         </View>

//   //             //         <View style={styles.icon}>
//   //             //           <View>
//   //             //             <Image
//   //             //               source={require('../assets/Image/INDIGO.png')}
//   //             //               style={{
//   //             //                 width: 40,
//   //             //                 height: 40,
//   //             //                 resizeMode: 'contain',
//   //             //                 marginLeft: 10,
//   //             //               }}
//   //             //             />
//   //             //           </View>
//   //             //           <View>
//   //             //             <Text style={styles.Duration}>
//   //             //               <ConvertMinsToTime data={item.eft} />
//   //             //             </Text>
//   //             //           </View>
//   //             //         </View>

//   //             //         <View>
//   //             //           <Text
//   //             //             style={{
//   //             //               fontSize: 15,
//   //             //               marginLeft: 4,
//   //             //               fontWeight: 'bold',
//   //             //               marginTop: 15,
//   //             //             }}
//   //             //           >
//   //             //             {item.toAirport}
//   //             //           </Text>
//   //             //           <Text style={styles.Time}>
//   //             //             {item.reachDate.split('T')[1].substring(0, 5)}
//   //             //           </Text>
//   //             //         </View>
//   //             //       </View>
//   //             //     </Animatable.View>
//   //             //   )}
//   //             //   keyExtractor={(item, index) => index.toString()}
//   //             // />
//   //             <Text>OutBond</Text>
//   //           )}

//   //           {/* Refundable */}
//   //           <View style={styles.refundableDiv}>
//   //             <View style={styles.shadowContainerStyle}>
//   //               <View style={styles.InsideRefundable}>
//   //                 <View
//   //                   style={{
//   //                     flexDirection: 'column',
//   //                     justifyContent: 'space-between',
//   //                   }}
//   //                 >
//   //                   <View>
//   //                     <Text
//   //                       style={{
//   //                         fontWeight: 'bold',
//   //                         fontSize: 22,
//   //                       }}
//   //                     >
//   //                       ₹{round}
//   //                     </Text>
//   //                   </View>

//   //                   <View>
//   //                     <Text>
//   //                       ({count}
//   //                       -Stop)
//   //                     </Text>
//   //                   </View>
//   //                 </View>
//   //                 <View
//   //                   style={{
//   //                     flexDirection: 'row',
//   //                     justifyContent: 'space-between',
//   //                     alignItems: 'flex-end',
//   //                   }}
//   //                 >
//   //                   <View>
//   //                     <TouchableOpacity>
//   //                       <Text
//   //                         style={{
//   //                           fontWeight: 'bold',
//   //                           marginBottom: 20,
//   //                         }}
//   //                       >
//   //                         Refundable
//   //                       </Text>
//   //                     </TouchableOpacity>
//   //                   </View>

//   //                   <View>
//   //                     <CheckBox
//   //                       // center
//   //                       checked={check}
//   //                       checkedColor={COLOR.primary}
//   //                       onPress={() => setCheck(!check)}
//   //                       // onPressIn={() => setApiData(Flight)}
//   //                       onPressOut={() => setCheckboxDataVisible(true)}
//   //                       onPressIn={() => setApiData(Flight)}
//   //                     />
//   //                     {/* <BookDetails/> */}
//   //                   </View>
//   //                   {/* {check ? (
//   //                     <Modal
//   //                       animationType="slide"
//   //                       transparent={true}
//   //                       visible={CheckboxDataVisible}
//   //                       onRequestClose={() => {
//   //                         Alert.alert('Modal has been closed.');
//   //                         setCheckboxDataVisible(!CheckboxDataVisible);
//   //                       }}
//   //                     >
//   //                       <View style={styles.header}>
//   //                         <View
//   //                           style={{
//   //                             flexDirection: 'row',
//   //                             justifyContent: 'space-evenly',
//   //                           }}
//   //                         >
//   //                           <View
//   //                             style={{
//   //                               flexDirection: 'row',
//   //                               justifyContent: 'space-evenly',
//   //                               alignItems: 'center',
//   //                             }}
//   //                           >
//   //                             <View style={{ alignItems: 'center' }}>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 12,
//   //                                 }}
//   //                               >
//   //                                 {`${apiData.inBound[0].fromAirport} - ${apiData.inBound[0].toAirport} `}
//   //                               </Text>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 12,
//   //                                 }}
//   //                               >
//   //                                 {apiData.inBound[0].depDate
//   //                                   .split('T')[1]
//   //                                   .substring(0, 5)}
//   //                                 -
//   //                                 {apiData.inBound[0].reachDate
//   //                                   .split('T')[1]
//   //                                   .substring(0, 5)}
//   //                               </Text>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 12,
//   //                                 }}
//   //                               >
//   //                                 <ConvertMinsToTime
//   //                                   data={apiData.inBound[0].eft}
//   //                                 />
//   //                               </Text>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 10,
//   //                                 }}
//   //                               >
//   //                                 Indigo
//   //                               </Text>
//   //                             </View>
//   //                             <View style={{ marginLeft: 20 }}>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 20,
//   //                                 }}
//   //                               >
//   //                                 {apiData.fare.grandTotal}
//   //                               </Text>
//   //                             </View>
//   //                           </View>
//   //                           <View
//   //                             style={{
//   //                               width: 1,
//   //                               height: height / 10,
//   //                               backgroundColor: '#000',
//   //                             }}
//   //                           />
//   //                           <View
//   //                             style={{
//   //                               flexDirection: 'row',
//   //                               justifyContent: 'space-evenly',
//   //                               alignItems: 'center',
//   //                             }}
//   //                           >
//   //                             <View style={{ alignItems: 'center' }}>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 12,
//   //                                 }}
//   //                               >
//   //                                 {`${apiData.inBound[0].toAirport} - ${apiData.inBound[0].fromAirport} `}
//   //                               </Text>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 12,
//   //                                 }}
//   //                               >
//   //                                 {apiData.outBound[0].depDate
//   //                                   .split('T')[1]
//   //                                   .substring(0, 5)}
//   //                                 -
//   //                                 {apiData.outBound[0].reachDate
//   //                                   .split('T')[1]
//   //                                   .substring(0, 5)}
//   //                               </Text>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 12,
//   //                                 }}
//   //                               >
//   //                                 <ConvertMinsToTime
//   //                                   data={apiData.outBound[0].eft}
//   //                                 />
//   //                               </Text>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 10,
//   //                                 }}
//   //                               >
//   //                                 Indigo
//   //                               </Text>
//   //                             </View>
//   //                             <View style={{ marginLeft: 20 }}>
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                   fontSize: 20,
//   //                                 }}
//   //                               >
//   //                                 {apiData.fare.grandTotal}
//   //                               </Text>
//   //                             </View>
//   //                           </View>
//   //                         </View>
//   //                         <View
//   //                           style={{
//   //                             backgroundColor: COLOR.secondary,
//   //                             alignSelf: 'center',
//   //                             borderRadius: 30,
//   //                             flexDirection: 'row',
//   //                           }}
//   //                         >
//   //                           <Pressable
//   //                             onPress={() =>
//   //                               setCheckboxDataVisible(!CheckboxDataVisible)
//   //                             }
//   //                             onPressIn={() => setCheck(!check)}
//   //                           >
//   //                             <Text style={{ padding: 10, color: COLOR.white }}>
//   //                               Cancel
//   //                             </Text>
//   //                           </Pressable>
//   //                           <Pressable
//   //                             onPress={() =>
//   //                               navigation.navigate('Book', { apiData })
//   //                             }
//   //                           >
//   //                             <Text style={{ padding: 10, color: COLOR.white }}>
//   //                               BookNow
//   //                             </Text>
//   //                           </Pressable>
//   //                         </View>
//   //                       </View>
//   //                     </Modal>
//   //                   ) : null} */}

//   //                   {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
//   //                     <View
//   //                       style={{
//   //                         flexDirection: 'row',
//   //                         marginBottom: 20,
//   //                       }}
//   //                     >
//   //                       <Text
//   //                         style={{
//   //                           marginTop: 10,
//   //                           fontWeight: 'bold',
//   //                         }}
//   //                       >
//   //                         Details
//   //                       </Text>
//   //                       <FontAwesome5
//   //                         style={{
//   //                           marginTop: 10,
//   //                         }}
//   //                         name="info-circle"
//   //                         size={20}
//   //                         color={COLOR.primary}
//   //                       />
//   //                     </View>
//   //                   </TouchableOpacity> */}
//   //                 </View>
//   //               </View>
//   //             </View>
//   //           </View>
//   //           <View>
//   //             <View>
//   //               {/* <Modal
//   //                 animationType="slide"
//   //                 transparent={true}
//   //                 visible={modalVisible}
//   //                 onRequestClose={() => {
//   //                   Alert.alert('Modal has been closed.');
//   //                   setModalVisible(!modalVisible);
//   //                 }}
//   //               >
//   //                 <View style={styles.centeredView}>
//   //                   <View
//   //                     style={[
//   //                       styles.modalView,
//   //                       {
//   //                         marginTop: 240,
//   //                       },
//   //                     ]}
//   //                   >
//   //                     <ScrollView showsVerticalScrollIndicator={false}>
//   //                       <View
//   //                         style={{
//   //                           justifyContent: 'flex-end',
//   //                           alignItems: 'flex-end',
//   //                           marginVertical: 5,
//   //                           marginHorizontal: 20,
//   //                         }}
//   //                       >
//   //                         <FontAwesome5
//   //                           name="times-circle"
//   //                           color={COLOR.primary}
//   //                           size={25}
//   //                           onPress={() => setModalVisible(!modalVisible)}
//   //                         />
//   //                       </View>
//   //                       <View>
//   //                         <View
//   //                           style={{
//   //                             alignItems: 'center',
//   //                           }}
//   //                         >
//   //                           <Text style={styles.modalText}>Flight Details</Text>
//   //                           <View
//   //                             style={{
//   //                               width: 200,
//   //                               height: 1,
//   //                               marginBottom: 10,
//   //                               backgroundColor: COLOR.primary,
//   //                             }}
//   //                           ></View>
//   //                         </View>
//   //                         <View
//   //                           style={{
//   //                             justifyContent: 'space-around',
//   //                             flexDirection: 'row',
//   //                           }}
//   //                         >
//   //                           <View
//   //                             style={{
//   //                               margin: 10,
//   //                               width: 150,
//   //                               borderRadius: 10,
//   //                               borderWidth: 1,
//   //                               borderColor: COLOR.primary,
//   //                             }}
//   //                           >
//   //                             <Text
//   //                               style={{
//   //                                 fontWeight: 'bold',
//   //                                 padding: 10,
//   //                                 fontSize: 15,
//   //                               }}
//   //                             >
//   //                               New Delhi-Goa
//   //                             </Text>
//   //                           </View>

//   //                           <View
//   //                             style={{
//   //                               margin: 10,
//   //                               width: 150,
//   //                               borderRadius: 10,
//   //                               borderWidth: 1,
//   //                               borderColor: COLOR.primary,
//   //                             }}
//   //                           >
//   //                             <Text
//   //                               style={{
//   //                                 fontWeight: 'bold',
//   //                                 padding: 10,
//   //                                 fontSize: 15,
//   //                               }}
//   //                             >
//   //                               Fri ,12th November
//   //                             </Text>
//   //                           </View>
//   //                         </View>
//   //                       </View>
//   //                       <View></View>
//   //                       <View
//   //                         style={{
//   //                           borderWidth: 1,
//   //                           borderColor: COLOR.primary,
//   //                           borderRadius: 5,
//   //                           margin: 5,
//   //                         }}
//   //                       >
//   //                         <Text
//   //                           style={{
//   //                             padding: 10,
//   //                           }}
//   //                         >
//   //                           The baggage information is just for reference.
//   //                           Please Check with airline before check-in. For more
//   //                           information, visit the airline's official website.
//   //                         </Text>
//   //                       </View>
//   //                       <View></View>

//   //                       <FlatList
//   //                         data={Flight.inBound}
//   //                         renderItem={({ item }) => (
//   //                           <View>
//   //                             <View
//   //                               style={{
//   //                                 justifyContent: 'center',
//   //                                 alignItems: 'center',
//   //                                 marginTop: 10,
//   //                               }}
//   //                             >
//   //                               <Image
//   //                                 source={require('../assets/Image/INDIGO.png')}
//   //                                 style={{
//   //                                   width: 40,
//   //                                   height: 40,
//   //                                   resizeMode: 'contain',
//   //                                 }}
//   //                               />
//   //                             </View>

//   //                             <View
//   //                               style={{
//   //                                 justifyContent: 'center',
//   //                                 alignItems: 'center',
//   //                                 marginTop: 10,
//   //                               }}
//   //                             >
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                 }}
//   //                               >
//   //                                 Indigo , SG985
//   //                               </Text>
//   //                               <Text>Operated By Indigo</Text>
//   //                             </View>
//   //                             <View
//   //                               style={{
//   //                                 justifyContent: 'center',
//   //                                 alignItems: 'center',
//   //                                 marginTop: 5,
//   //                               }}
//   //                             >
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                 }}
//   //                               >
//   //                                 Check-In Baggage
//   //                               </Text>
//   //                               <Text>{item.baggage} Per Person</Text>
//   //                             </View>
//   //                             <View
//   //                               style={{
//   //                                 marginTop: 5,
//   //                                 justifyContent: 'center',
//   //                                 alignItems: 'center',
//   //                               }}
//   //                             >
//   //                               <Text
//   //                                 style={{
//   //                                   fontWeight: 'bold',
//   //                                 }}
//   //                               >
//   //                                 Cabin Baggage
//   //                               </Text>
//   //                               <Text>{item.cabinBaggage} Per Person</Text>
//   //                             </View>
//   //                             <View
//   //                               style={{
//   //                                 flex: 1,
//   //                                 justifyContent: 'space-between',
//   //                                 justifyContent: 'center',
//   //                                 alignItems: 'center',
//   //                               }}
//   //                             >
//   //                               <View
//   //                                 style={{
//   //                                   justifyContent: 'center',
//   //                                   alignItems: 'center',
//   //                                 }}
//   //                               >
//   //                                 <Text
//   //                                   style={{
//   //                                     fontSize: 15,
//   //                                     fontWeight: 'bold',
//   //                                     marginTop: 10,
//   //                                   }}
//   //                                 >
//   //                                   {' '}
//   //                                   ({item.fromAirport})
//   //                                 </Text>
//   //                                 <Text
//   //                                   style={{
//   //                                     fontSize: 15,
//   //                                     fontWeight: 'bold',
//   //                                   }}
//   //                                 >
//   //                                   {item.depDate.split('T')[1].substring(0, 5)}
//   //                                 </Text>
//   //                               </View>

                        

//   //                               <View>
//   //                                 <View
//   //                                   style={{
//   //                                     flexDirection: 'row',
//   //                                     marginTop: 5,
//   //                                     justifyContent: 'space-between',
//   //                                     backgroundColor: 'whitesmoke',
//   //                                   }}
//   //                                 >
//   //                                   <View
//   //                                     style={{
//   //                                       width: 160,
//   //                                       marginTop: 11,
//   //                                       height: 2,
//   //                                       backgroundColor: COLOR.primary,
//   //                                     }}
//   //                                   ></View>
//   //                                   <View>
//   //                                     <FontAwesome5
//   //                                       style={{
//   //                                         marginLeft: 20,
//   //                                       }}
//   //                                       name="plane"
//   //                                       size={24}
//   //                                       color={COLOR.primary}
//   //                                     />
//   //                                   </View>
//   //                                   <View
//   //                                     style={{
//   //                                       width: 170,
//   //                                       height: 2,
//   //                                       marginTop: 11,
//   //                                       backgroundColor: COLOR.primary,
//   //                                       marginLeft: 15,
//   //                                     }}
//   //                                   ></View>
//   //                                 </View>
//   //                               </View>

//   //                               <View>
//   //                                 <Text
//   //                                   style={{
//   //                                     fontSize: 15,
//   //                                     fontWeight: 'bold',
//   //                                     marginTop: 10,
//   //                                   }}
//   //                                 >
//   //                                   ({item.toAirport})
//   //                                 </Text>
//   //                                 <Text style={styles.Time}>
//   //                                   {item.reachDate
//   //                                     .split('T')[1]
//   //                                     .substring(0, 5)}
//   //                                 </Text>
//   //                               </View>
//   //                             </View>
//   //                           </View>
//   //                         )}
//   //                         keyExtractor={(item, index) => index.toString()}
//   //                       />

//   //                       <View>
//   //                         <FlatList
//   //                           data={Flight.outBound}
//   //                           renderItem={({ item }) => (
//   //                             <View>
//   //                               <View
//   //                                 style={{
//   //                                   justifyContent: 'center',
//   //                                   alignItems: 'center',
//   //                                   marginTop: 10,
//   //                                 }}
//   //                               >
//   //                                 <Image
//   //                                   source={require('../assets/Image/INDIGO.png')}
//   //                                   style={{
//   //                                     width: 40,
//   //                                     height: 40,
//   //                                     resizeMode: 'contain',
//   //                                   }}
//   //                                 />
//   //                               </View>

//   //                               <View
//   //                                 style={{
//   //                                   justifyContent: 'center',
//   //                                   alignItems: 'center',
//   //                                   marginTop: 10,
//   //                                 }}
//   //                               >
//   //                                 <Text
//   //                                   style={{
//   //                                     fontWeight: 'bold',
//   //                                   }}
//   //                                 >
//   //                                   Indigo , SG985
//   //                                 </Text>
//   //                                 <Text>Operated By Indigo</Text>
//   //                               </View>
//   //                               <View
//   //                                 style={{
//   //                                   justifyContent: 'center',
//   //                                   alignItems: 'center',
//   //                                   marginTop: 5,
//   //                                 }}
//   //                               >
//   //                                 <Text
//   //                                   style={{
//   //                                     fontWeight: 'bold',
//   //                                   }}
//   //                                 >
//   //                                   Check-In Baggage
//   //                                 </Text>
//   //                                 <Text>{item.baggage} Per Person</Text>
//   //                               </View>
//   //                               <View
//   //                                 style={{
//   //                                   marginTop: 5,
//   //                                   justifyContent: 'center',
//   //                                   alignItems: 'center',
//   //                                 }}
//   //                               >
//   //                                 <Text
//   //                                   style={{
//   //                                     fontWeight: 'bold',
//   //                                   }}
//   //                                 >
//   //                                   Cabin Baggage
//   //                                 </Text>
//   //                                 <Text>{item.cabinBaggage} Per Person</Text>
//   //                               </View>
//   //                               <View
//   //                                 style={{
//   //                                   flex: 1,
//   //                                   justifyContent: 'space-between',
//   //                                   justifyContent: 'center',
//   //                                   alignItems: 'center',
//   //                                 }}
//   //                               >
//   //                                 <View
//   //                                   style={{
//   //                                     justifyContent: 'center',
//   //                                     alignItems: 'center',
//   //                                   }}
//   //                                 >
//   //                                   <Text
//   //                                     style={{
//   //                                       fontSize: 15,
//   //                                       fontWeight: 'bold',
//   //                                       marginTop: 10,
//   //                                     }}
//   //                                   >
//   //                                     {' '}
//   //                                     ({item.fromAirport})
//   //                                   </Text>
//   //                                   <Text
//   //                                     style={{
//   //                                       fontSize: 15,
//   //                                       fontWeight: 'bold',
//   //                                     }}
//   //                                   >
//   //                                     {item.depDate
//   //                                       .split('T')[1]
//   //                                       .substring(0, 5)}
//   //                                   </Text>
//   //                                 </View>


//   //                                 <View>
//   //                                   <View
//   //                                     style={{
//   //                                       flexDirection: 'row',
//   //                                       marginTop: 5,
//   //                                       justifyContent: 'space-between',
//   //                                       backgroundColor: 'whitesmoke',
//   //                                     }}
//   //                                   >
//   //                                     <View
//   //                                       style={{
//   //                                         width: 160,
//   //                                         marginTop: 11,
//   //                                         height: 2,
//   //                                         backgroundColor: COLOR.primary,
//   //                                       }}
//   //                                     ></View>
//   //                                     <View>
//   //                                       <FontAwesome5
//   //                                         style={{
//   //                                           marginLeft: 20,
//   //                                         }}
//   //                                         name="plane"
//   //                                         size={24}
//   //                                         color={COLOR.primary}
//   //                                       />
//   //                                     </View>
//   //                                     <View
//   //                                       style={{
//   //                                         width: 170,
//   //                                         height: 2,
//   //                                         marginTop: 11,
//   //                                         backgroundColor: COLOR.primary,
//   //                                         marginLeft: 15,
//   //                                       }}
//   //                                     ></View>
//   //                                   </View>
//   //                                 </View>

//   //                                 <View>
//   //                                   <Text
//   //                                     style={{
//   //                                       fontSize: 15,
//   //                                       fontWeight: 'bold',
//   //                                       marginTop: 10,
//   //                                     }}
//   //                                   >
//   //                                     ({item.toAirport})
//   //                                   </Text>
//   //                                   <Text style={styles.Time}>
//   //                                     {item.reachDate
//   //                                       .split('T')[1]
//   //                                       .substring(0, 5)}
//   //                                   </Text>
//   //                                 </View>
//   //                               </View>
//   //                             </View>
//   //                           )}
//   //                           keyExtractor={(item, index) => index.toString()}
//   //                         />
//   //                       </View>
//   //                     </ScrollView>
//   //                   </View>
//   //                 </View>
//   //               </Modal> */}
//   //             </View>
//   //           </View>
//   //         </View>
//   //       </View>
//   //     </View>
//   //   );
//   // };

//   const HeaderButtons = (props) => {
//     return (
//       <View>
//         <TouchableOpacity
//           activeOpacity={0.6}
//           style={{
//             backgroundColor:
//               props.activetab === props.text ? '#f15b2f' : 'white',
//             borderRadius: 30,
//             paddingVertical: 6,
//             paddingHorizontal: 16,
//           }}
//           onPressIn={() => props.setActiveTab(props.text)}
//           onPress={props.onPress}
//         >
//           <Text
//             style={{
//               color: props.activetab === props.text ? 'white' : '#000',
//               fontSize: 15,
//               fontWeight: '900',
//             }}
//           >
//             {props.text}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.header}>
//         <Text>Flight Result</Text>
//       </View> */}
//       <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//         <View>
//           <View>
//             <FlatList
//               data={datapass.flightResult}
//               renderItem={({ item }) => (<Flight Flight={item}/>
//                 // <>
//                 //   <Text>Sachin</Text>
//                 //   <Text>{item.resultID}</Text>
//                 // </>
//               )}
//               ItemSeparatorComponent={(props) => {
//                 return (
//                   <View
//                     style={{
//                       height: 1,
//                       marginVertical: 10,
//                       marginHorizontal: 5,
//                       backgroundColor: props.highlighted
//                         ? 'green'
//                         : 'rgb(199, 199, 204)',
//                     }}
//                   />
//                 );
//               }}
//               keyExtractor={(item, index) => index.toString()}
//               showsVerticalScrollIndicator={false}
//             />
//           </View>
//         </View>
//       </Animatable.View>
//     </View>
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
//     backgroundColor: 'whitesmoke',
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
//     paddingHorizontal: 10,
//     paddingVertical: 10,
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

// export default FlightSearchtwo;


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
  Pressable,
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

const FlightSearchtwo = (props) => {
  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  // const BookDetails = (props) => {
  //   //   console.log(props.inBound);
  //   //   setApiData(props);
  //   return (
  //     <View>
  //       {console.log(props.inBound[0].fromAirport)}
  //       <Text>{props.inBound[0].fromAirport}</Text>
  //     </View>
  //   );
  // };

  const Flight = ({ Flight }) => {
    const [apiData, setApiData] = useState(Flight);
    const [CheckboxDataVisible, setCheckboxDataVisible] = useState(false);

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
                        onPressOut={() => setCheckboxDataVisible(true)}
                        onPressIn={() => setApiData(Flight)}
                      />
                      {/* <BookDetails/> */}
                    </View>
                    {check ? (
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={CheckboxDataVisible}
                        onRequestClose={() => {
                          Alert.alert('Modal has been closed.');
                          setCheckboxDataVisible(!CheckboxDataVisible);
                        }}
                      >
                        <View style={styles.header}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                            }}
                          >
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                              }}
                            >
                              <View style={{ alignItems: 'center' }}>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                  }}
                                >
                                  {`${apiData.inBound[0].fromAirport} - ${apiData.inBound[0].toAirport} `}
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                  }}
                                >
                                  {apiData.inBound[0].depDate
                                    .split('T')[1]
                                    .substring(0, 5)}
                                  -
                                  {apiData.inBound[0].reachDate
                                    .split('T')[1]
                                    .substring(0, 5)}
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                  }}
                                >
                                  <ConvertMinsToTime
                                    data={apiData.inBound[0].eft}
                                  />
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                  }}
                                >
                                  Indigo
                                </Text>
                              </View>
                              <View style={{ marginLeft: 20 }}>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                  }}
                                >
                                  {apiData.fare.grandTotal}
                                </Text>
                              </View>
                            </View>
                            <View
                              style={{
                                width: 1,
                                height: height / 10,
                                backgroundColor: '#000',
                              }}
                            />
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                              }}
                            >
                              <View style={{ alignItems: 'center' }}>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                  }}
                                >
                                  {`${apiData.inBound[0].toAirport} - ${apiData.inBound[0].fromAirport} `}
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                  }}
                                >
                                  {apiData.outBound[0].depDate
                                    .split('T')[1]
                                    .substring(0, 5)}
                                  -
                                  {apiData.outBound[0].reachDate
                                    .split('T')[1]
                                    .substring(0, 5)}
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                  }}
                                >
                                  <ConvertMinsToTime
                                    data={apiData.outBound[0].eft}
                                  />
                                </Text>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 10,
                                  }}
                                >
                                  Indigo
                                </Text>
                              </View>
                              <View style={{ marginLeft: 20 }}>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                  }}
                                >
                                  {apiData.fare.grandTotal}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              // alignSelf: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                            }}
                          >
                            <View
                              style={{
                                backgroundColor: COLOR.secondary,
                                borderRadius: 30,
                                paddingHorizontal: 10,
                                // borderBottomLeftRadius: 30,
                              }}
                            >
                              <Pressable
                                onPress={() =>
                                  setCheckboxDataVisible(!CheckboxDataVisible)
                                }
                                onPressIn={() => setCheck(!check)}
                              >
                                <Text
                                  style={{
                                    padding: 10,
                                    color: COLOR.white,
                                    fontSize: 15,
                                  }}
                                >
                                  Cancel
                                </Text>
                              </Pressable>
                            </View>
                            <View
                              style={{
                                backgroundColor: COLOR.secondary,
                                borderRadius: 30,
                                // borderBottomRightRadius: 30,
                              }}
                            >
                              <Pressable
                                onPress={() => navigation.navigate('Book')}
                              >
                                <Text
                                  style={{
                                    padding: 10,
                                    color: COLOR.white,
                                    fontSize: 15,
                                    // marginLeft:20
                                  }}
                                >
                                  BookNow
                                </Text>
                              </Pressable>
                            </View>
                          </View>
                        </View>
                      </Modal>
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
      {/* <View style={styles.header}>
        <Text>Flight Result</Text>
      </View> */}
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View>
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

export default FlightSearchtwo;