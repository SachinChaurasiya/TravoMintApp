import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';

const Width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Separator = () => <View style={styles.separator} />;

const NotificationScreen = () => {
    return (
        <>
            <View style={{ backgroundColor: COLOR.white, flex: 1 }}>
                {/* <StatusBar backgroundColor={COLOR.secondary}/> */}
                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: COLOR.primary,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        <View style={styles.Logo}>
                            <View>
                                {/* <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                /> */}
                                <Text style={{ color: COLOR.primary }}>
                                    Flights
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 20,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}
                            >
                                Flat 100 OFF On Domestic Flight
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: COLOR.white,
                                        }}
                                    >
                                        Flat 100 OFF Discount For New User only
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 5 }}>
                                    <FontAwesome5
                                        name="chevron-right"
                                        color={COLOR.white}
                                        size={18}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Separator />

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: COLOR.primary,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        <View style={styles.Logo}>
                            <View>
                                {/* <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                /> */}
                                <Text style={{ color: COLOR.primary }}>
                                    Flights
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 20,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}
                            >
                                Flat 100 OFF On Domestic Flight
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: COLOR.white,
                                        }}
                                    >
                                        Flat 100 OFF Discount For New User only
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 5 }}>
                                    <FontAwesome5
                                        name="chevron-right"
                                        color={COLOR.white}
                                        size={18}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Separator />

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: COLOR.primary,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        <View style={styles.Logo}>
                            <View>
                                {/* <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                /> */}
                                <Text style={{ color: COLOR.primary }}>
                                    Flights
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 20,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}
                            >
                                Flat 100 OFF On Domestic Flight
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: COLOR.white,
                                        }}
                                    >
                                        Flat 100 OFF Discount For New User only
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 5 }}>
                                    <FontAwesome5
                                        name="chevron-right"
                                        color={COLOR.white}
                                        size={18}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Separator />

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: COLOR.primary,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        <View style={styles.Logo}>
                            <View>
                                {/* <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                /> */}
                                <Text style={{ color: COLOR.primary }}>
                                    Flights
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 20,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}
                            >
                                Flat 100 OFF On Domestic Flight
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: COLOR.white,
                                        }}
                                    >
                                        Flat 100 OFF Discount For New User only
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 5 }}>
                                    <FontAwesome5
                                        name="chevron-right"
                                        color={COLOR.white}
                                        size={18}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Separator />

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: COLOR.primary,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        <View style={styles.Logo}>
                            <View>
                                {/* <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                /> */}
                                <Text style={{ color: COLOR.primary }}>
                                    Flights
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 20,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}
                            >
                                Flat 100 OFF On Domestic Flight
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: COLOR.white,
                                        }}
                                    >
                                        Flat 100 OFF Discount For New User only
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 5 }}>
                                    <FontAwesome5
                                        name="chevron-right"
                                        color={COLOR.white}
                                        size={18}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Separator />

                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: COLOR.primary,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                    >
                        <View style={styles.Logo}>
                            <View>
                                {/* <Image
                  source={require('../assets/Image/logoT.png')}
                  style= {{resizeMode:"contain" , width:20 , height:20 , marginLeft:9}} 
                /> */}
                                <Text style={{ color: COLOR.primary }}>
                                    Flights
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: 20,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}
                            >
                                Flat 100 OFF On Domestic Flight
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: COLOR.white,
                                        }}
                                    >
                                        Flat 100 OFF Discount For New User only
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 5 }}>
                                    <FontAwesome5
                                        name="chevron-right"
                                        color={COLOR.white}
                                        size={18}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Separator />
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    NotifyDiv: {},
    Logo: {
        width: 50,
        margin: 10,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLOR.grey,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.white,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: COLOR.primary,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default NotificationScreen;
