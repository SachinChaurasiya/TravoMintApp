import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BestOffer from '../BestOffer';

const WelcomePromo = () => {
    return (
        <>
            <ScrollView>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}
                    >
                        <View>
                            <View
                                style={{
                                    backgroundColor: 'white',
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
                                    shadowColor: 'grey',
                                }}
                            >
                                <Image
                                    source={require('../../assets/Flight.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => alert('this is button')}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 5,
                                        marginTop: 30,
                                        shadowOpacity: 1,
                                        width: 110,
                                        shadowColor: 'grey',
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
                                        <Text style={{ fontWeight: 'bold' }}>
                                            Flights
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                marginTop: 5,
                                            }}
                                        >
                                            <View>
                                                <Text>Upto 12% Off</Text>
                                            </View>
                                            <View>
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
                                    backgroundColor: 'white',
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
                                    shadowColor: 'grey',
                                }}
                            >
                                <Image
                                    source={require('../../assets/Hotel.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => alert('This is a btuuon')}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 5,
                                        marginTop: 30,
                                        shadowOpacity: 1,
                                        width: 110,
                                        shadowColor: 'grey',
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
                                        <Text style={{ fontWeight: 'bold' }}>
                                            Hotel
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                marginTop: 5,
                                            }}
                                        >
                                            <View>
                                                <Text>Upto 10% Off</Text>
                                            </View>
                                            <View>
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
                                    backgroundColor: 'white',
                                    height: 30,
                                    width: 30,
                                    marginTop: 10,
                                    marginLeft: 8,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    zIndex: 99,
                                    shadowRadius: 10,
                                    shadowOpacity: 4,
                                    shadowColor: 'grey',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={require('../../assets/Cars.png')}
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
                                        backgroundColor: 'white',
                                        borderRadius: 5,
                                        marginTop: 30,
                                        shadowOpacity: 1,
                                        width: 110,
                                        shadowColor: 'grey',
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
                                        <Text style={{ fontWeight: 'bold' }}>
                                            Cars
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                marginTop: 5,
                                            }}
                                        >
                                            <View>
                                                <Text>Upto 5% Off</Text>
                                            </View>
                                            <View>
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
                <BestOffer />
            </ScrollView>
        </>
    );
};

export default WelcomePromo;
