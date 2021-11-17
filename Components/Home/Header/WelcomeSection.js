import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import WelcomePromo from './WelcomePromo';

// colors
import COLOR from '../../../assets/consts/colors';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const WelcomeSection = ({ navigation }) => {
    return (
        <>
            <View style={{ marginVertical: 80 }}>
                <View>
                    <View style={styles.Background}>
                        <View style={styles.textDiv}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={[styles.text, { fontSize: 15 }]}>
                                    Welcome To{' '}
                                </Text>
                                <Text
                                    style={[
                                        styles.text,
                                        { color: COLOR.white },
                                    ]}
                                >
                                    Travomint
                                </Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: COLOR.white }}>
                                    {' '}
                                    Get These benefits on your first Booking!
                                </Text>
                            </View>
                            <View
                                style={{ marginTop: 5, flexDirection: 'row' }}
                            >
                                <Text
                                    style={{
                                        marginLeft: 4,
                                        color: COLOR.white,
                                    }}
                                >
                                    Use Code :
                                </Text>
                                <Text
                                    style={{
                                        color: COLOR.whitesmoke,
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                    }}
                                >
                                    Welcome
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: 12,
                                position: 'absolute',
                                zIndex: 99,
                                marginTop: 100,
                            }}
                        >
                            <View style={{ justifyContent: 'space-between' }}>
                                <View
                                    style={{
                                        backgroundColor: COLOR.white,
                                        height: 30,
                                        width: 30,
                                        borderRadius: 50,
                                        marginLeft: 8,
                                        justifyContent: 'center',
                                        marginTop: 10,
                                        position: 'absolute',
                                        zIndex: 99,
                                        alignItems: 'center',
                                        shadowRadius: 8,
                                        shadowOpacity: 1,
                                        shadowColor: COLOR.grey,
                                    }}
                                >
                                    <Image
                                        source={require('../../../assets/Image/FlightOrng.png')}
                                        style={{
                                            resizeMode: 'contain',
                                            height: 20,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('FlightSearch')
                                    }
                                >
                                    <View
                                        style={{
                                            backgroundColor: COLOR.white,
                                            borderRadius: 5,
                                            marginTop: 30,
                                            shadowOpacity: 1,
                                            width: 110,
                                            shadowColor: COLOR.grey,
                                            shadowRadius: 8,
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginRight: 10,
                                                marginTop: 20,
                                                marginLeft: 5,
                                                marginBottom: 15,
                                            }}
                                        >
                                            <Text
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Flights
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginTop: 5,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <View>
                                                    <Text>Upto 12% Off</Text>
                                                </View>
                                                <View style={{ marginLeft: 5 }}>
                                                    <FontAwesome5
                                                        name="chevron-right"
                                                        color="darkblue"
                                                        size={15}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <View
                                    style={{
                                        backgroundColor: COLOR.white,
                                        height: 30,
                                        width: 30,
                                        borderRadius: 50,
                                        marginLeft: 25,
                                        justifyContent: 'center',
                                        marginTop: 10,
                                        position: 'absolute',
                                        zIndex: 99,
                                        alignItems: 'center',
                                        shadowRadius: 8,
                                        shadowOpacity: 1,
                                        shadowColor: COLOR.grey,
                                    }}
                                >
                                    <Image
                                        source={require('../../../assets/Image/OrangeHotel.png')}
                                        style={{
                                            resizeMode: 'contain',
                                            height: 20,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Hotel')}
                                >
                                    <View
                                        style={{
                                            backgroundColor: COLOR.white,
                                            borderRadius: 5,
                                            marginTop: 30,
                                            shadowOpacity: 1,
                                            marginLeft: 20,
                                            width: 110,
                                            shadowColor: COLOR.grey,
                                            shadowRadius: 8,
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginRight: 10,
                                                marginTop: 20,
                                                marginLeft: 5,
                                                marginBottom: 15,
                                            }}
                                        >
                                            <Text
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Hotel
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginTop: 5,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <View>
                                                    <Text>Upto 10% Off</Text>
                                                </View>
                                                <View style={{ marginLeft: 5 }}>
                                                    <FontAwesome5
                                                        name="chevron-right"
                                                        color="darkblue"
                                                        size={15}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <View
                                    style={{
                                        backgroundColor: COLOR.white,
                                        height: 30,
                                        width: 30,
                                        marginTop: 10,
                                        marginLeft: 25,
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        zIndex: 99,
                                        shadowRadius: 8,
                                        shadowOpacity: 1,
                                        shadowColor: COLOR.grey,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={require('../../../assets/Image/Cars.png')}
                                        style={{
                                            resizeMode: 'contain',
                                            height: 20,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={() => alert('This is a button')}
                                >
                                    <View
                                        style={{
                                            backgroundColor: COLOR.white,
                                            borderRadius: 5,
                                            marginTop: 30,
                                            shadowOpacity: 1,
                                            width: 110,
                                            marginLeft: 16,
                                            shadowColor: COLOR.grey,
                                            shadowRadius: 8,
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginRight: 10,
                                                marginTop: 20,
                                                marginLeft: 5,
                                                marginBottom: 15,
                                            }}
                                        >
                                            <Text
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Cars
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginTop: 5,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <View>
                                                    <Text>Upto 5% Off</Text>
                                                </View>
                                                <View style={{ marginLeft: 5 }}>
                                                    <FontAwesome5
                                                        name="chevron-right"
                                                        color="darkblue"
                                                        size={15}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    Background: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: Width,
        height: 200,
        backgroundColor: COLOR.secondary,
    },
    textDiv: {
        // flexDirection:'row',
        width: Width,
        marginTop: 20,
        marginLeft: 10,
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: COLOR.white,
    },
});

export default WelcomeSection;
