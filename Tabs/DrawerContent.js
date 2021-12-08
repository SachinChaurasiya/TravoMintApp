import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
// import {StackNavigator} from 'react-navigation';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { Fontisto } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Title,
  Text,
  TouchableRipple,
  Switch,
  Drawer,
} from 'react-native-paper';
import COLOR from '../assets/consts/colors';
import { useNavigation } from '@react-navigation/native';

// Image
import Logo from '../assets/Image/Travomint.png';
// import SignInScreen from './SignInScreen';

import { AuthContext } from '../Context';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);

  AsyncStorage.getItem('userId').then((token) => {
    // console.log(token);
    setUserId(token);
    console.log(userId);
  });
  // const { signOut } = useContext(AuthContext);
  const Separator = () => <View style={styles.separator}></View>;

  const signOut = async () => {
    await AsyncStorage.removeItem('userId');
    navigation.navigate('SignInScreen');
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.whitesmoke }}>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: COLOR.whitesmoke,
        }}
      >
        <View>
          <Image
            source={Logo}
            style={{ width: 150, height: 30, marginLeft: 10 }}
          />
        </View>
        <View style={{ marginRight: 20, marginTop: 5 }}>
          <TouchableOpacity>
            <FontAwesome5
              onPress={() =>
                props.navigation.dispatch(DrawerActions.closeDrawer())
              }
              name="bars"
              size={28}
              color={COLOR.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <DrawerContentScrollView style={{ marginTop: 10 }} {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            style={{ marginLeft: 10 }}
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <Fontisto name="plane" size={14} color={COLOR.blue} />
              </View>
            )}
            label="Flight"
            onPress={() => {
              props.navigation.navigate('Nav');
            }}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <FontAwesome5 name="hotel" size={14} color={COLOR.blue} />
              </View>
            )}
            label="Hotels"
            onPress={() => {
              props.navigation.navigate('Hotel');
            }}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <FontAwesome5
                  name="exchange-alt"
                  size={14}
                  color={COLOR.blue}
                />
              </View>
            )}
            label="Transfer"
            onPress={() => {
              props.navigation.navigate('transfer');
            }}
          />

          <Separator />

          {/* <DrawerItem
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <FontAwesome5 name="sign-in-alt" size={14} color={COLOR.blue} />
              </View>
            )}
            onPress={() => props.navigation.navigate('SignInScreen')}
            label="Sign In"
          /> */}

          <DrawerItem
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <FontAwesome5 name="user-plus" size={14} color={COLOR.blue} />
              </View>
            )}
            style={{ marginLeft: 6 }}
            onPress={() => {
              props.navigation.navigate('SignUpScreen');
            }}
            label="Register"
          />

          <DrawerItem
            // style={{marginLeft:13}}
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 12,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <FontAwesome5 name="clipboard" size={14} color={COLOR.blue} />
              </View>
            )}
            onPress={() => {
              props.navigation.navigate('My booking');
            }}
            label="My Booking"
          />

          <DrawerItem
            icon={({ color, size }) => (
              <View
                style={{
                  backgroundColor: COLOR.whitesmoke,
                  padding: 10,
                  borderRadius: 10,
                  elevation: 8,
                }}
              >
                <FontAwesome5 name="headset" size={14} color={COLOR.blue} />
              </View>
            )}
            onPress={() => {
              props.navigation.navigate('Support');
            }}
            label="Support"
          />

          {userId ? (
            <DrawerItem
              icon={({ color, size }) => (
                <View
                  style={{
                    backgroundColor: COLOR.whitesmoke,
                    padding: 10,
                    borderRadius: 10,
                    elevation: 8,
                  }}
                >
                  <FontAwesome5 name="headset" size={14} color={COLOR.blue} />
                </View>
              )}
              onPress={() => {
                signOut();
              }}
              label="SignOut"
            />
          ) : (
            <DrawerItem
              icon={({ color, size }) => (
                <View
                  style={{
                    backgroundColor: COLOR.whitesmoke,
                    padding: 10,
                    borderRadius: 10,
                    elevation: 8,
                  }}
                >
                  <FontAwesome5 name="headset" size={14} color={COLOR.blue} />
                </View>
              )}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}
              label="Sign In"
            />
          )}
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  draweContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DrawerContent;
