import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import COLOR from '../assets/consts/colors';

const Separator = () => <View style={styles.separator} />;

const PayNow = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 25, color: COLOR.blue }}>
            Congratulations!
          </Text>
        </View>
        <View>
          <Text style={{ color: COLOR.blue, marginBottom: 25 }}>
            You have booked Your Flight Successfully.
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: COLOR.blue,
            height: 48,
            margin: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 5,
                  fontWeight: '100',
                  color: COLOR.white,
                }}
              >
                Booking ID :
              </Text>
              <Text
                style={{
                  fontWeight: '100',
                  marginTop: 12,
                  marginLeft: 5,
                  fontSize: 18,
                  color: COLOR.white,
                }}
              >
                D5KULA31
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  color: COLOR.white,
                  fontWeight: '100',
                }}
              >
                578 INR
              </Text>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: COLOR.white }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}
              >
                <View>
                  <Text style={{ fontSize: 24 }}>DEL</Text>
                  <Text>Delhi</Text>
                </View>
                <View
                  style={{
                    width: 80,
                    marginTop: 20,
                    height: 1,
                    backgroundColor: COLOR.primary,
                    fontWeight: 'bold',
                  }}
                />
                <View>
                  <FontAwesome5
                    name="plane"
                    size={25}
                    style={{ marginTop: 5 }}
                    color={COLOR.primary}
                  />
                </View>
                <View
                  style={{
                    width: 80,
                    marginTop: 20,
                    height: 1,
                    backgroundColor: COLOR.primary,
                    fontWeight: 'bold',
                  }}
                />
                <View>
                  <Text style={{ fontSize: 22, marginLeft: 5 }}>GOI</Text>
                  <Text>Goa</Text>
                </View>
              </View>
              <Separator />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                }}
              >
                <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                  Passenger
                </Text>
                <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                  Seat
                </Text>
              </View>
              <Separator />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Mayank</Text>
                <Text style={{ fontWeight: 'bold' }}>12A</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginVertical: 10,
                  margin: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Sachin</Text>
                <Text style={{ fontWeight: 'bold' }}>12B</Text>
              </View>
              <Separator />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                  Flight No
                </Text>
                <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                  Date
                </Text>
                <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                  Depart
                </Text>
              </View>
              <Separator />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>A31</Text>
                <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>
                  01 May 2021
                </Text>
                <Text style={{ fontWeight: 'bold' }}>22:10</Text>
              </View>

              <Separator />
              <View>
                <View style={{ marginTop: 10, marginHorizontal: 15 }}>
                  <Text style={{ fontWeight: 'bold' }}>
                    IGI International Airport , New Delhi
                  </Text>
                </View>
                <Separator />
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                    Terminal
                  </Text>
                  <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                    Gate No
                  </Text>
                  <Text style={{ color: COLOR.primary, fontWeight: 'bold' }}>
                    Boarding
                  </Text>
                </View>
                <Separator />
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}
                >
                  <Text>T3</Text>
                  <Text>D4</Text>
                  <Text>21:30</Text>
                </View>
              </View>
              <View>
                <View style={{ backgroundColor: COLOR.whitesmoke, height: 50 }}>
                  <View
                    style={{
                      backgroundColor: COLOR.primary,
                      borderWidth: 1,
                      borderColor: COLOR.primary,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  >
                    <View>
                      <Text style={{ color: COLOR.white }}>
                        {' '}
                        Note: Please Check your E-mail for Complete Flight
                        Booking Details
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.whitesmoke,
  },
  separator: {
    marginHorizontal: 1,
    height: 2,
    margin: 10,
    borderBottomColor: COLOR.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default PayNow;
