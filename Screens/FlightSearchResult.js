import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Notificationscreen from './NotificationScreen';

const Flightsearchresult = () => {
    return (
        <View style={styles.container}>
            <Notificationscreen/>
        </View>
    );
}

const styles = StyleSheet.create({container: {flex: 1,backgroundColor:"#fff"}});

export default Flightsearchresult;
