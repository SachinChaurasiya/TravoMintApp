import React from 'react'
import { View, TouchableOpacity , Text ,Image,StyleSheet } from 'react-native'
import COLOR from '../../assets/consts/colors';

const Categories = () => {
    return(
        <View>
            <View>
                <View style={{marginTop:-35}}>
            <View style= {{flexDirection:'row' , alignItems:'center'}}>
                    <View style= {{marginBottom:4}}>
                      <Text style ={styles.text}>
                         CATEGORIES
                     </Text>
                  </View>
                  <View style = {{
                      marginTop:36,
                      marginLeft:5
                  }}>
                  </View>
                </View>
                <View style={{marginBottom:15}}>
                <View style={{
                        marginLeft:20,
                        width: 200,
                        height: 1,
                        backgroundColor: COLOR.secondary,
                    }}></View>
                    
                    <View style={{
                        marginTop:5,
                        marginLeft:20,
                        width: 150,
                        height: 1,
                        backgroundColor: COLOR.secondary,
                    }}></View>
                    </View>
                    </View>

                <View style = {{backgroundColor: COLOR.lightpink}}>
                    <Text style= {{marginTop:30, color:'grey' , marginLeft:20}}>
                        Much  destinations here but don't be confused! It's
                    </Text>
                    <Text style ={{marginLeft:20 , color:'grey'}}> 
                        already grouped By category
                    </Text>





        <View style= {{margin:20 , flexDirection:'row' , justifyContent:'space-between' , alignItems: 'center' }}>
        <TouchableOpacity  onPress ={()=>alert('This is clickable')}>
  <View style = {{alignItems: 'center'}}>
        <View>
                <Image
                source={require('../../assets/Image/Beach.png')}
                style = {{width:90,height:90}}
                />
            </View>
            <View style= {{margin:10}}>
                <Text style = {{fontWeight:'bold' , fontSize:15}}>Beach</Text>
            </View>
</View>
</TouchableOpacity>

<TouchableOpacity   onPress ={()=>alert('This is clickable')}>
<View style = {{alignItems: 'center'}}>
            <View>
                <Image
                source ={require('../../assets/Image/Mount.png')}
                style = {{width:90,height:90}}
                />
            </View>
            <View style= {{margin:10}} >
                <Text style = {{fontWeight:'bold' , fontSize:15}}>Mountain</Text>
            </View>
</View>
</TouchableOpacity>

<TouchableOpacity   onPress ={()=>alert('This is clickable')}>
<View style = {{alignItems:'center'}}>
            <View>
                <Image 
                source={require('../../assets/Image/Desert.png')}
                style = {{width:90,height:90}}
                 />
            </View>            
            <View style= {{margin:10}} >
                <Text style = {{fontWeight:'bold' , fontSize:15}}>Desert</Text>
            </View>
</View>
</TouchableOpacity>
     </View>  
                </View>
            </View>
     
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        marginTop:40,
        marginLeft:30,
        fontSize:20,
        color:COLOR.primary
    },
})
export default Categories;