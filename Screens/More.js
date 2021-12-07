import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLOR from '../assets/consts/colors';

const Separator = () => <View style={styles.separator}></View>;

const More = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 12,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: COLOR.whitesmoke,
              borderRadius: 50,
              marginTop: 10,
            }}
          >
            <Text style={{ color: '#000', padding: 30, fontSize: 20 }}>MK</Text>
          </View>
          <View style={{ marginLeft: 10, marginTop: 5 }}>
            <Text style={{ color: COLOR.whitesmoke, fontSize: 20 }}>
              Mayank Kumar
            </Text>
            <Text style={{ color: COLOR.white }}>Test@gmail.com</Text>
            <Text style={{ color: COLOR.white }}>1234567890</Text>
          </View>
        </View>
        <View>
          <FontAwesome5 name="chevron-right" size={24} color="#ccc" />
        </View>
      </View>
      <View style={styles.seccontainer}>
        <View style={{ marginTop: 10 }}>
          <View style={styles.mainList}>
            <TouchableOpacity onPress={() => navigation.navigate('My booking')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                }}
              >
                <View>
                  <FontAwesome5
                    name="receipt"
                    size={24}
                    style={{ paddingHorizontal: 5 }}
                    color="#195fb9"
                  />
                </View>
                <View style={{ marginLeft: 25 }}>
                  <Text style={{ fontSize: 18 }}>My Booking</Text>
                  <Text style={{ fontSize: 13 }}>Yours All Booking</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={18}
                style={{ paddingRight: 20 }}
                color="#ccc"
              />
            </View>
          </View>
          <Separator />
          <View style={styles.mainList}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
            >
              <View>
                <FontAwesome5
                  name="exchange-alt"
                  size={24}
                  style={{ paddingHorizontal: 5 }}
                  color="#195fb9"
                />
              </View>

              <View style={{ paddingHorizontal: 18 }}>
                <Text style={{ fontSize: 18 }}>Transfer</Text>
                <Text style={{ fontSize: 13 }}>Transfer With Cabs</Text>
              </View>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={18}
                style={{ paddingRight: 20 }}
                color="#ccc"
              />
            </View>
          </View>
          <Separator />
          <View style={styles.mainList}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
            >
              <View>
                <FontAwesome5
                  name="user-tag"
                  size={24}
                  style={{ paddingHorizontal: 5 }}
                  color="#195fb9"
                />
              </View>
              <TouchableOpacity>
                <View style={{ paddingHorizontal: 14 }}>
                  <Text style={{ fontSize: 18 }}>My Reward</Text>
                  <Text style={{ fontSize: 13 }}>Yours All Reward</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={18}
                style={{ paddingRight: 20 }}
                color="#ccc"
              />
            </View>
          </View>
          <Separator />
          <View style={styles.mainList}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
            >
              <View>
                <FontAwesome5
                  name="plane"
                  size={24}
                  style={{ paddingHorizontal: 5 }}
                  color="#195fb9"
                />
              </View>
              <View style={{ paddingHorizontal: 18 }}>
                <Text style={{ fontSize: 18 }}>My Flights </Text>
                <Text style={{ fontSize: 13 }}>Yours All Rides</Text>
              </View>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={18}
                style={{ paddingRight: 20 }}
                color="#ccc"
              />
            </View>
          </View>
          <Separator />
          <View style={styles.mainList}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
            >
              <View>
                <FontAwesome5
                  name="headset"
                  size={24}
                  style={{ paddingHorizontal: 5 }}
                  color="#195fb9"
                />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Support')}>
                <View style={{ paddingHorizontal: 22 }}>
                  <Text style={{ fontSize: 18 }}>Support</Text>
                  <Text style={{ fontSize: 13 }}>Support</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={18}
                style={{ paddingRight: 20 }}
                color="#ccc"
              />
            </View>
          </View>
          <Separator />
          <View style={styles.mainList}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
            >
              <View>
                <FontAwesome5
                  name="user-cog"
                  size={24}
                  style={{ paddingHorizontal: 5 }}
                  color="#195fb9"
                />
              </View>
              <View style={{ paddingHorizontal: 18 }}>
                <Text style={{ fontSize: 18 }}>Setting</Text>
                <Text style={{ fontSize: 13 }}>Log Out</Text>
              </View>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={18}
                style={{ paddingRight: 20 }}
                color="#ccc"
              />
            </View>
          </View>
          <Separator />
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <HeaderTab/>
    //   <Accordionlist />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    // marginTop:20,
    backgroundColor: COLOR.primary,
  },
  seccontainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  separator: {
    marginHorizontal: 10,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  mainList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default More;
