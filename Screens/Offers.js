import React from 'react';
import {View, StyleSheet,Text,ScrollView,Platform,Image} from 'react-native';
import Offerheader from '../Components/Offers/Offerheader';
const Offers = () => {
    return (
        <View style={styles.container}>
            <Offerheader/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    }
})

export default Offers;