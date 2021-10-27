import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import costumerservice from '../../assets/Image/costumerService.png';
import notification from '../../assets/Image/bell.png';
import setting from '../../assets/Image/setting.png';
import referEarn from '../../assets/Image/ReferEarn.png';
import COLORS from '../../assets/consts/colors'


const Separator = () => (
    <View style ={styles.separator}></View>
  )
  

const Accordionlist = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems: 'center',paddingHorizontal:12}}>
                <View>
                    <Image source={costumerservice} style={{width: 30, height: 30}}/>
                </View>
                <View style={{paddingHorizontal:12}}>
                <Text>Customer Service</Text>
                <Text>Allow us to help you</Text>
                </View>
                
            </View>
            <Separator/>
            <View style={{flexDirection: 'row',alignItems: 'center',paddingHorizontal:12}}>
                <View>
                    <Image source={notification} style={{width: 30, height: 30}}/>
                </View>
                <View style={{paddingHorizontal:12}}>
                <Text>Customer Service</Text>
                <Text>Allow us to help you</Text>
                </View>
                
            </View>
            <Separator/>
            <View style={{flexDirection: 'row',alignItems: 'center',paddingHorizontal:12}}>
                <View>
                    <Image source={costumerservice} style={{width: 30, height: 30}}/>
                </View>
                <View style={{paddingHorizontal:12}}>
                <Text>Customer Service</Text>
                <Text>Allow us to help you</Text>
                </View>
                
            </View>
            <Separator/>
            <View style={{flexDirection: 'row',alignItems: 'center',paddingHorizontal:12}}>
                <View>
                    <Image source={referEarn} style={{width: 30, height: 30}}/>
                </View>
                <View style={{paddingHorizontal:12}}>
                <Text>Customer Service</Text>
                <Text>Allow us to help you</Text>
                </View>
                
            </View>
            <Separator/>
            <View style={{flexDirection: 'row',alignItems: 'center',paddingHorizontal:12}}>
                <View>
                    <Image source={setting} style={{width: 30, height: 30}}/>
                </View>
                <View style={{paddingHorizontal:12}}>
                <Text>Customer Service</Text>
                <Text>Allow us to help you</Text>
                </View>
                
            </View>
            <Separator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginTop:150,
        paddingHorizontal:12,
        // backgroundColor: COLORS.white,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
})

export default Accordionlist;
