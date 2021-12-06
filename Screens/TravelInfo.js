import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import COLOR from '../assets/consts/colors';
import ChildernInfo from '../Components/TravelInformation/ChildrenInfo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Infantinfo from '../Components/TravelInformation/Infantinfo';
import Adultinfo from '../Components/TravelInformation/Adultinfo';
import { CheckBox } from 'react-native-elements';

const Separator = () => <View style={styles.separator}></View>;

const width = Dimensions.get('screen').width;

const TravelInfo = ({ navigation, route }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [iscollapsed, setIsCollapsed] = useState(true);
  const [thirdcollapsed, setThirdCollapsed] = useState(true);
  const [check, setCheck] = useState(false);
  const [activeSections, setActiveSections] = useState([]);
  const adultCount = 2;
  const childCount = 2;
  const infantCount = 2;
  const form = [];
  const childform = [];
  const Infantform = [];
  for (let i = 1; i < adultCount; i++) {
    form.push(
      <View key={i}>
        <Adultinfo data={i} />
      </View>
    );
  }

  for (let i = 1; i < childCount; i++) {
    childform.push(
      <View key={i}>
        <ChildernInfo data={i} />
      </View>
    );
  }
  for (let i = 1; i < infantCount; i++) {
    Infantform.push(
      <View key={i}>
        <Infantinfo data={i} />
      </View>
    );
  }
  // const [datapass, setDatapass] = useState({});
  // const { FirstName, MiddleName, LastName, gender } = route.params;

  // console.log(FirstName);
  // console.log(MiddleName);
  // console.log(LastName);
  // console.log(gender);
  // console.log('No' + datapass);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const istoggleExpanded = () => {
    //Toggling the state of single Collapsible
    setIsCollapsed(!iscollapsed);
  };

  const ThirdtoggleExpanded = () => {
    //Toggling the state of single Collapsible
    setThirdCollapsed(!thirdcollapsed);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Image/sunset.jpg')}
        style={{
          width: width,
          height: 80,
          resizMode: 'contain',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        blurRadius={2}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 35,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 15, color: COLOR.white }}>Delhi</Text>
          <FontAwesome5
            name="exchange-alt"
            size={15}
            style={{ marginTop: 3 }}
            color={COLOR.white}
          />
          <Text style={{ fontSize: 15, color: COLOR.white }}>Goa</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}
        >
          <Text style={{ color: 'white', fontSize: 10 }}>
            {' '}
            25 NOV - 30 NOV{' '}
          </Text>
          <Text style={{ fontSize: 10, color: 'white' }}>Economy</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>
            {' '}
            Adult 1 , Children 1
          </Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Enter the details of Adult</Text>
              {/*Heading of Single Collapsible*/}
              <FontAwesome5 name="chevron-down" size={20} color={COLOR.white} />
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>{form}</Text>
            </View>
          </Collapsible>
        </View>
        <Separator />

        {childCount > 1 && (
          <TouchableOpacity onPress={istoggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Enter the details of Children
              </Text>
              {/*Heading of Single Collapsible*/}
              <FontAwesome5 name="chevron-down" size={20} color={COLOR.white} />
            </View>
          </TouchableOpacity>
        )}
        {/*Content of Single Collapsible*/}
        <View>
          <Collapsible collapsed={iscollapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>{childform}</Text>
            </View>
          </Collapsible>
        </View>

        <Separator />

        {infantCount > 1 && (
          <View>
            <TouchableOpacity onPress={ThirdtoggleExpanded}>
              <View style={styles.header}>
                <Text style={styles.headerText}>
                  Enter the details of Infant
                </Text>

                <FontAwesome5
                  name="chevron-down"
                  size={20}
                  color={COLOR.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        <Collapsible collapsed={thirdcollapsed} align="center">
          <View style={styles.content}>
            <Text style={{ textAlign: 'center' }}>{Infantform}</Text>
          </View>
        </Collapsible>

        <Separator />

        <View style={{ backgroundColor: COLOR.white }}>
          <View style={styles.ContactInfo}>
            <Text
              style={{
                color: COLOR.white,
                fontSize: 15,
                fontWeight: '100',
              }}
            >
              Contact Information
            </Text>
          </View>
          <Text
            style={{ color: COLOR.grey, marginHorizontal: 20, marginTop: 10 }}
          >
            Your Ticket Will be Sent To The Below Conatact details
          </Text>
          <View style={{ padding: 20 }}>
            <View>
              <Text
                style={{
                  color: COLOR.primary,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
              >
                E-mail
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="envelope"
                size={20}
                style={{ marginTop: 5, marginRight: 5 }}
                color={COLOR.primary}
              />
              <TextInput
                style={{
                  width: 280,
                  height: 30,
                  borderBottomWidth: 1,
                  borderBottomColor: COLOR.grey,
                }}
                keyboardAppearance="dark"
                keyboardType="email-address"
                placeholder="E-mail"
                placeholderTextColor={COLOR.grey}
              />
            </View>

            <View>
              <Text
                style={{
                  color: COLOR.primary,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
              >
                Phone Number
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="lock"
                size={20}
                style={{ marginTop: 5, marginRight: 5 }}
                color={COLOR.primary}
              />
              <TextInput
                style={{
                  width: 280,
                  height: 30,
                  borderBottomWidth: 1,
                  borderBottomColor: COLOR.grey,
                }}
                keyboardType="numeric"
                placeholder="Phone Number"
                placeholderTextColor={COLOR.grey}
              />
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: COLOR.white, height: 300 }}>
          <View style={styles.adult}>
            <View>
              <Text
                style={{
                  color: COLOR.white,
                  fontSize: 15,
                  fontWeight: '200',
                }}
              >
                Add Your GST DETAILS (Optional)
              </Text>
            </View>
          </View>
          <View>
            <Text></Text>
          </View>
          <View style={{ marginLeft: 20, marginBottom: 10, marginTop: 20 }}>
            <View>
              <Text
                style={{
                  color: COLOR.primary,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
              >
                GST Number
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="percent"
                size={18}
                style={{ marginTop: 5, marginRight: 8 }}
                color={COLOR.primary}
              />
              <TextInput
                style={{
                  width: 280,
                  height: 30,
                  borderBottomWidth: 1,
                  borderBottomColor: COLOR.grey,
                }}
                keyboardAppearance="dark"
                keyboardType="email-address"
                placeholder="GST Number"
                placeholderTextColor={COLOR.grey}
              />
            </View>

            <View>
              <View>
                <Text
                  style={{
                    color: COLOR.primary,
                    fontWeight: 'bold',
                    marginTop: 30,
                  }}
                >
                  COMPANY NAME
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome5
                  name="building"
                  size={20}
                  style={{ marginTop: 5, marginRight: 5 }}
                  color={COLOR.primary}
                />
                <TextInput
                  style={{
                    width: 280,
                    height: 30,
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: COLOR.grey,
                  }}
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  placeholder="Company Name"
                  placeholderTextColor={COLOR.grey}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                width: width - 50,
              }}
            >
              <CheckBox
                style={{ marginTop: 10, marginRight: 10 }}
                checked={check}
                checkedColor={COLOR.primary}
                onPress={() => setCheck(!check)}
              />
              <Text
                style={{
                  marginTop: 10,
                  width: width - 80,
                  color: COLOR.grey,
                }}
              >
                I hereby certify that the above statements are true and correct
                to the best of my knowledge.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('PayNow')}>
        <View
          style={{
            flexDirection: 'row-reverse',
            backgroundColor: COLOR.white,
            height: 60,
          }}
        >
          <View
            style={{
              backgroundColor: '#195fb9',
              flex: 1,
              backgroundColor: COLOR.blue,
            }}
          >
            <View
              style={{
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  borderRadius: 10,
                  marginTop: 2,
                  fontSize: 18,
                }}
              >
                Proceed For Payment
              </Text>
              <FontAwesome5 name="arrow-right" size={25} color="white" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: COLOR.primary,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLOR.white,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  separator: {
    height: 2,
    margin: 5,
    borderBottomColor: COLOR.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  adult: {
    backgroundColor: COLOR.primary,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default TravelInfo;
