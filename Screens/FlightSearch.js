import React,{useState,useEffect} from 'react';
import {View,StatusBar, StyleSheet,Text,TouchableOpacity,Dimensions,FlatList,ScrollView ,Button, Modal,TextInput} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import DateRangePicker from "rn-select-date-range";
import moment from 'moment';
// import { useRoute } from '@react-navigation/native';

// color
import COLOR from '../assets/consts/colors'

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

 export const Flightsearch = ({route,navigation}) => {
    const [text, setText] = useState('DEL');
    const [SecText, setSecText] = useState('BLR')
    const [state, setState] = useState({ data: [], loading: false }); // only one data source
    const { data, loading } = state;

    const fetchAPI = () => {
        //setState({data:[], loading: true});
        return fetch('http://34.221.84.222/Flights/GetAirport?authcode=Trav3103s987876&data=del')
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            setState({ data, loading: false }); // set only data
          })
          .catch(error => {
            console.error(error);
          });
      };
      useEffect(() => {
        fetchAPI();
      }, []);

      const filterdData = text // based on text, filter data and use filtered data
    ? data.filter(item => {
        const itemData = item.airportName.toUpperCase();
        const airportCode = item.airportCode.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1,
        airportCode.indexOf(textData) > -1;
      })
    : null; // on on text, u can return all data

    const filterdDatas = SecText // based on text, filter data and use filtered data
    ? data.filter(item => {
        const itemDatas = item.airportCode.toUpperCase();
        const textDatas= SecText.toUpperCase();
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
    const [flyingfromtext, flyingfromText] = React.useState("");
    const [totext, flyingtoText] = React.useState("");
    const [flyingdatetext, flyingdateText] = React.useState("");
    const [returndatetext, returndateText] = React.useState("");
    const [selectedRange, setRange] = React.useState('Date');

    // hide and unhide
    const [isVisible, setIsVisible] = useState(true);
    const [selectedValue, setSelectedValue] = useState("Economy");

    const [modalVisible,setModalVisible] = useState(false)
    const [modalVisibles,setModalVisibles] = useState(false)
    const [FlyingDate,setFlyingDate] = useState(false)


    const toggleFunction = (props) => {
        {!isVisible ? setIsVisible(!isVisible) : setIsVisible(isVisible)}
      };
      const toggleFunctionvisible = (props) => {
        {!isVisible ? setIsVisible(isVisible) : setIsVisible(!isVisible)}
      }

    return (
        <View style={styles.container}>
          {/* <StatusBar backgroundColor={COLOR.secondary} barStyle="light-content"/> */}
        <View style={styles.header}>
            <Text style={styles.text_header}>Flight Search Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <View>
                <View style={styles.btn}>
                <View>
            <Text><HeaderButtons 
            text="Round Trip" 
            onPress={toggleFunction}
            btncolor={COLOR.primary}
            textcolor={COLOR.white}
            activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><HeaderButtons
             text="One Way" 
             onPress={toggleFunctionvisible}
             btncolor={COLOR.primary} 
             textcolor={COLOR.primary}
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                 <View>
                   <Text style={styles.title}>Flying From</Text>

                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Fontisto name="plane" size={18} color={COLOR.primary}/>
               
<View>
          <TouchableOpacity onPress={()=> setModalVisible(true)} activeOpacity={.6}>
          <View>
          <Text style={[styles.flightDest,{marginTop: 10}]} >{text}</Text>
          {/* <Text style={{color:"black"}}>{route.params.myData}</Text> */}
          </View>
          </TouchableOpacity>
          <View style={{marginLeft:0,
          // marginTop:18,
                        width: width-240,
                        height: 1,
                        backgroundColor: COLOR.grey,}}/>

          </View>

{/* modal */}
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

<View style= {styles.centeredView}>
  <View style = {styles.modalView}>
        {/* <Text>cnscjbdjcbbkdsddvdvdsdsz</Text> */}
          <View>
          {loading === false ? (
      <View>
      <TextInput
            placeholder="Flying To"
             style={[styles.input,{width:width,paddingHorizontal:12}]}
            //  onChangeText={flyingfromText}
             onChangeText={text => setText(text)}
             value={text}
            />
            
            
            <FlatList
            data={filterdData}
            vertical={true}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={itemSeparator}
            renderItem={({ item }) => (
                <ScrollView>
                  <View >
              <Text onPress={()=>(setText(item.airportCode),setModalVisible(!modalVisible))} style={{marginVertical:10,marginLeft:10}}>{`${item.airportName} (${item.airportCode})`}</Text>
              </View>
              </ScrollView>
            )}
            style={{ marginTop: 10,height:height-360 }}
          />  
          
          
          </View>  ):
          <Text>loading</Text>}
            <Button
            title= "close"
            onPress={()=>setModalVisible(!modalVisible)}
            />
          </View>
  </View> 
</View>

</Modal>

            </View>
            </View>


            <View>
            <Text style={[styles.title,{paddingLeft:-20}]}>Flying To</Text>
            {/* <TextInput
            placeholder="Flying To"
             style={styles.input}
             onChangeText={flyingtoText}
             value={totext}
             underlineColorAndroid="transparent"
            /> */}
            <TouchableOpacity  onPress={()=> setModalVisibles(true)}>
            <View>
          <Text style={[styles.flightDest,{marginTop: 10}]}>{SecText}</Text>
          {/* <Text style={{color:"black"}}>{route.params.myData}</Text> */}
          </View>
          </TouchableOpacity>
          <View style={{marginLeft:0,
          // marginTop:18,
                        width: width-240,
                        height: 1,
                        backgroundColor: COLOR.grey,}}/>
  <Modal  
  animationType="slide"
        transparent={true}
        visible={modalVisibles}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisibles(!modalVisibles);
        }}>   
        <View style= {styles.centeredView}>
  <View style = {styles.modalView}>
        {/* <Text>cnscjbdjcbbkdsddvdvdsdsz</Text> */}
          <View>
          {loading === false ? (
      <View>
      <TextInput
            placeholder="Flying To"
             style={[styles.input,{width:width,paddingHorizontal:12}]}
            //  onChangeText={flyingfromText}
             onChangeText={SecText => setSecText(SecText)}
             value={SecText}
            />
            
            
            <FlatList
            data={filterdDatas}
            vertical={true}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={itemSeparator}
            renderItem={({ item }) => (
                <ScrollView>
                  <View >
              <Text onPress={()=>(setSecText(item.airportCode),setModalVisibles(!modalVisibles))} style={{marginVertical:10,marginLeft:10}}>{`${item.airportName} (${item.airportCode})`}</Text>
              </View>
              </ScrollView>
            )}
            style={{ marginTop: 10,height:height-360 }}
          />  
          
          
          </View>  ):
          <Text>loading</Text>}
            <Button
            title= "close"
            onPress={()=>setModalVisibles(!modalVisibles)}
            />
          </View>
  </View> 
</View>
          </Modal>


            </View>
            
            </View>


            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:20}}>
                <View>
            {/* <Text style={styles.title}>Flying Date</Text>
            <View style={{flexDirection: 'row',alignItems: 'center'}}  >
                <FontAwesome5 name="calendar-alt" size={18} color={COLOR.primary} onPress={()=>navigation.navigate("calendar")}/>
            <TextInput
            placeholder="Flying Date"
             style={[styles.input,{width: isVisible ? width-230: width-55}]}
             onChangeText={flyingdateText}
             value={flyingdatetext}
            />
            </View> */}


            {/* -------------------------------------------------------------------------------------------------- */}
            <View>
                   <Text style={styles.title}>Flying Date</Text>

                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Fontisto name="calendar" size={18} color={COLOR.primary}/>
               
<View>
          <TouchableOpacity onPress={()=> setFlyingDate(true)} activeOpacity={.6}>
          <View>
          <Text style={[styles.flightDest,{marginTop: 10}]} >{selectedRange.firstDate}</Text>
          {/* <Text style={{color:"black"}}>{route.params.myData}</Text> */}
          </View>
          </TouchableOpacity>
          <View style={{marginLeft:0,
          // marginTop:18,
          // style={[styles.input,{width: isVisible ? width-230: width-55}]}
                        width: isVisible ? width-240: width-50,
                        height: 1,
                        backgroundColor: COLOR.grey,}}/>

          </View>

{/* modal */}
<Modal
        animationType="slide"
        transparent={true}
        visible={FlyingDate}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setFlyingDate(!FlyingDate);
        }}
      >

<View style= {styles.centeredView}>
  <View style = {styles.modalView}>
        {/* <Text>cnscjbdjcbbkdsddvdvdsdsz</Text> */}
          <View>
          {loading === false ? (
      <View style={{marginTop:20,marginHorizontal:10}}>
      <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          
          blockSingleDateSelection={false}
          responseFormat="DD-MM-YYYY"
          maxDate={moment().add(90, "days")}
          minDate={moment().subtract(90, "days")}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
          
          
          </View>  ):
          <Text>loading</Text>}
            <Button
            title= "Ok"
            onPress={()=>setFlyingDate(!FlyingDate)}
            />
          </View>
  </View> 
</View>

</Modal>
{ isVisible ? <Animatable.View animation="lightSpeedIn">
<View>
          <Text style={{position: "absolute",bottom:30,fontSize:12,color:COLOR.primary,fontWeight:"bold"}}>Flying Date</Text>
          <TouchableOpacity onPress={()=> setFlyingDate(true)} activeOpacity={.6}>
          <View>
          <Text style={{marginTop:0}}>{selectedRange.secondDate}</Text>
          {/* <Text style={{color:"black"}}>{route.params.myData}</Text> */}
          </View>
          </TouchableOpacity>
          <View style={{marginLeft:0,
          position: "absolute",
          top:28,
          // marginTop:30,
                        width: width-240,
                        height: 1,
                        backgroundColor: COLOR.grey,}}/>

          </View>
            </Animatable.View>:null}

            </View>
            </View>

            {/* --------------------------------------------------------------------------------------------------------- */}



            </View>
            {/* { isVisible ? <Animatable.View animation="lightSpeedIn">
                <Text style={[styles.title,{paddingLeft:-20}]}>Return Form</Text>
            <TextInput
            placeholder="Return"
             style={styles.input}
             onChangeText={returndateText}
             value={returndatetext}
            />
            </Animatable.View>:null} */}

            </View>
                <EBFClassbtnfunction/>
                            <View style= {{flexDirection:'row' , justifyContent:'space-around'}}>
             
             <View>
             <View>
               <Text style = {{marginTop:10 ,color:COLOR.secondary, marginLeft:14 }}>
                 Adult(+18)
               </Text>
             </View>  
             <View style = {{marginTop:4}}>
             <Counter/>
             </View>
             </View>

            
             <View>
             <View>
               <Text style = {{marginTop:10 , marginLeft:5 ,color:COLOR.secondary}}>
                 Childern(0-12)
               </Text>
             </View>
             <View style = {{marginTop:4}}>
             <Counter/>
             </View>
             </View>

            
             <View>
             <View>
               <Text style = {{marginTop:10 ,color:COLOR.secondary ,marginRight:5}}>
                 Infant(on Lap)
               </Text>
             </View>
             <View style = {{marginTop:4}}>
             <Counter/>
             </View>
             </View>
             </View>
                
            <View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('FlightSearchtwo')} >
                <View style={{alignItems: 'center',justifyContent: 'center', marginBottom:50,backgroundColor:"#195fb9",borderRadius:30,marginTop:20}}>
                    <Text style={{color:COLOR.white, fontSize:20,padding:10,fontWeight:'bold'}}>Search</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>

        </ScrollView>
            </View>
        </Animatable.View>
      </View>
    );
}

const HeaderButtons = (props) =>{
    return(
        <View>
        <TouchableOpacity activeOpacity={0.6} style={{
            backgroundColor: props.activetab === props.text ? COLOR.secondary: COLOR.white,
            borderRadius:30,
            paddingVertical:6,
            paddingHorizontal:16,
        }}
        onPressIn={() =>{ props.setActiveTab(props.text)}}
        onPress={props.onPress}
        // onPress={()=>ffFun()}
        >
            <Text style={{color: props.activetab === props.text?COLOR.white:COLOR.secondary,fontSize:15,fontWeight:'900'}}>{props.text}</Text>
            {/* <Button style={{color: props.activetab === props.text?COLOR.white:COLOR.secondary,fontSize:15,fontWeight:'900'}} title={props.text}/> */}
        </TouchableOpacity>
        </View>
    )
}


const Counter = () => {
    const [count , setCount] = useState(1)

    const Increment =() => (
      setCount(prevCount => prevCount + 1 )
    )

    const Decrement =() => (
        <View>
      {count > 1 ? setCount( prevCount => prevCount - 1   ): setCount(1)}
      </View>
    )


    return (
        <View>
           <View style = {styles.SignDiv}>
              <View>
             <TouchableOpacity onPress={Decrement}>
             <Text style = {styles.DecrementSign}>-</Text>
                </TouchableOpacity>
              </View>
              <View style= {{justifyContent:'center', alignItems:'center'}}>
                <Text style = {{fontSize:13, marginLeft:15, width:24  }}>{count}</Text>
              </View>
              <View>
              <TouchableOpacity onPress={Increment}>
                <Text style = {styles.IncrementSign}>+</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
    );
}
const EBFClassbtnfunction = () =>{
    const [activetab, setActiveTab] = useState('Economy');

    return (
        <View>
            <View style={{width:width/1.1 ,marginVertical:12}}>
                <View style={styles.btn}>
                <View>
            <Text><EBFClassbtn 
            text="Economy" 
            btncolor={COLOR.secondary }
            textcolor="white"
            activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><EBFClassbtn
             text="PremiumEconomy" 
             btncolor={COLOR.secondary }
             textcolor={COLOR.white}
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><EBFClassbtn
             text="Business" 
             btncolor={COLOR.white }
             textcolor={COLOR.secondary}
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><EBFClassbtn
             text="First" 
             btncolor={COLOR.secondary}
             textcolor={COLOR.white}
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View>
            </View>
        </View>
    );
}

const EBFClassbtn = (props) => {
    return(
        <View>
        <TouchableOpacity style={{
            backgroundColor: props.activetab === props.text ? COLOR.secondary : COLOR.white,
            borderRadius:30,
            paddingVertical:6,
            paddingHorizontal:16,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{color: props.activetab === props.text?COLOR.white:COLOR.secondary,fontSize:11.5,fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLOR.primary,
    },
    flightpage:{
        flex:1,
        marginTop:100,
        backgroundColor:COLOR.white,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    SignDiv:{
      flexDirection:'row',
      borderWidth:1,
      borderColor:COLOR.secondary,     
      alignItems:"center",
      height:30,
      width:80,
      marginLeft:5,
      borderRadius:10
  },
  IncrementSign:{
     fontSize:25,
     paddingLeft:1,
     color:COLOR.secondary
  },
  DecrementSign:{
     fontSize:25,
     paddingLeft:10,
     color:COLOR.secondary
   },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    btn:{
        flexDirection:'row',
        alignSelf: 'center',
        // padding:20,
        margin:20,
        borderWidth:1,
        borderColor:COLOR.secondary, borderRadius:30,
    },
    input: {
        width:width - 230,
        height: 40,
        // borderWidth: 1,
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor: COLOR.grey,
      },
      title:{
        color:COLOR.primary,
        fontWeight:'bold',
        fontSize:12,
        paddingLeft:20
      },
      adultNo:{
        borderWidth:2,
        alignItems: "center",
         borderColor:COLOR.primary,
          paddingHorizontal:5,
          marginRight:10,
          borderRadius:8,
          justifyContent: "center"
      },
      AddNo:{
        borderWidth:2,
        alignItems: "center",
        justifyContent: "center",
        borderColor:COLOR.primary ,
         borderRadius:8,
         paddingHorizontal:5,
         paddingVertical:3
      },
      footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    flightDest:{
      marginLeft:5,
      marginBottom:10,
      width:160,
    },
    centeredView: {
      flex: 1,
      justifyContent: "flex-start",
      marginTop: 210,
      backgroundColor:COLOR.white,
      borderTopEndRadius:30,
      borderTopStartRadius:30,
    },
    modalView:{
        marginVertical:20
    },
    selectedDateContainerStyle: {
      height: 35,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "blue",
    },
    selectedDateStyle: {
      fontWeight: "bold",
      color: "white",
    },
})

export default Flightsearch;


