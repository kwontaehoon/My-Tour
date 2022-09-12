import React, { useState, useEffect, useContext } from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
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
    height: 80,
    position: 'absolute',
    top: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  like:{
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  map:{
  	flex: 1,
    width: '100%',
    height: '100%',
  },
})

const Location_Page = () => {
  
  console.log('all_location: ', all_location);
  const { test } = useContext(InfoContext);
  const { isDark, setIsDark } = useContext(InfoContext);
  console.log('test: ', test);
  console.log('isDark: ', isDark);

  const [location, setLocation] = useState(null); // 경도, 위도 정보
  console.log('location: ', location); 
  const [errorMsg, setErrorMsg] = useState(null);

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


  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.61524,
    longitude: 126.715,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <View style={a.container}>
        <View style={a.box}>
          <ScrollView horizontal={true}>
              <View style={a.like}></View>
              <View style={a.like}></View>
              <View style={a.like}></View>
              <View style={a.like}></View>
              <View style={a.like}></View>
          </ScrollView>
        </View>
        
      
        <MapView
          showsUserLocation={true}
          showsMyLocationButton={[true]}
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