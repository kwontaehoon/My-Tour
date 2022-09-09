import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const a = StyleSheet.create({
  container:{
    height: 500,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 50,
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

  }
})
const Location_Page = () => {

  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=LIBRARY"></script>
  const test = [
    {image: require('../images/강릉4.jpg')}
  ]

  console.log('test: ', test[0].image);
  console.log(typeof(test[0].image));
  console.log(Number(test[0].image));
  console.log(parseInt(test[0].image));

  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}

export default Location_Page