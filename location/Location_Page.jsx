import React, { useState, useEffect, useContext } from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import InfoContext from '../context'
import all_location from '../local'

const a = StyleSheet.create({
  container:{
    height: '100%',
  },
  box:{
    width: '85%',
    height: 60,
    position: 'absolute',
    top: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  like:{
    padding: 10,
    height: 50,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  like_text:{
    color: 'gray',
    fontWeight: 'bold',
  },
  map:{
  	flex: 1,
    width: '100%',
    height: '100%',
  },
})

const Location_Page = ({navigation, route}) => {
  
  const { like, setLike } = useContext(InfoContext); // 좋아요 정보
  console.log('like: ', like);
  const [location, setLocation] = useState(null); // 경도, 위도 정보
  const [errorMsg, setErrorMsg] = useState(null); // 위치정보 에러발생시

  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.61524,
    longitude: 126.715,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  console.log('initialRegion: ', initialRegion);

  const [like_location, setLike_location] = useState([ // 좋아요 위치 정보
    {
      latitude: 0,
      longitude: 0,
    }
])

const test = [{ latitude : 37.615 , longitude : 126.715 }];

  console.log('like_location', like_location);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
    }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const unsubscribe = navigation.addListener('focus', () => { // 찜 네비 누를때마다 마운트
    console.log('위치 누를때마다 실행됨');
    if(like.info.length !== 0){
    let arr = [];
    like.info.map((x, index) => {
      arr.push({
        latitude: x.latitude,
        longitude: x.longitude
      });
    })
   setLike_location(arr);
  }
    

    // setLike_location(prevState => [
    //   ...prevState,
    //   {
    //     latitude: 111,
    //     longitude: 123,
    //   }
    // ])
  
  });

  useEffect(()=>{
    if(route.params !== undefined){

    setInitialRegion(prevState => ({
      ...prevState,
      latitude: Number(route.params.latitude),
      longitude: Number(route.params.longitude),
    }));
    }
  }, [route]);

  const List1 = () => {
    if(like.info.length !== 0){
    let arr = [];
    like.info.map((x, index)=>{
      arr.push(
        <TouchableOpacity style={a.like} key={index} onPress={()=>like_touch(x)}><Text style={a.like_text}>{x.title}</Text></TouchableOpacity>
      )
    })
    return arr;
  }else return(
    <View></View>
  )
  }

  const like_touch = (e) => {
    console.log('like_touch');
    console.log(e.latitude);
    console.log(e.longitude);
    setInitialRegion(prevState => ({
      ...prevState,
      latitude: Number(e.latitude),
      longitude: Number(e.longitude),
    })); 
  }


  return (
    <View style={a.container}>
        <View style={a.box}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <List1 />
          </ScrollView>
        </View>
        
      
        <MapView
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          // provider={PROVIDER_GOOGLE}
          style={a.map}
          region={initialRegion}
          // customMapStyle={mapstyle}
        >
        {like_location.map((x, index)=>( // test.map(x => {} 가아니다 소괄호를 써준다.)
           <Marker
           key={index}
           coordinate={{latitude : Number(x.latitude), longitude: Number(x.longitude)}} />
        ))}
        </MapView>
    </View>
  )
}

export default Location_Page