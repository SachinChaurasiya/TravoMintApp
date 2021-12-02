import React, { useState } from 'react';

import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DateRangePicker from 'rn-select-date-range';
// import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../assets/consts/colors';
import moment from 'moment';
const width = Dimensions.get('screen').width;
const Infantinfo = () => {
  const [check, setCheck] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [thirdselectedRange, setThirdRange] = useState({});
  const [thirdmodalVisible, setThirdModalVisible] = useState(false);
  const [AdultNo, setAdultNo] = useState('Male');

  return (
    <View>
      <View style={styles.adult}>
        <Text
          style={{
            color: COLOR.white,
            fontSize: 15,
            fontWeight: '100',
          }}
        >
          Enter The details of Infant 1
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            justifyContent: 'space-around',
          }}
        >
          <Text style={styles.Text}>FirstName</Text>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5
              name="user"
              style={{
                marginTop: 10,
                marginRight: 5,
              }}
              color={COLOR.primary}
              size={20}
            />
            <TextInput style={styles.CheckInput} placeholder="FirstName" />
          </View>

          <View>
            <Text style={styles.Text}>MiddleName</Text>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="user"
                style={{
                  marginTop: 10,
                  marginRight: 5,
                }}
                color={COLOR.primary}
                size={20}
              />
              <TextInput style={styles.CheckInput} placeholder="MiddleName" />
            </View>
          </View>
          <View style={{ width: 100 }}>
            <Text style={styles.Text}>LastName</Text>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="user"
                style={{
                  marginTop: 10,
                  marginRight: 5,
                }}
                color={COLOR.primary}
                size={20}
              />
              <TextInput style={styles.CheckInput} placeholder="LastName" />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              marginLeft: 5,
              color: COLOR.primary,
              fontWeight: 'bold',
              marginTop: 10,
            }}
          >
            Gender
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLOR.grey,
            }}
          >
            <FontAwesome5
              name="user"
              size={20}
              style={{ marginTop: 5 }}
              color={COLOR.primary}
            />
            <View>
              <View>
                <View>
                  <View>
                    <Text
                      style={{
                        // marginTop: 10,
                        color: COLOR.secondary,
                        // marginLeft: 14,
                      }}
                    ></Text>
                  </View>
                  <View
                    style={{
                      width: width - 50,
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    {/* <Counter /> */}
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(1)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 1 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 1 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        Male {console.log('Adult' + +AdultNo)}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => <View>{setAdultNo(2)}</View>}
                    >
                      <Text
                        style={[
                          styles.Adultchildinfant,
                          {
                            backgroundColor:
                              AdultNo === 2 ? COLOR.primary : COLOR.white,
                            color: AdultNo === 2 ? COLOR.white : COLOR.dark,
                          },
                        ]}
                      >
                        Female {console.log('Adult' + +AdultNo)}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setThirdModalVisible(true)}
          activeOpacity={0.6}
        >
          <View
            style={{
              borderBottomColor: COLOR.grey,
              borderBottomWidth: 1,
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.Text}>Date of Birth</Text>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="calendar-alt"
                color={COLOR.primary}
                size={20}
                style={{
                  marginBottom: 5,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  marginTop: 5,
                }}
              >
                {thirdselectedRange.firstDate}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={thirdmodalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setThirdModalVisible(!thirdmodalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateRangePicker
              onSelectDateRange={(range) => {
                setThirdRange(range);
              }}
              responseFormat="DD-MM-YYYY"
              maxDate={moment().add(90, 'days')}
              minDate={moment().subtract(90, 'days')}
              selectedDateContainerStyle={styles.selectedDateContainerStyle}
              selectedDateStyle={styles.selectedDateStyle}
            />
            <TouchableOpacity
              onPress={() => setThirdModalVisible(!thirdmodalVisible)}
            >
              <View
                style={{
                  marginLeft: 15,
                  borderWidth: 1,
                  borderColor: COLOR.primary,
                  backgroundColor: COLOR.primary,
                  width: 80,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    marginLeft: 12,
                    color: COLOR.white,
                  }}
                >
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  adult: {
    backgroundColor: COLOR.primary,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ContactInfo: {
    backgroundColor: COLOR.primary,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text: {
    color: COLOR.primary,
    fontWeight: 'bold',
    marginTop: 15,
  },
  CheckInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.grey,
    width: 310,
    paddingTop: 10,
  },
  DropDown: {
    borderColor: COLOR.white,
    height: 30,
    width: 310,
    paddingTop: 10,
  },
  text_header: {
    color: '#fff',
    fontSize: 20,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 210,
    backgroundColor: COLOR.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  modalView: {
    marginVertical: 20,
  },
  Adultchildinfant: {
    borderWidth: 0.5,
    borderColor: COLOR.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
export default Infantinfo;
