import React from 'react';
import {
    View,
    Text,
    Animated,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';

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
    {
        id: 4,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 5,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 6,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 7,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 8,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 9,
        image: require('../../assets/Image/Banner1.png'),
    },
    {
        id: 10,
        image: require('../../assets/Image/Banner2.png'),
    },
    {
        id: 11,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 12,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 13,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 14,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 15,
        image: require('../../assets/Image/Banner3.png'),
    },
    {
        id: 16,
        image: require('../../assets/Image/Banner3.png'),
    },
];

const Item = ({ image }) => (
    <View style={styles.imgStyle}>
        <Image
            source={image}
            style={{ resizeMode: 'contain', width: 350, height: 200 }}
        />
    </View>
);

const OfferHeader = () => {
    const renderItem = ({ item }) => (
        <View>
            <Item image={item.image} />
        </View>
    );
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                            source={require('../../assets/Image/Offersblue.png')}
                            style={{
                                resizeMode: 'contain',
                                width: 30,
                                height: 30,
                                marginLeft: 10,
                                marginTop: 20,
                            }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        marginLeft: 20,
                        width: 200,
                        height: 1,
                        backgroundColor: '#195FB9',
                    }}
                ></View>
                <View>
                    <View
                        style={{
                            marginTop: 5,
                            marginLeft: 20,
                            width: 150,
                            height: 1,
                            backgroundColor: '#195FB9',
                        }}
                    ></View>
                </View>
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    // style={{marginLeft:10}}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 30,
        color: '#195FB9',
        fontWeight: 'bold',
    },
    imgStyle: {
        shadowColor: 'grey',
        shadowRadius: 6,
        shadowOpacity: 0.5,
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        elevation: 5,
        marginTop: 10,
    },
});

export default OfferHeader;
