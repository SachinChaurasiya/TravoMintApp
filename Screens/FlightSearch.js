import React,{useState} from 'react';
import {View,StatusBar, StyleSheet,Text,TouchableOpacity,TextInput,Dimensions,Picker,Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

// color
import COLOR from '../assets/consts/colors'

const width = Dimensions.get("screen").width;

 export const Flightsearch = ({navigation}) => {
    const [activetab, setActiveTab] = useState('Round Trip');
    const [text, onChangeText] = React.useState("Flight");
    // const [selectedValue, setSelectedValue] = useState("Economy");

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor={COLOR.secondary} barStyle="light-content"/>
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
            btncolor={COLOR.primary}
            textcolor={COLOR.white}
            activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
            <View>
            <Text><HeaderButtons
             text="One Way" 
             btncolor={COLOR.primary} 
             textcolor={COLOR.primary}
             activetab={activetab}
            setActiveTab={setActiveTab}/></Text>
            </View>
                </View>
                {/* <FlightForm/> */}
                <View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            {/* <Text>Hello</Text> */}
            <View>
                <Text style={styles.title}>Flying From</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Fontisto name="plane" size={18} color={COLOR.primary}/>
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
                <FontAwesome5 name="calendar-alt" size={18} color={COLOR.primary}/>
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
                <EBFClassbtnfunction/>
                <View style={{flexDirection: 'row'}}>
                <Counter/>
                <Counter/>
                <Counter/>
                </View>
                
            <View>
                <View style={{alignItems: 'center',justifyContent: 'center', marginTop:20,backgroundColor:COLOR.secondary,borderRadius:30}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('FlightSearchResult')} >
                    <Text style={{color:COLOR.white, fontSize:20,padding:10,fontWeight:'bold'}}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{color: props.activetab === props.text?COLOR.white:COLOR.secondary,fontSize:15,fontWeight:'900'}}>{props.text}</Text>
        </TouchableOpacity>
        </View>
    )
}


const Counter = () => {
    const [count , setCount] = useState(0)

    const Increment =() => (
      setCount(prevCount => prevCount + 1 )
    )

    const Decrement =() => (
      setCount( prevCount => prevCount - 1   )
    )


    return (
        <View>
            <View style = {styles.SignDiv}>
                <View>
               <TouchableOpacity onPress={Increment}>
                  <Text style = {styles.IncrementSign}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style= {{justifyContent:'center', alignItems:'center'}}>
                  <Text style = {{fontSize:20, marginLeft:4, width:24  }}>{count}</Text>
                </View>
                <View>
                <TouchableOpacity onPress={Decrement}>
                  <Text style = {styles.DecrementSign}>-</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const EBFClassbtnfunction = () =>{
    const [activetab, setActiveTab] = useState('Business');

    return (
        <View>
            <View style={{marginHorizontal:20,marginVertical:12}}>
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
            <Text style={{color: props.activetab === props.text?COLOR.white:COLOR.secondary,fontSize:13,fontWeight:'900'}}>{props.text}</Text>
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
        flexDirection:'row' , 
        margin:20 ,
        borderWidth:1 ,
        width:75 , 
        justifyContent:'space-around', 
        alignItems:'space-around', 
        alignItems:'center', 
        borderRadius:10,
        borderColor:COLOR.secondary, 
    },
    IncrementSign:{
        fontSize:15,
        height:25,
        marginTop:2 
    },
    DecrementSign:{
        fontSize:15,
        marginTop:2,  
        height:25,
        marginRight:10
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
})

export default Flightsearch;


