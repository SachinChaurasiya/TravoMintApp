// import React,{useState} from 'react';
// import {View, StyleSheet,Text,FlatList,Alert, Modal , Pressable ,TouchableOpacity,CheckBox,Image} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FlightData from '../FlightData'



// const Notificationscreen = () => {

//   const ConvertMinsToTime = ({data}) => {
//   let hours = Math.floor(data / 60);
//   let minutes = data % 60;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   return `${hours}h:${minutes}m`;
// }

//     const Flight = ({Flight}) => {
//         const [modalVisible, setModalVisible] = useState(false);

//         const [isSelected , setSelection] = useState(false);
//         return (      

//    <>
//             <TouchableOpacity
//             activeOpacity={0.8}>
//            <View style={{margin:10}}>
//               <View  style = {{ flexDirection:"row" ,justifyContent:"space-between",padding:20,height:120 ,borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#ddd',
//     borderBottomWidth: 0,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.9,
//     shadowRadius: 3,
//     elevation: 3,}}>
//                     <View style={{flexDirection:'row'}}>
//                     <Image  
//                     source ={require('../assets/Image/INDIGO.png')}
//                     style ={{resizeMode:'cover', width:35 ,height:35,marginRight:8}}
//                     />
//                     {/* <Text>{Flight.inBound[0].airline}</Text> */}
//                     <View>
//                         <Text>{Flight.inBound[0].depDate.split("T")[1]}</Text>
//                         <Text>{Flight.inBound[0].reachDate.split("T")[1]}</Text>
//                         <Text>{Flight.inBound[0].airlineName}</Text>
//                         <View style={{flexDirection: 'row',paddingTop:12,alignItems: 'center'}}>
//                             <FontAwesome5 name="hand-point-right" size={10} color="gray"/>
//                         <Text style={{color:"gray",marginLeft:5,fontSize:10}}
//                         onPress={() => setModalVisible(true)}
//                         >Details</Text>
//                         </View>
//                     </View>
//                     </View>
//                     <View>
//                         <Text style={{fontSize:14}}> <ConvertMinsToTime data = {Flight.inBound[0].eft}/></Text>
//                         <Text style={{fontSize:10}}>(Non-stop)</Text>
//                         <View style={{flexDirection:'row'}}>
//                             <Text style={{fontSize:10}}>{`${Flight.inBound[0].fromAirport} -  ${Flight.inBound[0].toAirport}`}</Text>
//                         </View>
//                         <Text style={{fontWeight:'bold'}}>SG-266</Text>
//                     </View>
//                     <View>
//                         <Text style={{ fontSize:18, fontWeight:'bold'}}>{`₹ ${Flight.fare.grandTotal}`}</Text>
//                         <View style ={{marginLeft:5, flexDirection:"row-reverse",flex:1, justifyContent:"flex-end" ,alignItems:"center" }} >
//                                  {/* <Text>{isSelected?'Selected' : 'Select'}</Text> */}
//                                     <CheckBox
//                                         size = {20}
//                                         value={isSelected }
//                                         onValueChange={setSelection}
//                                         />
//                            </View>
//                     </View>
//                     </View>
//                            </View>
//           </TouchableOpacity>


//           <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//               <View style = {{alignItems:"flex-end" , justifyContent:"flex-end" , margin:10}}>
//                   <FontAwesome5
//                   name="times-circle"
//                   size={30}
//                   color="#195fb9"
//                   onPress={() => setModalVisible(!modalVisible)}
//                   />
//               </View>
//             <Text style= {styles.modalText}>Flight Details</Text>
//             <View style = {{flexDirection:'row' , justifyContent:"space-around"}}>
//               <Text >
//                   Chennai-NewDelhi
//               </Text>
//               <Text style = {{marginRight:5}}> 
//                   Mon, Nov 01 2021
//               </Text>
//           </View>
        
//           <View style = {{margin:10 , justifyContent:"center", borderWidth:1 , borderColor:'grey' , borderRadius:10  }}>
//               <Text style = {{ margin:5}} >
//               The baggage information is just for reference. Please Check with airline before check-in. For more information, visit the airline's official website.
//               </Text>
//           </View>
//           <View style={{alignItems:'center' , marginRight:5}}>
//           <Image 
//         source={require('../assets/Image/INDIGO.png')}
//         style={{width:50,height:50 , resizeMode:'contain'}} />
//         </View>
//           <View style = {{justifyContent:'center', alignItems:'center'}}>
//               <View>
//               </View>
//           <View style= {{margin:10}}>
//           <Text style = {{fontWeight:'bold', marginLeft:10}}>
//               Indigo , SG266
//           </Text>
//           <Text>
//           Operated by Indigo
//           </Text>
//           </View>
//           <View style= {{margin:10}}>
//               <Text style = {{fontWeight:'bold'}}>
//                   Check-In Baggage
//               </Text>
//               <Text style= {{marginLeft:8 , marginTop:2}}>
//                   15 kg per person
//               </Text>
//               <Text style = {{fontWeight:'bold' , marginTop:10 , marginLeft:8 }}>Cabin Baggage</Text>
//               <Text style={{ marginLeft:10 , marginTop:2}}>
//                   7 kg per person
//               </Text>
//           </View>
//           <View style= {{margin:10}}>
//               <Text style = {{fontWeight:'bold' , marginLeft:16, marginTop:2}}>
//               Chennai(MAA)
//               </Text>
//               <Text style = {{marginLeft:5 , marginTop:2}}>Chennai International</Text>
//               <Text style= {{ marginLeft:40 , marginTop:2}}>8:00 PM</Text>
//           </View>
//           </View>
//           </View>
//         </View>

//        <View style= {{flexDirection:'row' , justifyContent:'space-between' , backgroundColor:'whitesmoke'}}>
//          <View style= {{
//            width:160,
//            marginTop:11,
//            height:2,
//            backgroundColor:"#195fb9"
//            }}>
//          </View>
//          <View>
//            <FontAwesome5
//            name="plane"
//            size={24}
//            color="#195fb9"
//            />
//          </View>
//          <View style= {{
//            width:170,
//            height:2,
//            marginTop:11,
//            backgroundColor:"#195fb9"
//            }}>
//          </View>
//        </View>

//        <View style ={{justifyContent:'center' , backgroundColor:'whitesmoke' ,alignItems:'center'}}>
//          <View>
//            <Text style= {{marginLeft:25 , fontWeight:"bold"}}>
//              New-delhi(DEL)
//            </Text>
//            <Text>
//              Indira Gandhi International
//            </Text>
//            <Text style = {{marginLeft:50 , marginBottom:20}}>
//              08:45 AM
//            </Text>
//          </View>
//        </View>

//       </Modal>
//       {/* <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable> */}
//     </View>



// </>
          
//         );
//       };



//     return (
//         <View style={styles.container}>
          
//    <View style={{marginVertical:10,marginLeft:20}}>
//      <Text style={{fontSize:20,fontWeight:'bold'}}>Suggested Flights</Text>
//    </View>
//             <FlatList
//             contentContainerStyle={{paddingHorizontal:5,paddingVertical:10}}
//             showsHorizontalScrollIndicator={false}
//             data={FlightData.flightResult}
//             keyExtractor = {(item, index) => index.toString()}
//             renderItem={({item}) => <Flight Flight={item} />}
//           />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor:"#fff",
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: "flex-end",
//         marginTop: 10
//       },
//       modalView: {
//         borderTopLeftRadius: 40,
//         borderTopRightRadius: 40,
//       backgroundColor:'whitesmoke'
//       },
//       buttonClose: {
//         backgroundColor: "#2196F3",
//       },
//       textStyle: {
//         color: "white",
//         fontWeight: "bold",
//         textAlign: "center"
//       },
//       modalText: {
//         marginBottom:20,
//         fontSize:30,
//         fontWeight:'bold',
//         textAlign: "center"
//       },
// })

// export default Notificationscreen;



import React , {useState} from 'react'
import { View , Text , StyleSheet ,FlatList, Modal , Pressable,  Image ,Alert, Button , TouchableOpacity } from 'react-native'
import FlightData from '../FlightData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const NotificationScreen = ()=>{

    const ConvertMinsToTime = ({data}) => {
        let hours = Math.floor(data / 60);
        let minutes = data % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}h:${minutes}m`;
      }

    const Flight = ({Flight}) =>{
        const [modalVisible, setModalVisible] = useState(false);

        return(
                 <>
                     <View style={{backgroundColor:'white' , marginTop:10 ,borderRadius:20 , borderWidth:1,
        borderColor:'#f15b2f', margin:10 , shadowRadius:10 , shadowColor:'grey' , shadowOpacity:20}}>
                    <View style= {{flexDirection:"row" , justifyContent:'space-between' , marginRight:10}}>
                       <View style = {styles.card}>   
                         <View style = {{marginLeft:15}}>
                            <Text style={{fontSize:15,marginLeft:15 , fontWeight:'bold'}}>{Flight.inBound[0].fromAirport}</Text>
                            <Text  style= {{fontWeight:'bold' , marginLeft:4}}>{Flight.inBound[0].depDate.split("T")[1]} </Text>
                         </View>
                         <View style = {{flexDirection:'row' }}>
                             <Text style ={{fontWeight:'bold' , marginLeft:15}}>
                             {Flight.inBound[0].depDate.split("T")[0]}
                             </Text>
                         </View>
                       </View>
<View style= {styles.icon}>
  <FontAwesome5
  name="plane" 
  style= {{marginLeft:14}}
  color="#f15b2f"
  size={24} /> 
  <View>
      {/* <Text>(Non-stop)</Text> */}
  <Text style={{fontSize:14 ,marginRight:18 , fontWeight:"bold"}}> <ConvertMinsToTime data = {Flight.inBound[0].eft}/></Text>
      </View> 
</View>


                       <View style={{  flexDirection:'row-reverse'}}>
                            <View style ={styles.card}>
                                <View style = {{marginLeft:15}}>
                                <Text style={{fontSize:15 , fontWeight:'bold' , marginLeft:6}}>{Flight.inBound[0].toAirport}</Text>
                                <Text  style= {{fontWeight:'bold' , marginLeft:4}}>{Flight.inBound[0].reachDate.split("T")[1]}</Text>
                               </View>
                               <View style = {{flexDirection:'row' }}>
                               <Text style ={{fontWeight:'bold' , marginLeft:15}}>
                             {Flight.inBound[0].depDate.split("T")[0]}
                             </Text>
                         </View>
                            </View>
                       </View>
                       </View>
                       <View>
                           <View>
                               <View style = {{borderRadius:20 , shadowOpacity:10 , shadowColor:'#ccc' , shadowRadius:20 , borderWidth:1 , borderColor:"#f15b2f" , margin:20 }}>
                                    <Text style= {{paddingLeft:20 , paddingTop:10 , paddingBottom:10 , fontWeight:"bold" , fontSize:15 }}>
                                        Refundable
                                    </Text>
                                    <View style= {{ flexDirection:'row',justifyContent:"space-between",marginRight:20}}>
                                    <Text style ={{marginLeft:20 , marginBottom:10 ,fontWeight:"bold" , fontSize:15}}>
                                    {`₹ ${Flight.fare.grandTotal}`}0
                                    </Text>
                                    <TouchableOpacity onPress={() => setModalVisible(true)} style= {{flexDirection:'row'}} >
                                         <Text  style ={{marginLeft:20 , color:"#f15b2f" , marginBottom:1 ,fontWeight:"bold" , fontSize:15 }}>Details
                                        </Text>

                                        <View>
                                            <FontAwesome5
                                            style= {{ marginLeft:4 }}
                                            name="info-circle"
                                            color="#f15b2f"
                                            size={18}
                                            />
                                            </View>  
                                            </TouchableOpacity>  
                                        </View>
                               </View>
                               <TouchableOpacity>
                               <View style ={{backgroundColor:'#f15b2f' ,borderRadius:30 , marginLeft:100 , marginBottom:10, justifyContent:'center', alignItems:'center',height:40,width:150 , }}>
                                   <Text style = {{fontWeight:'bold', color:'white' , fontSize:20 }}>
                                       BOOK NOW
                                   </Text>
                                   </View>
                                   </TouchableOpacity>
                           </View>
                       </View>
                     </View>



 <View style={styles.centeredView}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style = {{alignItems:"flex-end" , justifyContent:"flex-end" , margin:10}}>
                  <FontAwesome5
                  name="times-circle"
                  size={20}
                  onPress={() => setModalVisible(!modalVisible)}
                  />
              </View>
            <Text style= {styles.modalText}>Flight Details</Text>
            <View style = {{flexDirection:'row' , justifyContent:"space-around"}}>
              <Text >
                  Chennai-NewDelhi
              </Text>
              <Text style = {{marginRight:5}}> 
                  Mon, Nov 01 2021
              </Text>
          </View>
        
          <View style = {{margin:10 , justifyContent:"center", borderWidth:1 , borderColor:"whitesmoke" }}>
              <Text>
              The baggage information is just for reference. Please Check with airline before check-in. For more information, visit the airline's official website.
              </Text>
          </View>
          <View style={{alignItems:'center' , marginRight:5}}>
          <Image 
        source={require('../assets/Image/INDIGO.png')}
        style={{width:50,height:50 , resizeMode:'contain'}} />
        </View>
          <View style = {{justifyContent:'center', alignItems:'center'}}>
              <View>
              </View>
          <View style= {{margin:10}}>
          <Text style = {{fontWeight:'bold', marginLeft:10}}>
              Indigo , SG266
          </Text>
          <Text>
          Operated by Indigo
          </Text>
          </View>
          <View style= {{margin:10}}>
              <Text style = {{fontWeight:'bold'}}>
                  Check-In Baggage
              </Text>
              <Text style= {{marginLeft:8 , marginTop:2}}>
                  15 kg per person
              </Text>
              <Text style = {{fontWeight:'bold' , marginTop:10 , marginLeft:8 }}>Cabin Baggage</Text>
              <Text style={{ marginLeft:10 , marginTop:2}}>
                  7 kg per person
              </Text>
          </View>
          <View style= {{margin:10}}>
              <Text style = {{fontWeight:'bold' , marginLeft:16, marginTop:2}}>
              Chennai(MAA)
              </Text>
              <Text style = {{marginLeft:5 , marginTop:2}}>Chennai International</Text>
              <Text style= {{ marginLeft:40 , marginTop:2}}>8:00 PM</Text>
          </View>
          </View>
          </View>

          <View style= {{flexDirection:'row' , justifyContent:'space-between' , backgroundColor:'whitesmoke'}}>
         <View style= {{
           width:160,
           marginTop:11,
           height:2,
           backgroundColor:"#195fb9"
           }}>
         </View>
         <View>
           <FontAwesome5
           name="plane"
           size={24}
           color="#195fb9"
           />
         </View>
         <View style= {{
           width:170,
           height:2,
           marginTop:11,
           backgroundColor:"#195fb9"
           }}>
         </View>
       </View>

       <View style ={{justifyContent:'center' , backgroundColor:'whitesmoke' ,alignItems:'center'}}>
         <View>
           <Text style= {{marginLeft:25 , fontWeight:"bold"}}>
             New-delhi(DEL)
           </Text>
           <Text>
             Indira Gandhi International
           </Text>
           <Text style = {{marginLeft:50 , marginBottom:20}}>
             08:45 AM
           </Text>
         </View>
       </View>
        </View>
      </Modal>
    </View>
                 </>
        )
    }
     return(
         <View>
        <View style ={styles.container}>
       
            <View>
              <FlatList
                   showsHorizontalScrollIndicator={false}
                    data={FlightData.flightResult}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={({item}) => <Flight Flight={item} />}
                 />
            </View>
    </View>
    </View>
     )
 }


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    card:{
        margin:10,

        marginLeft:23,
        width:130
    },
    icon:{
        marginTop:16,
    },
    centeredView: {
            flex: 1,
            justifyContent: "flex-end",
            marginTop: 10
          },
          modalView: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor:'whitesmoke'
          },
          button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
    
            marginBottom:20,
            fontSize:30,
            fontWeight:"bold",
            textAlign: "center"
          },
})

export default NotificationScreen;