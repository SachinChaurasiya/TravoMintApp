// import React , {useState} from 'react'
// import { StyleSheet ,TextInput,Button,ScrollView, View , Text , Platform }  from 'react-native'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { Picker } from "@react-native-picker/picker";
// import BestOffer from '../Components/Home/BestOffer';

// import Notificationscreen from './NotificationScreen';


// const FlightSearch =(props)=>{

//     const [selectedValue , setSelectedValue] = useState("Select")
//     const [secondselectedValue , setSecondSelectedValue] = useState("Select Class")
    

//     // const [date, setDate] = useState(new Date(1598051730000));
//     // const [mode, setMode] = useState('date');
//     // const [show, setShow] = useState(false);

//     // const onChange = (event, selectedDate) => {
//     //     const currentDate = selectedDate || date;
//     //     setShow(Platform.OS === 'ios');
//     //     setDate(currentDate);
//     //   };
    
//     //   const showMode = (currentMode) => {
//     //     setShow(true);
//     //     setMode(currentMode);
//     //   };
    
//     //   const showDatepicker = () => {
//     //     showMode('date');
//     //   };
    

//     return(
       
//        <ScrollView>
//        <>
//         <View style={{flex:1,}}>
//         <View style= {{padding:10 , borderWidth:1 , borderColor:'grey' , borderRadius:10,height:280 , margin:10 }}>
//             <View>
//                 <View style ={styles.btn}>
//                     <View>
//                        <Button
//                        color="#195fb9"
//                        title = "Round Trip" />
//                     </View>
//                     <View style = {{marginRight:30}}>
//                        <Button
//                        color="#195fb9"
//                        title = "One Way" />
//                     </View>
//                 </View> 
//             </View> 
//            <View style = {styles.InputDiv}> 
//             <View>
//                 <TextInput
//                 style={styles.placeholder}
//                 keyBoard="alphabetic"
//                 placeholder='From'
//                 />
//             </View>


// <View style = {{marginTop:10 , height:40,width:40 }}>
//     <FontAwesome5
//     name="exchange-alt"
//     color="#195fb9"
//     size={30}
//      />
// </View>

//             <View>
//                 <TextInput
//                 style={[styles.placeholder,{marginRight:20}]}
//                 placeholder='To'
//                 keyBoard="alphabetic"
//                 />
//             </View>

//          </View>
         
//          <View style = {styles.InputDiv}>
//           <View>
//                 <TextInput
//                 style={styles.placeholder}
//                 placeholder='Departure'
//                 keyBoard="alphabetic"
//                 />
//             </View>

//             <View>
//                 <TextInput
//                 style={[styles.placeholder,{marginRight:20}]}
//                 placeholder='Arrive'
//                 keyBoard="alphabetic"
//                 />
//             </View>
//          </View>
       
//        <View style = {{flexDirection:"row" , justifyContent:'space-between'}}>
//        <View>  
//              <Picker   
//                  selectedValue={selectedValue}
//                  style={{height:30,width:140,border:'none' ,marginTop:10}}
//                  onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}
//                  > 
//                    <Picker.Item label = "Adult(18+)" value="Adutl"  />
//                   <Picker.Item label = "Children(2-11YRS)" value="Children" />
//                   <Picker.Item label = "Infant(On lap)" value="Infant(on lap)" />
//               </Picker> 
//       </View>

//       <View>
//         <Picker  
//                  selectedValue={secondselectedValue}
//                  style={{height:30,width:140,border:'none', marginTop:10}}
//                  onValueChange={(itemValue,itemIndex) => setSecondSelectedValue(itemValue)}
//                  > 
//                     <Picker.Item label ="Economy" value="Economy" />
//                     <Picker.Item label ="PremiumEconomy" value="Pe" />
//                     <Picker.Item label ="Business" value="Business" />
//                     <Picker.Item label ="First Class" value="Fc" />
//               </Picker>
//       </View>
//       </View>
//          <View>
//              <View style={{ marginHorizontal:50 , marginTop:50 }} >
//                  <Button
//                  onPress={()=>props.navigation.navigate('FlightSearchResult')}
//                  title ="Search"
//                  color="#195fb9"
//                  />
//              </View>
//          </View>
         
//         </View>
//         <View style= {{marginTop:50}}>
//         <BestOffer />
//         </View>
//         </View>
//         </>
//         </ScrollView>
//     )
// }



// const styles= StyleSheet.create({
//     InputDiv:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//     },
//     placeholder:{
//         borderBottomWidth:1,
//         borderBottomColor:"grey",
//         width:100,
//         height:40,
//         color:'black'
//     },
//     btn:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//     }

// })
// export default FlightSearch;


import React,{useState} from 'react';
import {View, StyleSheet,Text,TouchableOpacity,TextInput,Dimensions,Picker,Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get("screen").width;

const Flightsearch = (props) => {
    const [activetab, setActiveTab] = useState('Round Trip');

    return (
        <View style={styles.container}>
            <View style={styles.flightpage}>
                <View style={styles.btn}>
                <View>
            <Text><HeaderButtons 
            text="Round Trip" 
            btncolor="#195fb9" 
            textcolor="white"
            activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><HeaderButtons
             text="One Way" 
             btncolor="white" 
             textcolor="#195fb9"
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View>
                <FlightForm {...props}/>
            </View>
        </View>
    );
}

const HeaderButtons = (props) =>{
    return(
        <View>
        <TouchableOpacity activeOpacity={0.6} style={{
            backgroundColor: props.activetab === props.text ? "#195fb9" : "white",
            borderRadius:30,
            paddingVertical:6,
            paddingHorizontal:16,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{color: props.activetab === props.text?"white":"#195fb9",fontSize:15,fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}


const FlightForm = (props) =>{
    const [text, onChangeText] = React.useState("Flight");
    const [selectedValue, setSelectedValue] = useState("Economy");

    return (
        <View style={styles.mainForm}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            {/* <Text>Hello</Text> */}
            <View>
                <Text style={styles.title}>Flying From</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Fontisto name="plane" size={18} color="#195fb9"/>
            <TextInput
             style={styles.input}
             onChangeText={onChangeText}
             value={text}
            />
            </View>
            </View>
            <View>
            <Text style={[styles.title,{paddingLeft:-20}]}>Flying To</Text>
            <TextInput
             style={styles.input}
             onChangeText={onChangeText}
             value={text}
             underlineColorAndroid="transparent"
            />
            </View>
            </View>


            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:20}}>
                <View>
            <Text style={styles.title}>Flying Date</Text>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <FontAwesome5 name="calendar-alt" size={18} color="#195fb9"/>
            <TextInput
             style={styles.input}
             onChangeText={onChangeText}
             value={text}
            />
            </View>
            </View>
            <View>
                <Text style={[styles.title,{paddingLeft:-20}]}>Return Form</Text>
            <TextInput
             style={styles.input}
             onChangeText={onChangeText}
             value={text}
            />
            </View>

            </View>

            <View style={{flexDirection: 'row',justifyContent: 'space-between',margin:12}}>
                <View style={{borderBottomWidth:1, borderBottomColor: '#ccc'}}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
             >
            <Picker.Item label="Java" value="java" />
             <Picker.Item label="JavaScript" value="js" />
          </Picker>
          </View>

          <View style={{borderBottomWidth:1, borderBottomColor: '#ccc'}}>
            <Picker
              selectedValue={selectedValue}
              underlineColorAndroid={"#000"}
              style={{ height: 50, width: 150,flex:1 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
             >
            <Picker.Item label="Economy" value="Economy" />
             <Picker.Item label="PremiumEconomy" value="PremiumEconomy" />
             <Picker.Item label="Business" value="Business" />
             <Picker.Item label="First" value="First" />
          </Picker>
          </View>
            </View>
                <EBFClassbtnfunction/>
                <AdultChildInfant/>

            <View>
                <View style={{alignItems: 'center',justifyContent: 'center', marginTop:20,backgroundColor:"#195fb9",borderRadius:30}}>
                    <Pressable onPress={()=>props.navigation.navigate("FlightSearchResult")} >
                    <Text style={{color: 'white', fontSize:20,padding:10,fontWeight:'bold'}}>Search</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const EBFClassbtnfunction = () =>{
    const [activetab, setActiveTab] = useState('Business');

    return (
        <View>
            <View>
                <View style={styles.btn}>
                <View>
            <Text><EBFClassbtn 
            text="Economy" 
            btncolor="#195fb9" 
            textcolor="white"
            activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><EBFClassbtn
             text="Business" 
             btncolor="white" 
             textcolor="#195fb9"
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><EBFClassbtn
             text="First Class" 
             btncolor="#195fb9" 
             textcolor="white"
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
            backgroundColor: props.activetab === props.text ? "#195fb9" : "white",
            borderRadius:30,
            paddingVertical:6,
            paddingHorizontal:16,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{color: props.activetab === props.text?"white":"#195fb9",fontSize:15,fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}

const AdultChildInfant = () =>{
    return(
        <View>
            <View style={{flexDirection:'row',alignItems: 'center'}}>
                <View style={{marginTop:25}}>
                    <FontAwesome5 name="user" size={18} color="#195fb9"/>
                </View>
                <View style={{flexDirection:'row',alignItems:"center"}}>
                <View style={{marginLeft:10}}>
{/* Adult */}
                    <Text style={{marginBottom:10}}>Adult</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={0.6}>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9', paddingHorizontal:10,marginRight:10,borderRadius:8,justifyContent: "center"}}>
                    <Text style={{paddingVertical:5}}>1</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9' , paddingHorizontal:10, borderRadius:8,justifyContent: "center"}}>
                    <Text style={{paddingVertical:5}}>2</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9' , paddingHorizontal:5, borderRadius:8,justifyContent: "center",marginLeft:10}}>
                    <Text style={{padding:5}}>3</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center",justifyContent: "center",borderColor:'#195fb9' , borderRadius:8,marginHorizontal:10,paddingHorizontal:10,paddingVertical:3}}>
                    <FontAwesome5 name="plus" size={12} color="#000" style={{paddingVertical:5}}/>
                    </View>
                    </TouchableOpacity>
                    </View>
                </View>
{/* child */}
                <View style={{marginLeft:10}}>
                    <Text style={{marginBottom:10}}>Child</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9', paddingHorizontal:10,marginRight:10,borderRadius:8,justifyContent: "center"}}>
                    <Text style={{paddingVertical:5}}>0</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9' , paddingHorizontal:10, borderRadius:8,justifyContent: "center"}}>
                    <Text style={{paddingVertical:5}}>1</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9' , paddingHorizontal:5, borderRadius:8,justifyContent: "center",marginLeft:10}}>
                    <Text style={{padding:5}}>2</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center",justifyContent: "center",borderColor:'#195fb9' , borderRadius:8,marginHorizontal:10,paddingHorizontal:10,paddingVertical:3}}>
                    <FontAwesome5 name="plus" size={12} color="#000" style={{paddingVertical:5}}/>
                    </View>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
{/* infants */}
            <View style={{marginLeft:25,marginTop:20}}>
                    <Text style={{marginBottom:10}}>Infant</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9', paddingHorizontal:10,marginRight:10,borderRadius:8,justifyContent: "center"}}>
                    <Text style={{paddingVertical:5}}>0</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9' , paddingHorizontal:10, borderRadius:8,justifyContent: "center"}}>
                    <Text style={{paddingVertical:5}}>1</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center", borderColor:'#195fb9' , paddingHorizontal:5, borderRadius:8,justifyContent: "center",marginLeft:10}}>
                    <Text style={{padding:5}}>2</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{borderWidth:2,alignItems: "center",justifyContent: "center",borderColor:'#195fb9' , borderRadius:8,marginHorizontal:10,paddingHorizontal:10,paddingVertical:3}}>
                    <FontAwesome5 name="plus" size={12} color="#000" style={{paddingVertical:5}}/>
                    </View>
                    </TouchableOpacity>
                    </View>
                </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#195fb9"
    },
    flightpage:{
        flex:1,
        marginTop:100,
        backgroundColor:"#fff",
        borderTopEndRadius:30,
        borderTopStartRadius:30,
    },
    btn:{
        flexDirection:'row',
        alignSelf: 'center',
        // padding:20,
        margin:20,
        borderWidth:1,
        borderColor:"#195fb9", borderRadius:30,
    },
    mainForm:{
        paddingHorizontal:12
    },
    input: {
        width:width - 230,
        height: 40,
        // borderWidth: 1,
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor: '#ccc',
      },
      title:{
        color:"#195fb9",
        fontWeight:'bold',
        fontSize:12,
        paddingLeft:20
      }
})

export default Flightsearch;
