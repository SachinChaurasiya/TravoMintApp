import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../assets/consts/colors';
import TravelGirl from '../../assets/Image/TravelGirl.png';

const Moreheader = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View
                style={{
                    backgroundColor: COLORS.primary,
                    height: 120,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View style={{ paddingTop: 10 }}>
                    <Text style={style.headerTitle}>Log In To Explore</Text>
                    <Text style={style.headertitle}>
                        Get started{' '}
                        <FontAwesome5 name="angle-right" size={18} />{' '}
                    </Text>
                </View>
                <View>
                    <Image
                        source={TravelGirl}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    headerTitle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 23,
    },
    headertitle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Moreheader;
