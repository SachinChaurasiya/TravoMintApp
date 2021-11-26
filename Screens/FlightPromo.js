import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Separator = () => <View style={styles.separator}></View>;

const FlightPromo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.primary }}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../assets/Image/location4.jpg')}
            style={{
              width: width,
              height: 420,
              resizeMode: 'contain',
            }}
            blurRadius={3}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  color: COLOR.white,
                }}
              >
                Get
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    color: COLOR.white,
                  }}
                >
                  12% off on
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    color: COLOR.white,
                  }}
                >
                  Flights
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{ margin: 10, borderRadius: 10, backgroundColor: COLOR.white }}
        >
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: COLOR.primary,
            }}
          >
            <FontAwesome5
              name="hand-point-right"
              size={20}
              color={COLOR.primary}
            />{' '}
            Get Best Deals and Discounts on Virgin Atlantic Group Booking
          </Text>
          <Text
            style={{
              margin: 10,
              fontSize: 15,
              lineHeight: 25,
              textTransform: 'capitalize',
            }}
          >
            Get Best Deals and Discounts on Virgin Atlantic Group Booking 18
            Oct, 2021 Category: Travel tips Author: Travomint Virgin Atlantic
            group booking facility makes you capable of planning a trip along
            with your family members or friends. These group booing deals are
            economical in structure and they also lessen the excess burden on
            the airlines as these offers attract the passengers due their cost
            effective nature. Finally these deals enable you to plan a proper
            trip which you may have missed had it not been the group booking
            deals. Virgin Atlantic provides the information of group booking to
            the passengers through -{'\n\n'}Get Best Deals and Discounts on
            Virgin Atlantic Group Booking 18 Oct, 2021 Category: Travel tips
            Author: Travomint Virgin Atlantic group booking facility makes you
            capable of planning a trip along with your family members or
            friends. These group booing deals are economical in structure and
            they also lessen the excess burden on the airlines as these offers
            attract the passengers due their cost effective nature. Finally
            these deals enable you to plan a proper trip which you may have
            missed had it not been the group booking deals. Virgin Atlantic
            provides the information of group booking to the passengers through
            -{'\n\n'}
            Get Best Deals and Discounts on Virgin Atlantic Group Booking 18
            Oct, 2021 Category: Travel tips Author: Travomint Virgin Atlantic
            group booking facility makes you capable of planning a trip along
            with your family members or friends. These group booing deals are
            economical in structure and they also lessen the excess burden on
            the airlines as these offers attract the passengers due their cost
            effective nature. Finally these deals enable you to plan a proper
            trip which you may have missed had it not been the group booking
            deals. Virgin Atlantic provides the information of group booking to
            the passengers through -
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    margin: 5,
    borderBottomColor: COLOR.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default FlightPromo;
