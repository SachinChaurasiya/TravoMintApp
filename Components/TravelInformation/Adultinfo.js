import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import DateRangePicker from 'rn-select-date-range';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../assets/consts/colors';
import moment from 'moment';

const width = Dimensions.get('screen').width;

const Adultinfo = ({ navigation, route }) => {
  const [check1, setCheck1] = useState(false);
  const [AdultNo, setAdultNo] = useState('Male');
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [selectedRange, setRange] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState({
    FirstName: '',
    MiddleName: '',
    LastName: '',
    gender: '',
    dob: '',
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setValue({
      FirstName: '',
      MiddleName: '',
      LastName: '',
      gender: '',
      dob: '',
    });
    console.log(value.FirstName);
    console.log(value.MiddleName);
    console.log(value.LastName);
    console.log(value.gender);
    console.log(selected.firstDate);
  };

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
          Enter The details of Adult 1
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <CheckBox
              title="Mr"
              checked={check1}
              checkedColor={COLOR.primary}
              onPress={() => setCheck1(!check1)}
            />
            <CheckBox
              title="Mrs"
              checked={check2}
              onPressIn={handleSubmit}
              checkedColor={COLOR.primary}
              onPress={() => setCheck2(!check2)}
            />
            <CheckBox
              title="Ms"
              checked={check3}
              checkedColor={COLOR.primary}
              onPress={() => setCheck3(!check3)}
            />
          </View>
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
            <TextInput
              style={styles.CheckInput}
              returnKeyLabel={'next'}
              placeholder="FirstName"
              onChangeText={(text) => setValue({ ...value, FirstName: text })}
              value={value.FirstName}
              autoCompleteType="off"
            />
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
              <TextInput
                style={styles.CheckInput}
                returnKeyLabel={'next'}
                placeholder="MiddleName"
                onChangeText={(text) =>
                  setValue({ ...value, MiddleName: text })
                }
                value={value.MiddleName}
                autoCompleteType="off"
              />
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
              <TextInput
                style={styles.CheckInput}
                returnKeyLabel={'next'}
                placeholder="LastName"
                onChangeText={(text) => setValue({ ...value, LastName: text })}
                value={value.LastName}
                autoCompleteType="off"
              />
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
                      Male
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
                      Female
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
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
              <TextInput
                style={{
                  marginLeft: 5,
                  marginTop: 5,
                }}
              ></TextInput>
            </View>
            <Button title="Check" onPress={handleSubmit} />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateRangePicker
              onSelectDateRange={(range) => {
                setRange(range);
              }}
              responseFormat="DD-MM-YYYY"
              maxDate={moment().add(90, 'days')}
              onChangeText={(text) => setValue({ ...value, dob: text })}
              value={value.dob}
              minDate={moment().subtract(90, 'days')}
              selectedDateContainerStyle={styles.selectedDateContainerStyle}
              selectedDateStyle={styles.selectedDateStyle}
            />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
export default Adultinfo;
