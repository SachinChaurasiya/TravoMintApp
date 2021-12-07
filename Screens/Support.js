import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import COLOR from '../assets/consts/colors';
import Icons from '../Components/Icons';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Formik } from 'formik';
import { Flag } from 'react-native-svg-flagkit';
import * as yup from 'yup';

import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Support = ({ name, color }) => {
  const [Check, setCheck] = useState('Contact Form');
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
    <Formik
      initialValues={{
        Firstname: '',
        Lastname: '',
        email: '',
        phoneNo: '',
      }}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        Firstname: yup.string().required('Please, provide your Firstname!'),
        Lastname: yup.string().required('Please,  provide your LastName!'),
        email: yup.string().email().required(),
        phoneNo: yup.string().required('Please,  provide your Contact No!'),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: COLOR.white,
              elevation: 12,
            }}
          >
            <View>
              <TouchableOpacity
                onPressIn={toggleFunctionvisible}
                onPress={() => <View>{setCheck('Contact Details')}</View>}
              >
                <Text
                  style={[
                    styles.Adultchildinfant,
                    {
                      color:
                        Check === 'Contact Details'
                          ? COLOR.primary
                          : COLOR.dark,
                    },
                  ]}
                >
                  Contact Details
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPressIn={toggleFunction}
                onPress={() => <View>{setCheck('Contact Form')}</View>}
              >
                <Text
                  style={[
                    styles.Adultchildinfant,
                    {
                      color:
                        Check === 'Contact Form' ? COLOR.primary : COLOR.dark,
                    },
                  ]}
                >
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {isVisible ? (
            <Animatable.View
              animation="fadeInUpBig"
              style={{
                height: '100%',
                padding: 10,
                backgroundColor: COLOR.white,
              }}
            >
              <View style={{ padding: 10 }}>
                <View>
                  <Text style={{ color: COLOR.blue, fontWeight: 'bold' }}>
                    FirstName
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icons name="user" color={COLOR.blue} size={20} />

                  <TextInput
                    value={values.Firstname}
                    onChangeText={handleChange('Firstname')}
                    onBlur={() => setFieldTouched('Firstname')}
                    placeholder="Firstname"
                    placeholderTextColor={COLOR.placeholderColor}
                    style={{
                      height: 40,
                      width: '90%',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: COLOR.grey,
                    }}
                  />
                </View>
              </View>
              {touched.Firstname && errors.Firstname && (
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                  {errors.Firstname}
                </Text>
              )}
              <View style={{ padding: 10 }}>
                <View>
                  <Text style={{ color: COLOR.blue, fontWeight: 'bold' }}>
                    Last Name
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icons name="user" color={COLOR.blue} size={20} />

                  <TextInput
                    value={values.Lastname}
                    placeholder="Last Name"
                    onChangeText={handleChange('Lastname')}
                    onBlur={() => setFieldTouched('Lastname')}
                    placeholderTextColor={COLOR.placeholderColor}
                    style={{
                      height: 40,
                      width: '90%',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: COLOR.grey,
                    }}
                  />
                </View>
              </View>
              {touched.Lastname && errors.Lastname && (
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                  {errors.Lastname}
                </Text>
              )}
              <View style={{ padding: 10 }}>
                <View>
                  <Text style={{ color: COLOR.blue, fontWeight: 'bold' }}>
                    E-mail
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icons name="envelope" color={COLOR.blue} size={20} />

                  <TextInput
                    value={values.email}
                    placeholder="E-mail"
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    placeholderTextColor={COLOR.placeholderColor}
                    style={{
                      height: 40,
                      width: '90%',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: COLOR.grey,
                    }}
                  />
                </View>
              </View>
              {touched.email && errors.email && (
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                  {errors.email}
                </Text>
              )}
              <View style={{ padding: 10 }}>
                <View>
                  <Text style={{ color: COLOR.blue, fontWeight: 'bold' }}>
                    Contact No
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icons name="phone" color={COLOR.blue} size={20} />

                  <TextInput
                    value={values.phoneNo}
                    onChangeText={handleChange('phoneNo')}
                    onBlur={() => setFieldTouched('phoneNo')}
                    placeholder="Contact No"
                    keyboardType="numeric"
                    placeholderTextColor={COLOR.placeholderColor}
                    style={{
                      height: 40,
                      width: '90%',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: COLOR.grey,
                    }}
                  />
                </View>
              </View>
              {touched.phoneNo && errors.phoneNo && (
                <Text style={{ fontSize: 12, color: '#FF0D10' }}>
                  {errors.phoneNo}
                </Text>
              )}
              <View style={{ padding: 10 }}>
                <View>
                  <Text style={{ color: COLOR.blue, fontWeight: 'bold' }}>
                    Your Query
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icons name="comment-alt" color={COLOR.blue} size={20} />

                  <TextInput
                    placeholder="Your Query"
                    placeholderTextColor={COLOR.placeholderColor}
                    style={{
                      height: 40,
                      width: '90%',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: COLOR.grey,
                    }}
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity
                  disabled={!isValid}
                  onPressIn={handleSubmit}
                  onPress={() =>
                    console.log(
                      values.Firstname,
                      values.Lastname,
                      values.email,
                      values.phoneNo
                    )
                  }
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    // Button Linear Gradient
                    colors={['#195fb9', '#1e90ff', '#00bfff']}
                    style={styles.button}
                  >
                    <Text style={styles.text}>Submit</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 30,
                }}
              >
                <View
                  style={{
                    width: 140,
                    height: 30,
                    marginTop: 10,
                    backgroundColor: '#3b5996',
                    borderRadius: 2,
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5
                      name="facebook-square"
                      size={22}
                      color={COLOR.white}
                      style={{ marginLeft: 10, marginTop: 2 }}
                    />
                    <Text
                      style={{
                        color: COLOR.white,
                        marginTop: '4%',
                        marginLeft: 5,
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      @FACEBOOK
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 140,
                    height: 30,
                    marginTop: 10,
                    backgroundColor: '#05acee',
                    borderRadius: 2,
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5
                      name="twitter-square"
                      size={22}
                      color={COLOR.white}
                      style={{ marginLeft: 10, marginTop: 2 }}
                    />
                    <Text
                      style={{
                        color: COLOR.white,
                        marginTop: '4%',
                        marginLeft: 5,
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      @TWITTER
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View
                  style={{
                    width: 140,
                    height: 30,
                    marginTop: 10,
                    backgroundColor: '#0077b5',
                    borderRadius: 2,
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5
                      name="twitter-square"
                      size={22}
                      color={COLOR.white}
                      style={{ marginLeft: 10, marginTop: 2 }}
                    />
                    <Text
                      style={{
                        color: COLOR.white,
                        marginTop: '4%',
                        marginLeft: 5,
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      @LINKDIN
                    </Text>
                  </View>
                </View>
              </View>
            </Animatable.View>
          ) : (
            <ScrollView>
              <View style={{ backgroundColor: COLOR.white }}>
                <Animatable.View
                  animation="fadeInLeft"
                  style={{
                    borderWidth: 1,
                    borderColor: COLOR.grey,
                    marginVertical: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLOR.blue,
                      fontWeight: 'bold',
                      fontsSize: 20,
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  >
                    Address
                  </Text>
                  <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Icons name="map-pin" size={20} color={COLOR.blue} />
                    <View>
                      <Text style={{ marginTop: 10 }}>
                        B 44, Bhabha Marg, B Block, Sector 59, Noida, Uttar
                        Pradesh 201301
                      </Text>
                    </View>
                  </View>
                </Animatable.View>

                <Animatable.View
                  animation="fadeInRight"
                  style={{
                    borderWidth: 1,
                    borderColor: COLOR.grey,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLOR.blue,
                      fontWeight: 'bold',
                      fontsSize: 20,
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  >
                    Company PAN
                  </Text>
                  <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Icons name="map-pin" size={20} color={COLOR.blue} />
                    <View>
                      <Text style={{ marginTop: 10 }}>AAWCS6644M</Text>
                    </View>
                  </View>
                </Animatable.View>

                <Animatable.View
                  animation="fadeInLeft"
                  style={{
                    borderWidth: 1,
                    borderColor: COLOR.grey,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLOR.blue,
                      fontWeight: 'bold',
                      fontsSize: 20,
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  >
                    Company GST
                  </Text>
                  <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Icons name="map-pin" size={20} color={COLOR.blue} />
                    <View>
                      <Text style={{ marginTop: 10 }}>
                        ACCOUNT INFORMATION- SNVA VENTURES PRIVATE LIMITED GST-
                        09AAWCS6644M1Z9
                      </Text>
                    </View>
                  </View>
                </Animatable.View>

                <Animatable.View
                  animation="fadeInRight"
                  style={{
                    borderWidth: 1,
                    borderColor: COLOR.grey,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLOR.blue,
                      fontWeight: 'bold',
                      fontsSize: 20,
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  >
                    Company CIN
                  </Text>
                  <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Icons name="map-pin" size={20} color={COLOR.blue} />
                    <View>
                      <Text style={{ marginTop: 10 }}>
                        CIN-U74120UP2016PTC076152
                      </Text>
                    </View>
                  </View>
                </Animatable.View>

                <Animatable.View
                  animation="fadeInLeft"
                  style={{
                    borderWidth: 1,
                    borderColor: COLOR.grey,
                    marginVertical: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLOR.blue,
                      fontWeight: 'bold',
                      fontsSize: 20,
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  >
                    Email ID
                  </Text>
                  <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Icons name="envelope" size={20} color={COLOR.blue} />
                    <View>
                      <Text style={{ marginTop: 10 }}>
                        support@travomint.com
                      </Text>
                    </View>
                  </View>
                </Animatable.View>

                <View style={{ marginBottom: 50 }}>
                  <Animatable.View
                    animation="fadeInRight"
                    style={{
                      borderWidth: 1,
                      borderColor: COLOR.grey,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      padding: 10,
                      borderRadius: 5,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Flag id={'US'} size={0.1} />
                      <Text
                        style={{
                          color: COLOR.blue,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}
                      >
                        US SALES
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Icons name="phone" color={COLOR.blue} />
                      <Text style={{ color: COLOR.dark, marginTop: 5 }}>
                        +1-888-266-1699
                      </Text>
                    </View>
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeInLeft"
                    style={{
                      borderWidth: 1,
                      borderColor: COLOR.grey,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      padding: 10,
                      borderRadius: 5,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Flag id={'US'} size={0.1} />
                      <Text
                        style={{
                          color: COLOR.blue,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}
                      >
                        US CUSTOMER SERVICE
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Icons name="phone" color={COLOR.blue} />
                      <Text style={{ color: COLOR.dark, marginTop: 5 }}>
                        +1-240-523-4500
                      </Text>
                    </View>
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeInRight"
                    style={{
                      borderWidth: 1,
                      borderColor: COLOR.grey,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      padding: 10,
                      borderRadius: 5,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Flag id={'GB'} size={0.1} />
                      <Text
                        style={{
                          color: COLOR.blue,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}
                      >
                        UK
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Icons name="phone" color={COLOR.blue} />
                      <Text style={{ color: COLOR.dark, marginTop: 5 }}>
                        +44-203-769-1864
                      </Text>
                    </View>
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeInLeft"
                    style={{
                      borderWidth: 1,
                      borderColor: COLOR.grey,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      padding: 10,
                      borderRadius: 5,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Flag id={'AU'} size={0.1} />
                      <Text
                        style={{
                          color: COLOR.blue,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}
                      >
                        AUSTRALIA
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Icons name="phone" color={COLOR.blue} />
                      <Text style={{ color: COLOR.dark, marginTop: 5 }}>
                        +61-242-048-091
                      </Text>
                    </View>
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeInRight"
                    style={{
                      borderWidth: 1,
                      borderColor: COLOR.grey,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      padding: 10,
                      borderRadius: 5,
                      marginBottom: 10,
                    }}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Flag id={'IN'} size={0.1} />
                      <Text
                        style={{
                          color: COLOR.blue,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}
                      >
                        INDIA
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Icons name="phone" color={COLOR.blue} />
                      <Text style={{ color: COLOR.dark, marginTop: 5 }}>
                        +91-8010000200
                      </Text>
                    </View>
                  </Animatable.View>
                </View>
              </View>
            </ScrollView>
          )}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  Adultchildinfant: {
    padding: 10,
    paddingHorizontal: 30,
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    opacity: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    color: '#fff',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Support;
