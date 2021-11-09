import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import COLOR from '../assets/consts/colors'

const Transferscreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Comming Soon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLOR.white,
        alignItems:"center",justifyContent:"center"
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
    }
})

export default Transferscreen;
