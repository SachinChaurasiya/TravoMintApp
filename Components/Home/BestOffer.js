import React from 'react';
import {
    View,
    Text,
    Animated,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import COLOR from '../../assets/consts/colors';

const Data = [
    {
        id: 1,
        image: require('../../assets/Image/Banner1.png'),
    },
    {
        id: 2,
        image: require('../../assets/Image/Banner2.png'),
    },
    {
        id: 3,
        image: require('../../assets/Image/Banner3.png'),
    },
];

const Item = ({ image }) => (
    <View
        style={{
            shadowColor: COLOR.grey,
            shadowRadius: 6,
            shadowOpacity: 0.5,
            justifyContent: 'space-between',
            paddingRight: 20,
            paddingLeft: 10,
            borderRadius: 10,
        }}
    >
        <Image
            source={image}
            style={{ resizeMode: 'contain', width: 350, height: 200 }}
        />
    </View>
);

const BestOffer = () => {
    const renderItem = ({ item }) => (
        <View>
            <Item image={item.image} />
        </View>
    );
    return (
        <View style={{ marginTop: -100 }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginBottom: 4 }}>
                        <Text style={styles.text}>BEST OFFERS</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 6,
                            marginLeft: 5,
                        }}
                    >
                        <Image
                            source={require('../../assets/Image/OrangeOffer.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 30,
                                height: 30,
                                marginLeft: 10,
                                marginTop: 25,
                            }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        marginLeft: 15,
                        width: 200,
                        height: 1,
                        backgroundColor: COLOR.secondary,
                    }}
                ></View>
                <View>
                    <View
                        style={{
                            marginTop: 5,
                            marginLeft: 15,
                            width: 150,
                            height: 1,
                            backgroundColor: COLOR.secondary,
                        }}
                    ></View>
                </View>
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item) => item.id}
                    style={{ marginLeft: 10 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 40,
        marginLeft: 15,
        fontSize: 15,
        color: COLOR.primary,
    },
});

export default BestOffer;
