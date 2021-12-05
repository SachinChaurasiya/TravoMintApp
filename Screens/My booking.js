import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import COLOR from '../assets/consts/colors';
import { NavigationContainer } from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const Separator = () => <View style={styles.separator}></View>;

const MyBooking = ({ navigation }) => {
  const [Check, setCheck] = useState('COMPLETED');
  const [isVisible, setIsVisible] = useState(true);

  const toggleFunction = (props) => {
    {
      !isVisible ? setIsVisible(!isVisible) : setIsVisible(isVisible);
    }
  };
  const toggleFunctionvisible = (props) => {
    {
      !isVisible ? setIsVisible(isVisible) : setIsVisible(!isVisible);
    }
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: COLOR.white,
          flexDirection: 'row',
          elevation: 2,
        }}
      >
        <TouchableOpacity
          onPressIn={toggleFunctionvisible}
          onPress={() => <View>{setCheck('UPCOMING')}</View>}
        >
          <Text
            style={[
              styles.Adultchildinfant,
              {
                color: Check === 'UPCOMING' ? COLOR.primary : COLOR.dark,
              },
            ]}
          >
            UPCOMING
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={toggleFunction}
          onPress={() => <View>{setCheck('COMPLETED')}</View>}
        >
          <Text
            style={[
              styles.Adultchildinfant,
              {
                color: Check === 'COMPLETED' ? COLOR.primary : COLOR.dark,
              },
            ]}
          >
            COMPLETED
          </Text>
        </TouchableOpacity>
      </View>

      {isVisible ? (
        <>
          <View style={{ backgroundColor: '#f0f8ff' }}>
            <Text style={{ padding: 10 }}>Dec '21</Text>
          </View>
          <TouchableOpacity onPress={() => alert('This is clickAble')}>
            <View
              style={{ backgroundColor: COLOR.white, flexDirection: 'row' }}
            >
              <View
                style={{
                  backgroundColor: COLOR.white,
                  marginTop: 10,
                  flexDirection: 'row',
                }}
              >
                <View>
                  <FontAwesome5
                    name="plane"
                    size={15}
                    color={COLOR.primary}
                    style={{ paddingTop: 13, paddingLeft: 13 }}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      paddingVertical: 5,
                      paddingHorizontal: 8,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold' }}>Delhi</Text>
                      <FontAwesome5
                        name="arrow-right"
                        size={10}
                        color={COLOR.dark}
                        style={{ paddingVertical: 5, paddingHorizontal: 8 }}
                      />
                      <Text
                        style={{
                          fontWeight: 'bold',
                        }}
                      >
                        GOA
                      </Text>
                    </View>
                    <Text style={{ fontSize: 10 }}>
                      INDIGO SG-266 | 2h 10M{' '}
                    </Text>

                    <View>
                      <Text
                        style={{
                          paddingTop: 5,
                          fontWeight: 'bold',
                          color: 'grey',
                          fontSize: 12,
                        }}
                      >
                        12 Dec • Sachin Chaurasiya
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}></View>
              <FontAwesome5
                name="chevron-right"
                size={20}
                color={COLOR.blue}
                style={{ marginLeft: '43%', marginTop: 30 }}
              />
            </View>
          </TouchableOpacity>

          <View>
            <Separator />
          </View>
          <View>
            <TouchableOpacity onPress={() => alert('This is clickAble')}>
              <View
                style={{ backgroundColor: COLOR.white, flexDirection: 'row' }}
              >
                <View
                  style={{
                    backgroundColor: COLOR.white,
                    marginTop: 10,
                    flexDirection: 'row',
                  }}
                >
                  <View>
                    <FontAwesome5
                      name="plane"
                      size={15}
                      color={COLOR.primary}
                      style={{ paddingTop: 13, paddingLeft: 13 }}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        flexDirection: 'column',
                        paddingVertical: 5,
                        paddingHorizontal: 8,
                      }}
                    >
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}>Goa</Text>
                        <FontAwesome5
                          name="arrow-right"
                          size={10}
                          color={COLOR.dark}
                          style={{ paddingVertical: 5, paddingHorizontal: 8 }}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                          }}
                        >
                          Delhi
                        </Text>
                      </View>
                      <Text style={{ fontSize: 10 }}>
                        INDIGO SG-266 | 2h 10M{' '}
                      </Text>

                      <View>
                        <Text
                          style={{
                            paddingTop: 5,
                            fontWeight: 'bold',
                            color: 'grey',
                            fontSize: 12,
                          }}
                        >
                          25 Dec • Sachin Chaurasiya
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}></View>
                <FontAwesome5
                  name="chevron-right"
                  size={20}
                  color={COLOR.blue}
                  style={{ marginLeft: '43%', marginTop: 30 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={{ backgroundColor: '#f0f8ff', height: '100%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
              padding: 10,
            }}
          >
            <Image
              source={require('../assets/Image/Booking.png')}
              style={{
                width: 120,
                height: 120,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                marginTop: 10,
                padding: 10,
                paddingHorizontal: 90,
              }}
            >
              {' '}
              You've No Upcoming Bookings
            </Text>
            <Text
              style={{
                color: COLOR.slategrey,
                fontSize: 14,
                marginLeft: 70,
              }}
            >
              Planning a trip? Check out today's best
            </Text>
            <Text
              style={{
                color: COLOR.slategrey,
                fontSize: 14,
                marginLeft: '45%',
              }}
            >
              offer
            </Text>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25%',
                marginTop: 15,
                width: width / 2,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('FlightSearch')}
                activeOpacity={0.9}
              >
                <LinearGradient
                  // Button Linear Gradient
                  colors={['#00bfff', '#1e90ff', '#195fb9']}
                  style={styles.button}
                >
                  <Text style={styles.text}>Start Booking Now</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Adultchildinfant: {
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    opacity: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 10,
    color: '#fff',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default MyBooking;
