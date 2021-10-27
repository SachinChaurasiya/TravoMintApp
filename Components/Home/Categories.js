import React from 'react'
import { View , Text ,Image } from 'react-native'

const Categories = () => {
    return(
        <View>
            <View>
                <View style = {{backgroundColor: '#F3EDF6' }}>
                    <Text style= {{fontSize:29 , margin:20}}>
                        Categories
                    </Text>
                    <Text style= {{marginTop:30, color:'grey' , marginLeft:20}}>
                        Much  destinations here but don't be confused! It's
                    </Text>
                    <Text style ={{marginLeft:20 , color:'grey'}}> 
                        already grouped By category
                    </Text>





        <View style= {{margin:20 , flexDirection:'row' , justifyContent:'space-between' , alignItems: 'center' }}>
<View style = {{alignItems: 'center'}}>
        <View>
                <Image
                source={require('../../assets/Image/Beach.png')}
                style = {{width:90,height:90}}
                />
            </View>
            <View>
                <Text>Beach</Text>
            </View>
</View>

<View style = {{alignItems: 'center'}}>
            <View>
                <Image
                source ={require('../../assets/Image/Mount.png')}
                style = {{width:90,height:90}}
                />
            </View>
            <View  >
                <Text>Mountain</Text>
            </View>
</View>

<View style = {{alignItems:'center'}}>
            <View>
                <Image 
                source={require('../../assets/Image/Desert.png')}
                style = {{width:90,height:90}}
                 />
            </View>            
            <View >
                <Text>Desert</Text>
            </View>
</View>
     </View>  
                </View>
            </View>
     
        </View>
    )
}

export default Categories;