import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';

const width = Dimensions.get('window').width;

const BookNow = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.main}>
                        <View style={styles.DepartCard}>
                            <View>
                                <Text
                                    style={{
                                        margin: 10,
                                        letterSpacing: 3,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    DEPARTURE
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../assets/Image/INDIGO.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{ marginTop: 8, fontWeight: 'bold' }}
                                >
                                    Indigo Airlines
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Flight 2485 | EQP - 321
                                </Text>
                            </View>
                            <View style={{ marginTop: 23 }}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    DEL Indira Gandhi International
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>
                                    SAT, 13Nov , 12:45 PM
                                </Text>
                            </View>
                            <View>
                                <Text>Terminal 1</Text>
                            </View>
                            <View>
                                <FontAwesome5
                                    style={{ margin: 10 }}
                                    name="exchange-alt"
                                    color={COLOR.primary}
                                    size={50}
                                />
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text>GOI Goa International</Text>
                            </View>

                            <View>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Tue , 14 NOV , 12:35 AM
                                </Text>
                            </View>
                            <View>
                                <Text>Terminal 3</Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row', marginTop: 20 }}
                            >
                                <FontAwesome5
                                    style={{ marginTop: 10 }}
                                    name="suitcase"
                                    color="black"
                                />
                                <Text style={{ marginTop: 10 }}>
                                    Check-In Baggage : 15Kg Per Person
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5
                                    style={{ marginTop: 5, marginBottom: 5 }}
                                    name="suitcase"
                                    color="black"
                                />
                                <Text style={{ marginTop: 5, marginBottom: 5 }}>
                                    Cabin Baggage : 7Kg Per Person
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.DepartCard]}>
                            <View>
                                <Text
                                    style={{
                                        margin: 10,
                                        letterSpacing: 3,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    RETURN
                                </Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../assets/Image/INDIGO.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{ marginTop: 8, fontWeight: 'bold' }}
                                >
                                    Indigo Airlines
                                </Text>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Flight 2485 | EQP - 321
                                </Text>
                            </View>
                            <View style={{ marginTop: 23 }}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    GOI Goa International
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>
                                    SAT, 20NOV , 12:45 PM
                                </Text>
                            </View>
                            <View>
                                <Text>Terminal 3</Text>
                            </View>
                            <View>
                                <FontAwesome5
                                    style={{ margin: 10 }}
                                    name="exchange-alt"
                                    color={COLOR.primary}
                                    size={50}
                                />
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Text>DEL Indira gandhi International</Text>
                            </View>

                            <View>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Tue , 21 NOV , 12:35 AM
                                </Text>
                            </View>
                            <View>
                                <Text>Terminal 1</Text>
                            </View>
                            <View
                                style={{ flexDirection: 'row', marginTop: 20 }}
                            >
                                <FontAwesome5
                                    style={{ marginTop: 10 }}
                                    name="suitcase"
                                    color="black"
                                />
                                <Text style={{ marginTop: 10 }}>
                                    Check-In Baggage : 15Kg Per Person
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5
                                    style={{ marginTop: 5, marginBottom: 5 }}
                                    name="suitcase"
                                    color="black"
                                />
                                <Text style={{ marginTop: 5, marginBottom: 5 }}>
                                    Cabin Baggage : 7Kg Per Person
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                width: width / 4,
                                alignSelf: 'center',
                                marginBottom: 10,
                                elevation: 5,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'blue',
                                    alignItems: 'center',
                                    borderRadius: 30,
                                }}
                            >
                                <Text style={{ fontSize: 20, color: 'white' }}>
                                    Continue
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        backgroundColor: COLOR.primary,
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    DepartCard: {
        backgroundColor: COLOR.whitesmoke,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BookNow;
