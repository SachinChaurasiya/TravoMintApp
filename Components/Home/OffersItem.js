// import { StatusBar } from 'expo-status-bar';
// import React,{createRef, useRef,forwardRef,useEffect,useState} from 'react';
// import { StyleSheet, Text, View,Dimensions,FlatList,Animated,Image,findNodeHandle,ImageBackground, } from 'react-native';
// import COLORS from '../../assets/consts/colors'
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const {width, height} = Dimensions.get('screen');

// const images = {
//   Flight:
//     'https://www.travomint.com/resources/images/hotel_new_img/faimly_t.jpg',
//   Hotels:
//     'https://www.travomint.com/resources/images/hotel_new_img/singapore_ft.jpg',
//   HomeStays:
//     '	https://www.travomint.com/resources/images/hotel_new_img/kuala-lumpur_ft.jpg',
//   Holidays:
//     'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// };
// const data = Object.keys(images).map((i) => ({
//   key: i,
//   title: i,
//   image: images[i],
//   ref: React.createRef()
// }));

// const Tab = React.forwardRef(({item},ref) => {
//   return(
//     <View ref={ref}>
//       <Text style={{color: COLORS.primary,fontSize: 84 / data.length ,fontWeight: 'bold'}}>{item.title}</Text> 
//     </View>
//   )
// });

// const Indicator = ({measures,scrollx}) =>{
//   const inputRange= data.map((_,i) => i * width);
//   const indicatorWidth = scrollx.interpolate({
//     inputRange,
//     outputRange: measures.map(measure => measure.width),
//   })

//   const translateX = scrollx.interpolate({
//     inputRange,
//     outputRange: measures.map(measure => measure.x),
//   })

//   return (
//     <Animated.View style={{ 
//       height:5,
//       width: indicatorWidth,
//       left:0,
//       backgroundColor:COLORS.primary,
//       position: "absolute",
//       bottom:-5,
//       transform:[{
//         translateX
//       }]
//     }}/>
//   )
// }

// const Tabs = ({data,scrollx}) =>{
//   const [measures, setMeasures] = useState([]);
//   const containerRef = React.useRef();

//   useEffect(() => {
//     let m = [];
//     data.forEach((item) => {
//       item.ref.current.measureLayout(
//         containerRef.current,(x,y,width,height) => {
//           // console.log(x,y,width,height);
//           m.push({x,y,width,height});
//           if(m.length === data.length){
//             setMeasures(m)
//           }
//       })
//     });
//   }, []);
//   // console.log(measures);

//   return (
//     <View style={{width, marginTop:10,marginBottom:10}}>
//       <View 
//       ref={containerRef}
//       style={{flexDirection:'row',justifyContent:"space-evenly",}}>
//         {data.map((item) =>{
//           return <Tab key={item.key} item={item} ref={item.ref}/>
//         })}
//       </View>
//       {measures.length > 0 && <Indicator measures={measures} scrollx={scrollx}/>}
//     </View>
//   )
// }

// export default function OffersItem() {

//    const scrollx = React.useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       {/* <StatusBar hidden /> */}
//       {/* <Tabs scrollx={scrollx} data={data} style={{margin:10}}/> */}
//       <Animated.FlatList
//       data={data}
//       keyExtractor={item => item.key}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       pagingEnabled
//       onScroll={Animated.event(
//         [{nativeEvent:{contentOffset:{x:scrollx}}}],
//         {useNativeDriver:false}
//       )}
//       renderItem={({item})=>{
//           return(
//             // <View style={{width, height}}>
//             //   <Image source={{uri: item.image}} style={{flex:1,}}/>
//             //   <View style={[StyleSheet.absoluteFillObject,{backgroundColor: "rgba(0,0,0,0.3)"}]}/>
//             // </View>
//             <View style={{paddingLeft: 20,paddingVertical: 20}}>
//               <ImageBackground style={styles.rmCardImage} source={{uri: item.image}}>
//         <Text
//           style={{
//             color: COLORS.white,
//             fontSize: 22,
//             fontWeight: 'bold',
//             marginTop: 10,
//           }}>
//           Family Travel
//         </Text>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'space-between',
//             alignItems: 'flex-end',
//           }}>
//           <View style={{width: '100%', marginTop: 10}}>
//             <View style={{flexDirection: 'row'}}>
//               <Icon name="place" size={22} color={COLORS.white} />
//               <Text style={{color: COLORS.white, marginLeft: 5}}>
//                 Use Coupon Code
//               </Text>
//             </View>
//             <View style={{flexDirection: 'row'}}>
//               <Text style={{color: COLORS.primary, marginLeft: 5,fontSize:20,fontWeight: 'bold'}}>Travomint</Text>
//             </View>
//           </View>
//           <Text style={{color: COLORS.white, fontSize: 13}}>
//            Get 15% Off
//           </Text>
//         </View>
//       </ImageBackground>
//             </View>
//           )
//       }}
//       />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
//   rmCardImage: {
//     width: width - 40,
//     height: 200,
//     marginRight: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     padding: 10,
//   }
// });



import React from 'react';
import {View, StyleSheet,Text,FlatList,Dimensions,ImageBackground,Image} from 'react-native';
import COLORS from '../../assets/consts/colors';
import places from '../../assets/consts/places';
import offers from '../../assets/consts/Offers';
import Icon from 'react-native-vector-icons/MaterialIcons';
import offerlogo from '../../assets/Image/discount.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width} = Dimensions.get('screen');


const RecommendedCard = ({place}) => {
  return (
    <View style={style.rmCardImage} >
      <Image source={place.image} style={style.logoImage}/>
    </View>
  );
};

const Offersitem = () => {
  return (
    <View>
      <View>
        <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',alignItems: 'center',}}>
          <Text style={style.sectionTitle}>Offers</Text>
          <Image source={offerlogo} style={{width:20,height:20}} color="blue"/>
          </View>
          <View style={{flexDirection:'row',alignItems: 'center',paddingRight: 20}}>
            <Text style={{color:COLORS.primary,fontSize:16,paddingRight:5}}>View More</Text>
            <View>
                <FontAwesome5 name="chevron-right" color={COLORS.primary} size={18}/>
            </View>
          </View>
          </View>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={offers}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  logoImage: {
    width:"100%",
    resizeMode:"contain",
    height: 200,
  },
  rmCardImage: {
    width: width -40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    // marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color:COLORS.primary
  },
})

export default Offersitem;
