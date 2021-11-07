import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
    import Icon from 'react-native-vector-icons/MaterialIcons';
    import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
    import COLORS from '../../assets/consts/colors';
    import WelcomeSection from './Header/WelcomeSection'
    import {DrawerActions} from '@react-navigation/native';

    // image
// import flightlofo from '../../assets/Image/2T.png'
import bgimg from '../../assets/Image/BackGroundImage.png'
import Flight from '../../assets/Image/Flight.png'
import Hotel from '../../assets/Image/Hotel.png'
import Transfer from '../../assets/Image/Transfer.png'

const {width} = Dimensions.get('screen');
const HeaderTab = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white,}}>
      <StatusBar translucent={false}/>
        <ImageBackground source={bgimg}  resizeMode="cover"
          style={{
            // backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View>
            <View style={style.inputContainer}>
              
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <TouchableOpacity onPress = {()=> navigation.navigate('FlightSearch')}>
              <View style={style.iconContainer}>
                 <View style={{backgroundColor:COLORS.primary,width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:30}}>
                 <Image source={Flight} style={{width:20, height: 20,}}/>
                 </View>
                 <Text style={{marginTop:10,fontWeight: 'bold'}}>Flights</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {()=> navigation.navigate('Hotel')}>
              <View style={style.iconContainer}>
              <View style={{backgroundColor:COLORS.primary,width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:30}}>
                 <Image source={Hotel} style={{width:20, height: 20,}}/>
                 </View>
              <Text style={{marginTop:10,fontWeight: 'bold'}}>Hotels</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>  
              <View style={style.iconContainer}>
              <View style={{backgroundColor:COLORS.primary,width:40,height:40,alignItems:"center",justifyContent:"center",borderRadius:30}}>
                 <Image source={Transfer} resizeMode="contain"  style={{width:20, height: 20,}}/>
                 </View>
              <Text style={{marginTop:10,fontWeight: 'bold'}}>Transfer</Text>
              </View>
              </TouchableOpacity>
            </View>
            
            </View>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:25}}>
            <TouchableOpacity  onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="sort" size={28} color={COLORS.secondary} />
            </TouchableOpacity>
              <Icon name="notifications-none" size={28} color={COLORS.secondary} />
              </View>
        </ImageBackground>
         {/* <Text style={style.sectionTitle}><WelcomeSection/></Text> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
  },
  inputContainer: {
    height: 100,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top:70,
    // flexDirection: 'row',
    paddingHorizontal: 20,
    // alignItems: 'center',
    elevation: 12,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 80,
    width: 80,
    // backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth:1,
    borderColor: COLORS.secondary,
  },
  sectionTitle: {
    marginVertical: 60,
    fontWeight: 'bold',
    fontSize: 20,
    color:COLORS.primary
  },

});
export default HeaderTab ;
