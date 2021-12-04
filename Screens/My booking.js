import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';

const Separator = () => <View style={styles.separator}></View>;

const MyBooking = (props) => {
  const [Check, setCheck] = useState(1);

  return (
    <View>
      <View
        style={{
          backgroundColor: COLOR.white,
          flexDirection: 'row',
          elevation: 2,
        }}
      >
        <TouchableOpacity onPress={() => <View>{setCheck(4)}</View>}>
          <Text
            style={[
              styles.Adultchildinfant,
              {
                color: Check === 4 ? COLOR.primary : COLOR.dark,
                color: Check === 4 ? COLOR.primary : COLOR.dark,
              },
            ]}
          >
            UPCOMING
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => <View>{setCheck(5)}</View>}>
          <Text
            style={[
              styles.Adultchildinfant,
              {
                color: Check === 5 ? COLOR.primary : COLOR.dark,
                color: Check === 5 ? COLOR.primary : COLOR.dark,
              },
            ]}
          >
            COMPLETED
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: COLOR.whitesmoke }}>
        <Text style={{ padding: 10 }}>Dec '21</Text>
      </View>
      <TouchableOpacity onPress={() => alert('This is clickAble')}>
        <View style={{ backgroundColor: COLOR.white, flexDirection: 'row' }}>
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
                <Text style={{ fontSize: 10 }}>INDIGO SG-266 | 2h 10M </Text>

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
          <View style={{ backgroundColor: COLOR.white, flexDirection: 'row' }}>
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
                  <Text style={{ fontSize: 10 }}>INDIGO SG-266 | 2h 10M </Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  Adultchildinfant: {
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 12,
    fontWeight: '200',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default MyBooking;
