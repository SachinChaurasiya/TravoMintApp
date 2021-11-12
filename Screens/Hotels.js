import React,{useState} from 'react';
import { View ,Text , StyleSheet , TextInput , Button , ScrollView , TouchableOpacity  } from "react-native"
import * as Animatable from 'react-native-animatable';
// import Counter from '../Components/Counter';
// import Cards from '../Screens/FlightSearchResult';
// import BestOffer from '../Components/Home/BestOffer';

// color
import COLOR  from '../assets/consts/colors'





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







const HotelForm = () => {


    return(
        <View style= {styles.container}>
          <View style ={styles.header} >
            {/* <Text>HLO</Text> */}
            <Animatable.View animation="fadeInUpBig"
            style={styles.footer}>
            <View style = {styles.Form}>
               <View> 
                     <Text style = {styles.Text}>
                        Destination
                     </Text>
                </View>
                <View style= {styles.DestinationInput}>
                  <TextInput
                  placeholder="Destination"
                  placeholderTextColor='grey'
                  />
                </View>

        <View style = {{flexDirection:'row' , justifyContent:"space-between" , marginTop:15}}>
                
                <View>
                <View> 
                     <Text style = {styles.Text}>
                       Check-In
                     </Text>
                </View>
                  <TextInput
                  style= {styles.CheckInput}
                  placeholder="Check-In"
                  placeholderTextColor="#ccc"
                  />
                </View>

            
                <View >
                <View> 
                     <Text style = {styles.Text}>
                        Check-Out
                     </Text>
                </View>
                  <TextInput
                  style= {styles.CheckInput}
                  placeholder="Check-Out"
                  placeholderTextColor="#ccc"
                  />
                </View>

            
                <View>
                <View> 
                     <Text style = {styles.Text}>
                        Nights
                     </Text>
                </View>
                  <TextInput
                  style= {styles.CheckInput}
                  placeholder="Nights"
                  placeholderTextColor="#ccc"
                  />
                </View>
            </View>       
            </View>


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
            <TouchableOpacity onPress={()=>alert('This is a button')}>
            <View style={{alignItems: 'center',justifyContent: 'center', marginTop:30,backgroundColor:COLOR.secondary, marginLeft:10 , marginRight:10,borderRadius:30}}>
                    <Text style={{color:COLOR.white, fontSize:20,padding:10,fontWeight:'bold'}}>Search Hotels</Text>  
                </View>
                </TouchableOpacity>

                </Animatable.View>
              
          </View>
          
        </View>
    )
}

  


const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLOR.primary
  },
  header:{
    marginTop:150,
    flex: 1,
        justifyContent: 'flex-end',
        // paddingBottom: 50
  },
  footer:{
    flex: Platform.OS === 'ios' ? 3 : 2,
        backgroundColor: COLOR.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
  },
  Form:{
    // justifyContent:"center",
    margin:20
  },
  DestinationInput :{
    borderBottomWidth:1,
    borderBottomColor:COLOR.grey,
    height:30,
    paddingTop:10
  },
  Text:{
    color:COLOR.primary,
    fontWeight:'bold',
    marginTop:10

  },
  CheckInput:{
    borderBottomWidth:1,
    borderBottomColor:COLOR.grey,
    width:100,
    paddingTop:10
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
 }
})

export default HotelForm;