import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Searchbar = () => {
    return (
        <View style={{ marginTop: 5, backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={{ flex: 1, padding: 10 }}
                        placeholder="Enter Information to search"
                        underlineColorAndroid="transparent"
                    />
                    <FontAwesome5 name="search" style={styles.ImageStyle} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 30,
        margin: 10,
    },

    ImageStyle: {
        // padding: 10,
        marginLeft: 20,
        margin: 5,
        height: 15,
        width: 20,
        // resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export default Searchbar;
