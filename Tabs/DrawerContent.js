import React,{useState,} from 'react'
import { StyleSheet,View, Image ,Linking,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView,DrawerItem}from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
// import {StackNavigator} from 'react-navigation';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontAwesome5} from 'react-native-vector-icons';
import {Fontisto} from 'react-native-vector-icons';
import { Title,Text,TouchableRipple,Switch,Drawer } from 'react-native-paper';  



// Image
import Logo from '../assets/Image/Travomint.png'
// import SignInScreen from './SignInScreen';

    const DrawerContent = (props) => {  

        const Separator = () => (
            <View style ={styles.separator}></View>
          )

        const [isDarkTheme , setIsDarkTheme] = useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }


        return (
          <View style={{flex:1}}>
               <View  style={{marginTop:30,flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
               <Image source={Logo} style={{width:150 , height:30 , marginLeft:10}}/>
            </View>
            <View style={{marginRight:20, marginTop:5}}>
               <TouchableOpacity>
                     <FontAwesome5
                     onPress={()=> props.navigation.dispatch(DrawerActions.closeDrawer())}
                     name='bars' size={28} color='#195fb9'/>
               </TouchableOpacity>
            </View>
      </View>
      <DrawerContentScrollView  style={{marginTop:10}}  {...props}>
      <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            style={{marginLeft:10}}
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:10,borderRadius:30}}>
                <Fontisto name='plane' size={14} color="#fff"/>
                </View>
            )}
            label="Flight"
            onPress={()=>{props.navigation.navigate('Nav')}}
            />

           <DrawerItem
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:10,borderRadius:30}}>
                <FontAwesome5 name='hotel' size={14} color="#fff"/>
                </View>
            )}
            label="Hotels"
            onPress={()=>{props.navigation.navigate('Hotel')}}
            />

           <DrawerItem
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:10,borderRadius:30}}>
                <FontAwesome5 name='exchange-alt' size={14} color="#fff"/>
                </View>
            )}
            label="Transfer"
            onPress={()=>{props.navigation.navigate('Bookmark')}}
            />

                    <Separator/>


                    <DrawerItem
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:10,borderRadius:30}}>
                <FontAwesome5 name='sign-in-alt' size={14} color="#fff"/>
                </View>
            )}
            onPress={()=> props.navigation.navigate('SignIn')}
            label="Sign In"
            />

            <DrawerItem
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:10,borderRadius:30}}>
                <FontAwesome5 name='user-plus' size={14} color="#fff"/>
                </View>
            )}
            style={{marginLeft:6}}
            onPress={()=>{props.navigation.navigate('')}}
            label="Register"
            />


            <DrawerItem
            // style={{marginLeft:13}}
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:12,borderRadius:50}}>
                <FontAwesome5 name='clipboard' size={14} color="#fff"/>
                </View>
            )}
            onPress={()=>{props.navigation.navigate('Explore')}}
            label="My Booking"
            />

           <DrawerItem
            icon={({color,size})=>(
                <View style={{backgroundColor:"#195fb9",padding:10,borderRadius:30}}>
                <FontAwesome5 name='headset' size={14} color="#fff"/>
                </View>
            )}
            onPress={()=>{props.navigation.navigate('Support')}}
            label="Support"
            />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
                <TouchableRipple onPress={()=> {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>
                            Dark Theme
                        </Text>
                        <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
          </View>
        );
      }

      
const styles = StyleSheet.create({
    draweContent: {
      flex: 1,
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:40,
        flexDirection:'row',
        alignItems: 'center'
    },
    section:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom : 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:16,
        paddingVertical:12,
        alignItems: 'center'
    },
    separator: {
        marginVertical: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });


export default DrawerContent;