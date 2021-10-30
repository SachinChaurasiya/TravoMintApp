import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import HeaderTab from '../Components/Home/HeaderTab';
import Accordionlist from '../Components/More/AccordionList';
import Moreheader from '../Components/More/MoreHeader';
const More = () => {
    return (
        <View style={styles.container}>
            {/* <HeaderTab/> */}
            <Accordionlist/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,backgroundColor:"#fff"
    }
})

export default More;

