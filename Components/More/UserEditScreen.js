import React from 'react';
import {View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';
    import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import COLOR from '../../assets/consts/colors'

const width = Dimensions.get('screen').width

const UserEditScreen = () => {

    // const sheetRef = React.useRef(null);
    const bs = React.useRef();
    const fall = new Animated.Value(1)

    const [text, setText] = React.useState('');
    

    const renderHeader = () =>(
            <View style={styles.header}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle}>

                    </View>
                </View>
    </View>
    )

    const renderContent = () => (
        <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
    )

    return (
        <View style={styles.container}>
                <BottomSheet 
                style={{}}
                    ref={bs}
                    snapPoints={[350, 0]}
                    // initialSnap={1}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    callbackNode={fall} 
                    enabledGestureInteraction={true}
    
                />
            <View style={{margin:20}}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <View style={{
                                 height:50,
                                 width: 50,
                                 borderRadius: 15,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 }}>   
                                {/* <ImageBackground source={{
                                    uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftravomint&psig=AOvVaw1WytjlS0sSjWPVNw4yN_lJ&ust=1636867380378000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNC8hqnMlPQCFQAAAAAdAAAAABAD"
                                }} style={{width:100, height:100}} imageStyle={{borderRadius:15}}> */}
                                    <View style={{
                                        flex:1,justifyContent:"center",alignItems: "center",
                                    }}>
                                <Icon name="camera" size={35} color="#000" style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                }}/>
                                   </View>
                                {/* </ImageBackground>    */}
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize:18,fontWeight: 'bold',marginVertical:10}}>Mayank</Text>
                </View>
                <View style={styles.action}>
                            <TextInput
                            style={{width:width-40,backgroundColor:"#fff",overflow:'hidden'}}
                              label="First Name"
                              color="false"
                            //   disabled="false"
                            underlineColor={COLOR.primary}
                            activeUnderlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            activeOutlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            selectionColor={COLOR.primary}
                              mode='flat'
                              left={<TextInput.Icon name='emoticon' color={COLOR.primary} size={20} />}
                            />
                </View>
                <View style={styles.action}>
                            <TextInput
                            style={{width:width-40,backgroundColor:"#fff",overflow:'hidden'}}
                              label="Last Name"
                              color="false"
                            //   disabled="false"
                            underlineColor={COLOR.primary}
                            activeUnderlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            activeOutlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            selectionColor={COLOR.primary}
                              mode='flat'
                              left={<TextInput.Icon name='emoticon' color={COLOR.primary} size={20} />}
                            />
                </View>
                <View style={styles.action}>
                            <TextInput
                            style={{width:width-40,backgroundColor:"#fff",overflow:'hidden'}}
                              label="Phone"
                              color="false"
                              keyboardType="number-pad"
                            //   disabled="false"
                            underlineColor={COLOR.primary}
                            activeUnderlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            activeOutlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            selectionColor={COLOR.primary}
                              mode='flat'
                              left={<TextInput.Icon name='emoticon' color={COLOR.primary} size={20} />}
                            />
                </View>
                <View style={styles.action}>
                            <TextInput
                            style={{width:width-40,backgroundColor:"#fff",overflow:'hidden'}}
                              label="E-Mail"
                              color="false"
                            //   disabled="false"
                            underlineColor={COLOR.primary}
                            activeUnderlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            activeOutlineColor={COLOR.primary}
                            outlineColor={COLOR.primary}
                            selectionColor={COLOR.primary}
                              mode='flat'
                              left={<TextInput.Icon name='emoticon' color={COLOR.primary} size={20} />}
                            />
                </View>
                <TouchableOpacity style={styles.commandButton} >
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      action: {
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
})

export default UserEditScreen;
