// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import DateRangePicker from 'rn-select-date-range';
// import { CheckBox } from 'react-native-elements';
// import moment from 'moment';

// import DropDownPicker from 'react-native-dropdown-picker';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import COLOR from '../assets/consts/colors';

// const width = Dimensions.get('screen').width;

// const TravelInfo = ({ navigation }) => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: 'Male', value: 'Male' },
//     { label: 'Female', value: 'Female' },
//   ]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [ismodalVisible, setIsModalVisible] = useState(false);
//   const [thirdmodalVisible, setThirdModalVisible] = useState(false);
//   const [selectedRange, setRange] = useState({});
//   const [isselectedRange, setIsRange] = useState({});
//   const [thirdselectedRange, setThirdRange] = useState({});
//   const [isSelected, setSelection] = useState(false);
//   const [check, setCheck] = useState(false);
//   const [check1, setCheck1] = useState(false);
//   const [check2, setCheck2] = useState(false);
//   //   const { dismiss, show, modalProps } = useBottomModal();
//   const [check3, setCheck3] = useState(false);
//   return (
//     <View style={{ backgroundColor: COLOR.primary, flex: 1 }}>
//       <View
//         style={{
//           backgroundColor: COLOR.white,
//           flex: 1,
//           //   marginTop: 10,
//         }}
//       >
//         <ScrollView>
//           <View>
//             <View style={styles.adult}>
//               <Text
//                 style={{
//                   color: COLOR.white,
//                   fontSize: 15,
//                   fontWeight: '100',
//                 }}
//               >
//                 Enter The details of Adult 1
//               </Text>
//             </View>
//             <View style={{ padding: 20 }}>
//               <View
//                 style={{
//                   justifyContent: 'space-around',
//                 }}
//               >
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                   }}
//                 >
//                   <CheckBox
//                     title="Mr"
//                     checked={check1}
//                     checkedColor={COLOR.primary}
//                     onPress={() => setCheck1(!check1)}
//                   />
//                   <CheckBox
//                     title="Mrs"
//                     checked={check2}
//                     checkedColor={COLOR.primary}
//                     onPress={() => setCheck2(!check2)}
//                   />
//                   <CheckBox
//                     title="Ms"
//                     checked={check3}
//                     checkedColor={COLOR.primary}
//                     onPress={() => setCheck3(!check3)}
//                   />
//                 </View>
//                 <Text style={styles.Text}>FirstName</Text>
//                 <View style={{ flexDirection: 'row' }}>
//                   <FontAwesome5
//                     name="user"
//                     style={{
//                       marginTop: 10,
//                       marginRight: 5,
//                     }}
//                     color={COLOR.primary}
//                     size={20}
//                   />
//                   <TextInput
//                     style={styles.CheckInput}
//                     placeholder="FirstName"
//                   />
//                 </View>

//                 <View>
//                   <Text style={styles.Text}>MiddleName</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="user"
//                       style={{
//                         marginTop: 10,
//                         marginRight: 5,
//                       }}
//                       color={COLOR.primary}
//                       size={20}
//                     />
//                     <TextInput
//                       style={styles.CheckInput}
//                       placeholder="MiddleName"
//                     />
//                   </View>
//                 </View>
//                 <View style={{ width: 100 }}>
//                   <Text style={styles.Text}>LastName</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="user"
//                       style={{
//                         marginTop: 10,
//                         marginRight: 5,
//                       }}
//                       color={COLOR.primary}
//                       size={20}
//                     />
//                     <TextInput
//                       style={styles.CheckInput}
//                       placeholder="LastName"
//                     />
//                   </View>
//                 </View>
//               </View>

//               <View style={{ marginTop: 10 }}>
//                 <Text
//                   style={{
//                     marginLeft: 5,
//                     color: COLOR.primary,
//                     fontWeight: 'bold',
//                     marginTop: 10,
//                   }}
//                 >
//                   Gender
//                 </Text>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     borderBottomWidth: 1,
//                     borderBottomColor: COLOR.grey,
//                   }}
//                 >
//                   <FontAwesome5
//                     name="user"
//                     size={20}
//                     style={{ marginTop: 5 }}
//                     color={COLOR.primary}
//                   />
//                   <DropDownPicker
//                     style={styles.DropDown}
//                     open={open}
//                     value={value}
//                     items={items}
//                     placeholder="Select"
//                     placeholderTextColor={COLOR.grey}
//                     setOpen={setOpen}
//                     dropDownDirection="TOP"
//                     setValue={setValue}
//                     setItems={setItems}
//                   />
//                 </View>
//               </View>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(true)}
//                 activeOpacity={0.6}
//               >
//                 <View
//                   style={{
//                     borderBottomColor: COLOR.grey,
//                     borderBottomWidth: 1,
//                     justifyContent: 'space-between',
//                   }}
//                 >
//                   <Text style={styles.Text}>Date of Birth</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="calendar-alt"
//                       color={COLOR.primary}
//                       size={20}
//                       style={{
//                         marginBottom: 5,
//                       }}
//                     />
//                     <Text
//                       style={{
//                         marginLeft: 5,
//                         marginTop: 5,
//                       }}
//                     >
//                       {selectedRange.firstDate}
//                     </Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   width: width - 50,
//                 }}
//               >
//                 <CheckBox
//                   style={{ marginTop: 10, marginRight: 10 }}
//                   checked={check}
//                   checkedColor={COLOR.primary}
//                   onPress={() => setCheck(!check)}
//                 />
//                 <Text
//                   style={{
//                     marginTop: 10,
//                     width: width - 80,
//                     color: COLOR.grey,
//                   }}
//                 >
//                   I hereby certify that the above statements are true and
//                   correct to the best of my knowledge.
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.adult}>
//               <Text
//                 style={{
//                   color: COLOR.white,
//                   fontSize: 15,
//                   fontWeight: '100',
//                 }}
//               >
//                 Enter The details of Children 1
//               </Text>
//             </View>
//             <View style={{ padding: 20 }}>
//               <View
//                 style={{
//                   justifyContent: 'space-around',
//                 }}
//               >
//                 <Text style={styles.Text}>FirstName</Text>
//                 <View style={{ flexDirection: 'row' }}>
//                   <FontAwesome5
//                     name="user"
//                     style={{
//                       marginTop: 10,
//                       marginRight: 5,
//                     }}
//                     color={COLOR.primary}
//                     size={20}
//                   />
//                   <TextInput
//                     style={styles.CheckInput}
//                     placeholder="FirstName"
//                   />
//                 </View>

//                 <View>
//                   <Text style={styles.Text}>MiddleName</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="user"
//                       style={{
//                         marginTop: 10,
//                         marginRight: 5,
//                       }}
//                       color={COLOR.primary}
//                       size={20}
//                     />
//                     <TextInput
//                       style={styles.CheckInput}
//                       placeholder="MiddleName"
//                     />
//                   </View>
//                 </View>
//                 <View style={{ width: 100 }}>
//                   <Text style={styles.Text}>LastName</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="user"
//                       style={{
//                         marginTop: 10,
//                         marginRight: 5,
//                       }}
//                       color={COLOR.primary}
//                       size={20}
//                     />
//                     <TextInput
//                       style={styles.CheckInput}
//                       placeholder="LastName"
//                     />
//                   </View>
//                 </View>
//               </View>

//               <View style={{ marginTop: 10 }}>
//                 <Text
//                   style={{
//                     marginLeft: 5,
//                     color: COLOR.primary,
//                     fontWeight: 'bold',
//                     marginTop: 10,
//                   }}
//                 >
//                   Gender
//                 </Text>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     borderBottomWidth: 1,
//                     borderBottomColor: COLOR.grey,
//                   }}
//                 >
//                   <FontAwesome5
//                     name="user"
//                     size={20}
//                     style={{ marginTop: 5 }}
//                     color={COLOR.primary}
//                   />
//                   <DropDownPicker
//                     style={styles.DropDown}
//                     open={open}
//                     value={value}
//                     items={items}
//                     placeholder="Select"
//                     placeholderTextColor={COLOR.grey}
//                     setOpen={setOpen}
//                     dropDownDirection="TOP"
//                     setValue={setValue}
//                     setItems={setItems}
//                   />
//                 </View>
//               </View>
//               <TouchableOpacity
//                 onPress={() => setIsModalVisible(true)}
//                 activeOpacity={0.6}
//               >
//                 <View
//                   style={{
//                     borderBottomColor: COLOR.grey,
//                     borderBottomWidth: 1,
//                     justifyContent: 'space-between',
//                   }}
//                 >
//                   <Text style={styles.Text}>Date of Birth</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="calendar-alt"
//                       color={COLOR.primary}
//                       size={20}
//                       style={{
//                         marginBottom: 5,
//                       }}
//                     />
//                     <Text
//                       style={{
//                         marginLeft: 5,
//                         marginTop: 5,
//                       }}
//                     >
//                       {isselectedRange.firstDate}
//                     </Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   width: width - 50,
//                 }}
//               >
//                 <CheckBox
//                   style={{ marginTop: 10, marginRight: 10 }}
//                   checked={check}
//                   checkedColor={COLOR.primary}
//                   onPress={() => setCheck(!check)}
//                 />
//                 <Text
//                   style={{
//                     marginTop: 10,
//                     width: width - 80,
//                     color: COLOR.grey,
//                   }}
//                 >
//                   I hereby certify that the above statements are true and
//                   correct to the best of my knowledge.
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.adult}>
//               <Text
//                 style={{
//                   color: COLOR.white,
//                   fontSize: 15,
//                   fontWeight: '100',
//                 }}
//               >
//                 Enter The details of Infant 1
//               </Text>
//             </View>
//             <View style={{ padding: 20 }}>
//               <View
//                 style={{
//                   justifyContent: 'space-around',
//                 }}
//               >
//                 <Text style={styles.Text}>FirstName</Text>
//                 <View style={{ flexDirection: 'row' }}>
//                   <FontAwesome5
//                     name="user"
//                     style={{
//                       marginTop: 10,
//                       marginRight: 5,
//                     }}
//                     color={COLOR.primary}
//                     size={20}
//                   />
//                   <TextInput
//                     style={styles.CheckInput}
//                     placeholder="FirstName"
//                   />
//                 </View>

//                 <View>
//                   <Text style={styles.Text}>MiddleName</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="user"
//                       style={{
//                         marginTop: 10,
//                         marginRight: 5,
//                       }}
//                       color={COLOR.primary}
//                       size={20}
//                     />
//                     <TextInput
//                       style={styles.CheckInput}
//                       placeholder="MiddleName"
//                     />
//                   </View>
//                 </View>
//                 <View style={{ width: 100 }}>
//                   <Text style={styles.Text}>LastName</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="user"
//                       style={{
//                         marginTop: 10,
//                         marginRight: 5,
//                       }}
//                       color={COLOR.primary}
//                       size={20}
//                     />
//                     <TextInput
//                       style={styles.CheckInput}
//                       placeholder="LastName"
//                     />
//                   </View>
//                 </View>
//               </View>

//               <View style={{ marginTop: 10 }}>
//                 <Text
//                   style={{
//                     marginLeft: 5,
//                     color: COLOR.primary,
//                     fontWeight: 'bold',
//                     marginTop: 10,
//                   }}
//                 >
//                   Gender
//                 </Text>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     borderBottomWidth: 1,
//                     borderBottomColor: COLOR.grey,
//                   }}
//                 >
//                   <FontAwesome5
//                     name="user"
//                     size={20}
//                     style={{ marginTop: 5 }}
//                     color={COLOR.primary}
//                   />
//                   <DropDownPicker
//                     style={styles.DropDown}
//                     open={open}
//                     value={value}
//                     items={items}
//                     placeholder="Select"
//                     placeholderTextColor={COLOR.grey}
//                     setOpen={setOpen}
//                     dropDownDirection="TOP"
//                     setValue={setValue}
//                     setItems={setItems}
//                   />
//                 </View>
//               </View>
//               <TouchableOpacity
//                 onPress={() => setThirdModalVisible(true)}
//                 activeOpacity={0.6}
//               >
//                 <View
//                   style={{
//                     borderBottomColor: COLOR.grey,
//                     borderBottomWidth: 1,
//                     justifyContent: 'space-between',
//                   }}
//                 >
//                   <Text style={styles.Text}>Date of Birth</Text>
//                   <View style={{ flexDirection: 'row' }}>
//                     <FontAwesome5
//                       name="calendar-alt"
//                       color={COLOR.primary}
//                       size={20}
//                       style={{
//                         marginBottom: 5,
//                       }}
//                     />
//                     <Text
//                       style={{
//                         marginLeft: 5,
//                         marginTop: 5,
//                       }}
//                     >
//                       {thirdselectedRange.firstDate}
//                     </Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   width: width - 50,
//                 }}
//               >
//                 <CheckBox
//                   style={{ marginTop: 10, marginRight: 10 }}
//                   checked={check}
//                   checkedColor={COLOR.primary}
//                   onPress={() => setCheck(!check)}
//                 />
//                 <Text
//                   style={{
//                     marginTop: 10,
//                     width: width - 80,
//                     color: COLOR.grey,
//                   }}
//                 >
//                   I hereby certify that the above statements are true and
//                   correct to the best of my knowledge.
//                 </Text>
//               </View>
//             </View>

//             <View>
//               <Modal
//                 animationType="fade"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                   alert('Modal has been closed.');
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <View style={styles.centeredView}>
//                   <View style={styles.modalView}>
//                     <DateRangePicker
//                       onSelectDateRange={(range) => {
//                         setRange(range);
//                       }}
//                       responseFormat="DD-MM-YYYY"
//                       maxDate={moment().add(90, 'days')}
//                       minDate={moment().subtract(90, 'days')}
//                       selectedDateContainerStyle={
//                         styles.selectedDateContainerStyle
//                       }
//                       selectedDateStyle={styles.selectedDateStyle}
//                     />
//                     <TouchableOpacity
//                       onPress={() => setModalVisible(!modalVisible)}
//                     >
//                       <View
//                         style={{
//                           marginLeft: 15,
//                           borderWidth: 1,
//                           borderColor: COLOR.primary,
//                           backgroundColor: COLOR.primary,
//                           width: 80,
//                           borderRadius: 5,
//                         }}
//                       >
//                         <Text
//                           style={{
//                             padding: 10,
//                             marginLeft: 12,
//                             color: COLOR.white,
//                           }}
//                         >
//                           Done
//                         </Text>
//                       </View>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </Modal>

//               <Modal
//                 animationType="fade"
//                 transparent={true}
//                 visible={ismodalVisible}
//                 onRequestClose={() => {
//                   alert('Modal has been closed.');
//                   setIsModalVisible(!ismodalVisible);
//                 }}
//               >
//                 <View style={styles.centeredView}>
//                   <View style={styles.modalView}>
//                     <DateRangePicker
//                       onSelectDateRange={(range) => {
//                         setIsRange(range);
//                       }}
//                       responseFormat="DD-MM-YYYY"
//                       maxDate={moment().add(90, 'days')}
//                       minDate={moment().subtract(90, 'days')}
//                       selectedDateContainerStyle={
//                         styles.selectedDateContainerStyle
//                       }
//                       selectedDateStyle={styles.selectedDateStyle}
//                     />
//                     <TouchableOpacity
//                       onPress={() => setIsModalVisible(!ismodalVisible)}
//                     >
//                       <View
//                         style={{
//                           marginLeft: 15,
//                           borderWidth: 1,
//                           borderColor: COLOR.primary,
//                           backgroundColor: COLOR.primary,
//                           width: 80,
//                           borderRadius: 5,
//                         }}
//                       >
//                         <Text
//                           style={{
//                             padding: 10,
//                             marginLeft: 12,
//                             color: COLOR.white,
//                           }}
//                         >
//                           Done
//                         </Text>
//                       </View>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </Modal>

//               <Modal
//                 animationType="fade"
//                 transparent={true}
//                 visible={thirdmodalVisible}
//                 onRequestClose={() => {
//                   alert('Modal has been closed.');
//                   setThirdModalVisible(!thirdmodalVisible);
//                 }}
//               >
//                 <View style={styles.centeredView}>
//                   <View style={styles.modalView}>
//                     <DateRangePicker
//                       onSelectDateRange={(range) => {
//                         setThirdRange(range);
//                       }}
//                       responseFormat="DD-MM-YYYY"
//                       maxDate={moment().add(90, 'days')}
//                       minDate={moment().subtract(90, 'days')}
//                       selectedDateContainerStyle={
//                         styles.selectedDateContainerStyle
//                       }
//                       selectedDateStyle={styles.selectedDateStyle}
//                     />
//                     <TouchableOpacity
//                       onPress={() => setThirdModalVisible(!thirdmodalVisible)}
//                     >
//                       <View
//                         style={{
//                           marginLeft: 15,
//                           borderWidth: 1,
//                           borderColor: COLOR.primary,
//                           backgroundColor: COLOR.primary,
//                           width: 80,
//                           borderRadius: 5,
//                         }}
//                       >
//                         <Text
//                           style={{
//                             padding: 10,
//                             marginLeft: 12,
//                             color: COLOR.white,
//                           }}
//                         >
//                           Done
//                         </Text>
//                       </View>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </Modal>
//             </View>
//           </View>

//           <View>
//             <View style={styles.ContactInfo}>
//               <Text
//                 style={{
//                   color: COLOR.white,
//                   fontSize: 15,
//                   fontWeight: '100',
//                 }}
//               >
//                 Contact Information
//               </Text>
//             </View>
//             <Text
//               style={{ color: COLOR.grey, marginHorizontal: 20, marginTop: 10 }}
//             >
//               Your Ticket Will be Sent To The Below Conatact details
//             </Text>
//             <View style={{ padding: 20 }}>
//               <View>
//                 <Text
//                   style={{
//                     color: COLOR.primary,
//                     fontWeight: 'bold',
//                     marginTop: 10,
//                   }}
//                 >
//                   E-mail
//                 </Text>
//               </View>
//               <View style={{ flexDirection: 'row' }}>
//                 <FontAwesome5
//                   name="envelope"
//                   size={20}
//                   style={{ marginTop: 5, marginRight: 5 }}
//                   color={COLOR.primary}
//                 />
//                 <TextInput
//                   style={{
//                     width: 280,
//                     height: 30,
//                     borderBottomWidth: 1,
//                     borderBottomColor: COLOR.grey,
//                   }}
//                   keyboardAppearance="dark"
//                   keyboardType="email-address"
//                   placeholder="E-mail"
//                   placeholderTextColor={COLOR.grey}
//                 />
//               </View>

//               <View>
//                 <Text
//                   style={{
//                     color: COLOR.primary,
//                     fontWeight: 'bold',
//                     marginTop: 10,
//                   }}
//                 >
//                   Phone Number
//                 </Text>
//               </View>
//               <View style={{ flexDirection: 'row' }}>
//                 <FontAwesome5
//                   name="lock"
//                   size={20}
//                   style={{ marginTop: 5, marginRight: 5 }}
//                   color={COLOR.primary}
//                 />
//                 <TextInput
//                   style={{
//                     width: 280,
//                     height: 30,
//                     borderBottomWidth: 1,
//                     borderBottomColor: COLOR.grey,
//                   }}
//                   keyboardType="numeric"
//                   placeholder="Phone Number"
//                   placeholderTextColor={COLOR.grey}
//                 />
//               </View>
//             </View>
//           </View>

//           <View>
//             <View style={styles.adult}>
//               <View>
//                 <Text
//                   style={{
//                     color: COLOR.white,
//                     fontSize: 15,
//                     fontWeight: '200',
//                   }}
//                 >
//                   Add Your GST DETAILS (Optional)
//                 </Text>
//               </View>
//             </View>
//             <View>
//               <Text></Text>
//             </View>
//             <View style={{ marginLeft: 20, marginBottom: 10, marginTop: 20 }}>
//               <View>
//                 <Text
//                   style={{
//                     color: COLOR.primary,
//                     fontWeight: 'bold',
//                     marginTop: 10,
//                   }}
//                 >
//                   GST Number
//                 </Text>
//               </View>
//               <View style={{ flexDirection: 'row' }}>
//                 <FontAwesome5
//                   name="percent"
//                   size={18}
//                   style={{ marginTop: 5, marginRight: 8 }}
//                   color={COLOR.primary}
//                 />
//                 <TextInput
//                   style={{
//                     width: 280,
//                     height: 30,
//                     borderBottomWidth: 1,
//                     borderBottomColor: COLOR.grey,
//                   }}
//                   keyboardAppearance="dark"
//                   keyboardType="email-address"
//                   placeholder="GST Number"
//                   placeholderTextColor={COLOR.grey}
//                 />
//               </View>

//               <View>
//                 <View>
//                   <Text
//                     style={{
//                       color: COLOR.primary,
//                       fontWeight: 'bold',
//                       marginTop: 10,
//                     }}
//                   >
//                     COMPANY NAME
//                   </Text>
//                 </View>
//                 <View style={{ flexDirection: 'row' }}>
//                   <FontAwesome5
//                     name="building"
//                     size={20}
//                     style={{ marginTop: 5, marginRight: 5 }}
//                     color={COLOR.primary}
//                   />
//                   <TextInput
//                     style={{
//                       width: 280,
//                       height: 30,
//                       borderBottomWidth: 1,
//                       borderBottomColor: COLOR.grey,
//                     }}
//                     keyboardAppearance="dark"
//                     keyboardType="email-address"
//                     placeholder="Company Name"
//                     placeholderTextColor={COLOR.grey}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>

//           <TouchableOpacity onPress={() => navigation.navigate('PayNow')}>
//             <View
//               style={{
//                 flexDirection: 'row-reverse',
//                 backgroundColor: COLOR.white,
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: '#195fb9',
//                   flex: 1,
//                   backgroundColor: COLOR.blue,
//                 }}
//               >
//                 <View
//                   style={{
//                     padding: 10,
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontWeight: 'bold',
//                       color: 'white',
//                       borderRadius: 10,
//                       marginTop: 2,
//                       fontSize: 18,
//                     }}
//                   >
//                     Proceed For Payment
//                   </Text>
//                   <FontAwesome5 name="arrow-right" size={25} color="white" />
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   adult: {
//     backgroundColor: COLOR.primary,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   ContactInfo: {
//     backgroundColor: COLOR.primary,
//     height: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   Text: {
//     color: COLOR.primary,
//     fontWeight: 'bold',
//     marginTop: 15,
//   },
//   CheckInput: {
//     borderBottomWidth: 1,
//     borderBottomColor: COLOR.grey,
//     width: 310,
//     paddingTop: 10,
//   },
//   DropDown: {
//     borderColor: COLOR.white,
//     height: 30,
//     width: 310,
//     paddingTop: 10,
//   },
//   text_header: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   selectedDateContainerStyle: {
//     height: 35,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'blue',
//   },
//   selectedDateStyle: {
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     marginTop: 210,
//     backgroundColor: COLOR.white,
//     borderTopEndRadius: 30,
//     borderTopStartRadius: 30,
//   },
//   modalView: {
//     marginVertical: 20,
//   },
// });

// export default TravelInfo;

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../assets/consts/colors';
// import Travellersinfo from '../Components/Travellers/Travellersinfo';

import ChildernInfo from '../Components/TravelInformation/ChildrenInfo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Infantinfo from '../Components/TravelInformation/Infantinfo';
import Adultinfo from '../Components/TravelInformation/Adultinfo';

const Separator = () => <View style={styles.separator}></View>;

const TravelInfo = ({ navigation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [iscollapsed, setIsCollapsed] = useState(true);
  const [thirdcollapsed, setThirdCollapsed] = useState(true);
  const [activeSections, setActiveSections] = useState([]);

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 35,
          marginTop: 20,
          opacity: 0.7,
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
          opacity: 0.7,
        }}
      >
        <Text style={{ color: 'white', fontSize: 10 }}> 25 NOV - 30 NOV </Text>
        <Text style={{ fontSize: 10, color: 'white' }}>Economy</Text>
        <Text style={{ color: 'white', fontSize: 10 }}>
          {' '}
          Adult 1 , Children 1
        </Text>
      </View>
      <Separator />
      <ScrollView>
        <View>
          <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Enter The details Of Adult 1
              </Text>
              {/*Heading of Single Collapsible*/}
              <FontAwesome5 name="chevron-down" size={20} color={COLOR.white} />
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                <Adultinfo />
              </Text>
            </View>
          </Collapsible>
        </View>
        <Separator />
        <View>
          <TouchableOpacity onPress={istoggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Enter The details Of Children 1
              </Text>
              <FontAwesome5 name="chevron-down" size={20} color={COLOR.white} />
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={iscollapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                <ChildernInfo />
              </Text>
              <FontAwesome5 name="chevron-down" size={20} color={COLOR.white} />
            </View>
          </Collapsible>
        </View>
        <Separator />
        <View>
          <TouchableOpacity onPress={ThirdtoggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Enter The details Of Infant 1
              </Text>
              {/*Heading of Single Collapsible*/}
              <FontAwesome5 name="chevron-down" size={20} color={COLOR.white} />
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={thirdcollapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                <Infantinfo />
              </Text>
            </View>
          </Collapsible>
        </View>
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
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('PayNow')}>
          <View
            style={{
              flexDirection: 'row-reverse',
              backgroundColor: COLOR.white,
              height: 100,
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
                  padding: 20,
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
      </ScrollView>
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
