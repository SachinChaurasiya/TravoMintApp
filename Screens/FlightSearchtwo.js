import React, { useState } from 'react'
import { View , Text, FlatList , StyleSheet, Dimensions , Modal,Image ,  Alert , TouchableOpacity, CheckBox } from "react-native"
import FlightData from '../FlightData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import * as Animatable from 'react-native-animatable';
import Moment from 'moment';
import COLOR from '../assets/consts/colors'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height




const FlightSearchtwo = (props )=>{

  const ConvertMinsToTime = ({data}) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}h:${minutes}m`;
  }

  // const [activetab,setActiveTab] = useState("Go to")

  const RoundOneWayBtn =(props)=>{
    
    
    const [activetab, setActiveTab] =useState('Go to')

    const [isVisible, setIsVisible] = useState(true);
    const toggleFunction = (props) => {
      {!isVisible ? setIsVisible(!isVisible) : setIsVisible(isVisible)}
    };
    const toggleFunctionvisible = (props) => {
      {!isVisible ? setIsVisible(isVisible) : setIsVisible(!isVisible)}
    }

    return(
      <View>
             <View style= {styles.btn}>
            <View>
            <Text><HeaderButtons 
            text="Go to"
            onPress={toggleFunction}
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
             onPress={toggleFunctionvisible}
             btncolor="white" 
             textcolor="#195fb9"
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View> 
                <View>
                {/* <View>
                            <Text style={{fontSize:15,marginLeft:4 , fontWeight:'bold'}}>{Flight.inBound[0].fromAirport}</Text>
                            <Text  style= {{fontWeight:'bold' , marginLeft:2}}>{Flight.inBound[0].depDate.split("T")[1].substring(0, 5)}</Text>
                         </View> */}
                {/* {isVisible ?(
                  <View>
                  <Animatable.View animation="lightSpeedIn" >
<View>
          <Text style={{position: "absolute",bottom:30,fontSize:12,color:COLOR.primary,fontWeight:"bold"}}>Flying Date</Text>
          <TouchableOpacity activeOpacity={.6}>
          <View>
          <Text style={{marginTop:0}}>27781313</Text>
          </View>
          </TouchableOpacity>
          <View style={{marginLeft:0,
          position: "absolute",
          top:28,
                        width: width,
                        height: 1,
                        backgroundColor: COLOR.grey,}}/>

          </View>
            </Animatable.View>
            </View>
            ):(  <Animatable.Text animation="lightSpeedIn" style={{marginTop:0}}>27781326</Animatable.Text> )} */}
            </View>
      </View>
    )
}



  const HeaderButtons = (props) =>{
    return(
        <View>
        <TouchableOpacity activeOpacity={0.6} style={{
            backgroundColor: props.activetab === props.text ? "#f15b2f" : "white",
            borderRadius:30,
            paddingVertical:6,
            paddingHorizontal:16,
        }}
        onPressIn={() => props.setActiveTab(props.text)}  
        onPress={props.onPress}
        >

            <Text style={{color: props.activetab === props.text?"white":"#000",fontSize:15,fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}
 

    const Flight = ({Flight, inBound,props,data}) => {



        var count=Object.keys(Flight.inBound).length

        var round= (Flight.fare.grandTotal)
        round=round.toFixed(2)
        const [modalVisible, setModalVisible] = useState(false);
        const [date ,setDate ] = useState({name : Moment(Flight.inBound[0].depDate.split("T")[0])})      
   
        return(
           <> 
              <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
                <View style = {styles.card}>  
                {data ?(
                  <View>
                  <Animatable.View animation="lightSpeedIn" >
<View>
          <Text style={{position: "absolute",bottom:30,fontSize:12,color:COLOR.primary,fontWeight:"bold"}}>Flying Date</Text>
          <TouchableOpacity activeOpacity={.6}>
          <View>
          <Text style={{marginTop:0}}>27781313</Text>
          </View>
          </TouchableOpacity>
          <View style={{marginLeft:0,
          position: "absolute",
          top:28,
                        width: width,
                        height: 1,
                        backgroundColor: COLOR.grey,}}/>

          </View>
            </Animatable.View>
            </View>
            ):(  <Animatable.Text animation="lightSpeedIn" style={{marginTop:0}}>27781326</Animatable.Text> )}
                 
                         <View>
                            <Text style={{fontSize:15,marginLeft:4 , fontWeight:'bold'}}>{Flight.inBound[0].fromAirport}</Text>
                            <Text  style= {{fontWeight:'bold' , marginLeft:2}}>{Flight.inBound[0].depDate.split("T")[1].substring(0, 5)}</Text>
                         </View>
                         <View style = {{flexDirection:'row' }}>
                             <Text style ={{fontWeight:'bold' , marginLeft:1 }}>
                             {/* {Flight.inBound[0].depDate.split("T")[0]}   */}
                             {/* {date.name.format('DD-MM-YYYY')} */}
                             </Text>
                         </View>
                       </View>
                       <View style= {styles.icon}>
                                    <FontAwesome5
                                    name="plane" 
                                    style= {{marginLeft:14}}
                                    color="#f15b2f"
                                    size={24} /> 
                            <View style ={styles.iconText}>
                             <Text style={{fontSize:14 ,marginLeft:5, fontWeight:"bold"}}> <ConvertMinsToTime data = {Flight.inBound[0].eft}/></Text>
                          </View> 
                    </View>

                    <View style ={styles.card}>
                                <View>
                                <Text style={{fontSize:15 , fontWeight:'bold' , marginLeft:2}}>{Flight.outBound[0].fromAirport}</Text>
                                <Text  style= {{fontWeight:'bold' , marginLeft:2}}>{Flight.inBound[0].reachDate.split("T")[1].substring(0, 5)}</Text>
                               </View>
                               <View style = {{flexDirection:'row' }}>
                               <Text style ={{fontWeight:'bold' }}>
                             {/* {Flight.inBound[0].depDate.split("T")[0]} */}
                             {/* {date.name.format('DD-MM-YYYY')} */}
                             </Text>
                         </View>
                            </View>
            </View>


           
<FlatList
                    data={Flight.outBound}
                    renderItem={({item}) => 
                    <View>
                        <View style = {{flex:1 , flexDirection:'row' , justifyContent:"space-around" }}>
                        <View>
                          <Text style = {{fontSize:15,marginLeft:4 , fontWeight:'bold', marginTop:15}}>{item.fromAirport}</Text>
                           <Text style= {styles.Time}>{item.depDate.split("T")[1].substring(0, 5)}</Text>
                           </View>
                         
                            <View style = {styles.icon}>
                            <View>
                               <Image
                                  source ={require('../assets/Image/INDIGO.png')}
                                  style= {{width:40 , height:40 , resizeMode:'contain' , marginLeft:10}}
                                />
                             </View>
                             <View>
                               <Text style = {styles.Duration}><ConvertMinsToTime data = {item.eft}/></Text>
                             </View>
                           </View>
                         
                          <View>
                          <Text style = {{fontSize:15,marginLeft:4 , fontWeight:'bold', marginTop:15}}>{item.toAirport}</Text>
                          <Text style= {styles.Time} >{item.reachDate.split("T")[1].substring(0, 5)}</Text>
                          </View>
                       </View>
                      </View>
                      }
                    keyExtractor={(item,index) => index.toString()}
                  />
              

          

            {/* Refundable */}
            <View style = {styles.refundableDiv}>
                           <View style = {styles.shadowContainerStyle}>
                               <View style = {styles.InsideRefundable}>
                                    <View style= {{flexDirection:'column' , justifyContent:'space-between'  }}>
                                      <View>
                                        <Text style = {{fontWeight:'bold' , fontSize:25}}>
                                        ₹{round}
                                        </Text>
                                      </View>
                                      </View>

                                      <View style = {{ flexDirection:"row" , justifyContent:'space-between' , alignItems:"flex-end",marginTop:40}}>
                                          <View>
                                            <Text style = {{fontWeight:"bold" , marginBottom:3}}>
                                              Refundable
                                           </Text>
                                         </View>

                                         
                                         
                                         
                                         
                                         <TouchableOpacity onPress={()=>setModalVisible(true)}>
                                         <View style = {{flexDirection:'row'}}>
                                             <Text style= {{marginTop:2 , fontWeight:'bold'}}>
                                              Details 
                                            </Text>
                                              <FontAwesome5
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
          <FlatList
                    data={Flight.airline}
                    renderItem={({item}) => 
                    <View>
                        <View style = {styles.modalText}>
                          <Text>
                            sddsasdadcsasadxas
                          </Text>
                        </View>
                        
                      </View>
                      }
                    keyExtractor={(item,index) => index.toString()}
                  />
              <View style = {{alignItems:"flex-end" , justifyContent:"flex-end", margin:10}}>
                  <FontAwesome5
                  name="times-circle"
                  size={20}
                  onPress={() => setModalVisible(!modalVisible)}
                  />
              </View>
            <Text style= {styles.modalText}>,m.m</Text>
            <View style = {{flexDirection:'row' , justifyContent:"space-around"}}>
              <Text>
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
                    </View>
           </> 
        )
    }

    return(
        <View style = {styles.container}>
          <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >   
            <View>
              <RoundOneWayBtn {...props}/>
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
                    renderItem={({item}) =>
                    <>
                    <Flight Flight={item}
                     data={props.isVisible}
                     inBound = {item.inBound}
                     Bound = {item.inBound}
                     airline= {item.airline}
                     />
                       </>}
                    ItemSeparatorComponent={(props) => {
                      return (<View style={{height: 1 , marginVertical:10 , marginHorizontal:5, backgroundColor: props.highlighted ? 'green' : 'rgb(199, 199, 204)'}} />);
                    }}
                    keyExtractor={(item,index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    />
                   
                </View> 
                <View>

                </View>
            </View>
            </Animatable.View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#f15b2f'
    },
    // contentDiv:{
    //     flex:1,
    //     backgroundColor:'white',
    //     marginTop:150,
    //     borderTopLeftRadius:30,
    //     borderTopRightRadius:30
    // },
    btn:{
        flexDirection:'row',
        alignSelf: 'center',
        borderWidth:1,
        borderColor:"#f15b2f", 
        borderRadius:30,
        marginBottom:10
    },
    card:{
        marginTop:10,
    },
    icon:{
        // marginTop:18,
        justifyContent:'center',
    },
    refundableDiv:{
        // elevation:1,
        marginTop:10,
        borderRadius:20,
        justifyContent:'center', 
        alignItems:'center'
    },
    iconText:{
        justifyContent:'center',
    },
 shadowContainerStyle: {
    borderWidth:1,
    borderColor:COLOR.primary,
    width:290,
    borderRadius:10,
    height:100
  },
  InsideRefundable:{
    margin:10,
    borderRadius:20, 
    shadowOpacity:10, 
    shadowColor:'#ccc', 
    shadowRadius:20  
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
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop:150
}, 
  Time: {
    fontWeight:'bold', 
    marginLeft:2
},
Duration:{
  fontSize:14 ,
  marginLeft:5,
  fontWeight:"bold"
}
  });



export default FlightSearchtwo;