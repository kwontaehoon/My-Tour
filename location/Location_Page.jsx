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

const Location_Page = ({route}) => {
  
  const { like, setLike } = useContext(InfoContext);
  const [location, setLocation] = useState(null); // 경도, 위도 정보
  const [errorMsg, setErrorMsg] = useState(null); // 위치정보 에러발생시

  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.61524,
    longitude: 126.715,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  
  console.log('현재 위치: ', initialRegion);

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

  useEffect(()=>{
    console.log('useEffect');
    console.log('location route: ', route);
    console.log(route.params.latitude);
    console.log(route.params.longitude);
    setInitialRegion((prevState) => ({
      ...prevState,
      latitude: route.params.latitude,
      longitude: route.params.longitude,
    }));
  }, [route]);

  const List1 = () => {
    if(like.info.length !== 0){
    let arr = [];
    like.info.map((x, index)=>{
      arr.push(
        <TouchableOpacity style={a.like}><Text style={a.like_text}>{x.title}</Text></TouchableOpacity>
      )
    })
    return arr;
  }else return(
    <View></View>
  )
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
          style={[a.map]}
          initialRegion={initialRegion}
          // customMapStyle={mapstyle}
        >
        
        <Marker
        coordinate={{ latitude : 37.615 , longitude : 126.715 }}
        />
            
        </MapView>
    </View>
  )
}

export default Location_Page