import React from 'react'
import { View , Text, StyleSheet,Dimensions , TouchableOpacity, Image , FlatList } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const DATA = [
    {
        "id":1,
        "Day":"Tue",
        "Date":'11-Nov-2021',
        "From":"DEL",
        "Place1":"New delhi",
        "To":"IXC",
        "Place2":"Chandigarh",
        "price":"1280.00INR",
        "image":require('./assets/Image/G8.png')
    },
    {
        "id":2,
        "Day":"Tue",
        "Date":'12-AUG-2021',
        "From":"DEL",
        "Place1":"New delhi",
        "To":"IXC",
        "Place2":"Chandigarh",
        "price":"1370.00INR",
        "image":require('./assets/Image/2T.png')
    },
    {
        "id":3,
        "Day":"Tue",
        "Date":'03-JAN-2021',
        "From":"MAA",
        "Place1":"chennai",
        "To":"HYD",
        "Place2":"Hyderabad",
        "price":"1690.00INR",
        "image":require('./assets/Image/G8.png')
    },
    {
        "id":4,
        "Day":"Tue",
        "Date":'19-Nov-2021',
        "From":"IXC",
        "Place1":"Chandigarh",
        "To":"DEL",
        "Place2":"New delhi",
        "price":"5620.00INR",
        "image":require('./assets/Image/2T.png')
    },
]
const Separator = () => (
    <View style ={styles.separator}></View>
  )


  const Item = ({ Day , Date , From ,To ,price , Place1,Place2 , image }) => (
      <View>

          <View style = {styles.card}>
              <View style = {{flexDirection:'row'}} >
                  <View style = {styles.icon_header} > 
                  <Image source ={require('./assets/Image/Flight1.png')} 
                  style ={{resizeMode:'contain' , width:20 , height:20}} />
                  </View>
                  <View>
                 <Text style = {styles.card_header}>
                 {Day}, {Date}
                </Text>
                </View>
              </View>

         
         <View style ={{borderWidth:1 , borderColor:'#f15b2F' , margin:20 , height:110 , width: 310 , 
         borderRadius:10 ,flexDirection:'row'}}>
                 <View style= {{
                 backgroundColor:'white'  , 
                 width:90,
                 marginTop:2,
                 shadowRadius:5, 
                 shadowOffset:{
                    width: 10, height: 0
                 },
                 elevation:20,
                 shadowOpacity:0.5,
                 shadowColor:'grey' , 
                 height:105 ,
                 borderTopLeftRadius:12,
                 borderBottomLeftRadius:12 ,
                 borderTopRightRadius:40,
                 borderBottomRightRadius:40}}>
                    <Image source={image} style ={{resizeMode:'contain',  width:60,height:60, marginTop:15}} />
                 </View>
               
                 <View style = {{justifyContent:"center" , paddingLeft:50}}>
                    <View style = {{flexDirection:'row'}}>
                     <Text style = {{fontSize:25 , color:"#195fb9"}}>{From} </Text>
                     <Text style = {{marginTop:8}}>{Place1}</Text>
                     </View>

                     <View>
                     <FontAwesome5 
                     style={{marginLeft:40}}
                     name="exchange-alt"
                     color='#195FB9'
                     size={20} />
                     </View>
                    
                    <View style= {{flexDirection:'row'}}>
                        <Text style = {{fontSize:25 , color:"#195fb9"}}>{To}</Text>
                        <Text style = {{marginTop:8 , marginLeft:3}}>{Place2}</Text>
                    </View>
                 </View>
          </View>     

         <TouchableOpacity onPress = {()=>alert("This is Card")}>
            <View style = {{flexDirection:'row', justifyContent:'center'}}>
               
                <View>
                    <Text style = {{fontSize:20 , marginTop:13}}>
                         From 
                    </Text>
                    </View>

                    <View>
                    <Text style = {{fontSize:30 ,marginTop:2}}>{price}</Text>
                    </View>
               
                   <View style= {{ marginTop:5 , backgroundColor:"darkblue" ,height:30 , width:30 , borderRadius:50 , justifyContent:'center' , flexDirection:"row" , marginLeft:5 }}>
                    <FontAwesome5
                    style = {{marginTop:5}}
                    onPress ={() =>alert('This is button')}
                    name="chevron-right"
                    color="white"
                    size={20}
                    />
                    </View>
            </View>
            </TouchableOpacity>
         
          </View>
      </View>
  )





const Cards = () => {

    const renderItem = ({ item }) => (
        <View>
            <Item 
            Day = {item.Day}  
            Date= {item.Date} 
            image={item.image}
            From={item.From}
            To={item.To}
            Place1={item.Place1}
            Place2={item.Place2}
            price={item.price}
            />            
        </View>
    )
    return(
        <>
       
           <View>
               <View style= {{flexDirection:"row"}}>
                    <View>
                            <Text style = {styles.text}>
                                POPULAR DEALS
                           </Text>
                    </View>
               <View style = {{marginTop:12 , marginLeft:4}}>
                    <Image
                         source={require('./assets/Image/Flight1.png')}
                         style = {{width:30 , height:30 , resizeMode:'contain'}} />
               </View>
               </View>

               <View style={{
                        marginLeft:20,
                        width: 220,
                        height: 1,
                        backgroundColor: '#195FB9',
                    }}></View>
                      <View style={{
                        marginTop:5,
                        marginLeft:20,
                        width: 160,
                        height: 1,
                        backgroundColor: '#195FB9',
                    }}></View>
            </View>
            <View>
            <FlatList
              data={DATA}
              horizontal
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              style={{marginLeft:10}}
        />
            </View>
</>
    )
}

const styles =  StyleSheet.create({
    text:{
        marginTop:10,
        marginLeft:16,
        fontSize:25,
        color:'#195FB9'
    },
    card:{
        justifyContent:'center',
        height:250,
        width:350,
        margin:40,
        borderRadius:20,
        backgroundColor: 'whitesmoke',
        marginHorizontal:10,
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon_header:{
        marginLeft:100,
        marginTop:12
    },
    card_header:{
        fontWeight:'bold',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:15,
        marginLeft:5,

    }
})
export default Cards;
