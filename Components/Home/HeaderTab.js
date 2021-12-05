import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../assets/consts/colors';
import WelcomeSection from './Header/WelcomeSection';
import { Flag } from 'react-native-svg-flagkit';
import { DrawerActions } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import bgimg from '../../assets/Image/BackGroundImage.png';
import Flight from '../../assets/Image/Flight.png';
import Hotel from '../../assets/Image/Hotel.png';
import Transfer from '../../assets/Image/Transfer.png';

import DropdownScreen from '../CurrencyDropDown';
import { Dropdown } from 'react-native-element-dropdown';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const HeaderTab = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.whitesmoke }}>
      <StatusBar translucent={false} />

      <ImageBackground
        source={bgimg}
        resizeMode="cover"
        style={{
          height: 120,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <View style={style.inputContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('FlightSearch')}
              >
                <View style={style.iconContainer}>
                  <View
                    style={{
                      backgroundColor: COLOR.primary,
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                    }}
                  >
                    <Image source={Flight} style={{ width: 20, height: 20 }} />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginTop: 10,
                        fontWeight: 'bold',
                      }}
                    >
                      Flights
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
                <View style={style.iconContainer}>
                  <View
                    style={{
                      backgroundColor: COLOR.primary,
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                    }}
                  >
                    <Image source={Hotel} style={{ width: 20, height: 20 }} />
                  </View>
                  <Text
                    style={{
                      marginTop: 10,
                      fontWeight: 'bold',
                    }}
                  >
                    Hotels
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('transfer')}>
                <View style={style.iconContainer}>
                  <View
                    style={{
                      backgroundColor: COLOR.primary,
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                    }}
                  >
                    <Image
                      source={Transfer}
                      resizeMode="contain"
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 10,
                      fontWeight: 'bold',
                    }}
                  >
                    Transfer
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon name="sort" size={28} color={COLOR.blue} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/Image/TLogo.png')}
            style={{ width: 30, height: 20, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ position: 'absolute', top: 120 }}>
          <ImageBackground
            source={require('../../assets/Image/location1.jpg')}
            blurRadius={1}
            style={{
              width: width,
              height: 300,
              resizeMode: 'cover',
              opacity: 0.8,
              backgroundColor: 'black',
            }}
          />
        </View>
      </ImageBackground>

      {/* <Text style={style.sectionTitle}><WelcomeSection/></Text> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.secondary,
  },
  inputContainer: {
    height: 100,
    width: '100%',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    position: 'absolute',
    top: 70,
    // flexDirection: 'row',
    paddingHorizontal: 20,
    // alignItems: 'center',
    elevation: 12,
    zIndex: 9999,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 80,
    width: 80,
    // backgroundColor: COLOR.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.grey,
  },
  sectionTitle: {
    marginVertical: 60,
    fontWeight: 'bold',
    fontSize: 20,
    color: COLOR.primary,
  },
  currency: {
    borderWidth: 1,
    borderColor: COLOR.blue,
    flexDirection: 'row',
  },
});
export default HeaderTab;
