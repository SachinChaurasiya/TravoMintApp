import React from'react'
import { View, Text , Animated , FlatList, Image, StyleSheet,Dimensions } from 'react-native'
import Cards from '../../CardsData';




const Data= [
    {
        "id":1,
        "image":require('../../assets/Image/Banner1.png')
    },
    {
        "id":2,
        "image":require('../../assets/Image/Banner2.png')
    },
    {
        "id":3,
        "image":require('../../assets/Image/Banner3.png')
    }
]

const Item =({ image }) => (
    <View style = {{   shadowColor:'grey', shadowRadius:6  ,shadowOpacity:0.5 , justifyContent:'space-between' , paddingRight:20 , paddingLeft:10 ,borderRadius:10 }}>
        <Image source={image} style = {{resizeMode:'contain',width:350 , height:200}} />
    </View>
)


const BestOffer = () => {
    const renderItem = ({ item }) => (
        <View>
            <Item image = {item.image} />
        </View>
    )
    return(
        <View style={{marginTop:-80}}>
            <View>
                <View style= {{flexDirection:'row' , alignItems:'center'}}>
                    <View style= {{marginBottom:4}}>
                      <Text style ={styles.text}>
                         BEST OFFERS
                     </Text>
                  </View>
                  <View style = {{
                      marginTop:6,
                      marginLeft:5
                  }}>
                      <Image 
                      source ={require('../../assets/Image/Offersblue.png')}
                      style = {{resizeMode:"contain" , width:30 , height:30,marginLeft:10 , marginTop:25}}
                      />
                  </View>
                </View>
                
                <View style={{
                        marginLeft:20,
                        width: 200,
                        height: 1,
                        backgroundColor: '#195FB9',
                    }}></View>
                    <View>
                    <View style={{
                        marginTop:5,
                        marginLeft:20,
                        width: 150,
                        height: 1,
                        backgroundColor: '#195FB9',
                    }}></View>
                    </View>

            </View>
            <View>
                <FlatList 
                data={Data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => item.id}
                style={{marginLeft:10}}
                />
            </View>
            <Cards />
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        marginTop:40,
        marginLeft:30,
        fontSize:20,
        color:'#195FB9'
    },
  
})


export default BestOffer;