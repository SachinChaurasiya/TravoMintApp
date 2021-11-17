import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import offerlogo from '../../assets/Image/discount.png';
import OffersItem from './OffersItem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Offercard = () => {
    return (
        <View style={styles.container}>
            {/* <View style={{flexDirection:'row',justifyContent: 'space-between',paddingHorizontal:30}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:"#F15b2F"}}>Offers</Text>
                    <Image source={offerlogo} style={{width:20,height:20}} color="blue"/>
                </View>
                <View style={{flexDirection:'row',alignItems: 'center'}}>
                    <Text style={{color:"blue"}}>View All </Text>
                    <View>
                        <FontAwesome5 name="chevron-right" color="blue"/>
                    </View>
                </View>
            </View> */}
            <View>
                <OffersItem />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 30,
    },
});

export default Offercard;
