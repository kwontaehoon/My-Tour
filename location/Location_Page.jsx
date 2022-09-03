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

  const test = [
    {image: require('../images/강릉4.jpg')}
  ]

  console.log('test: ', test[0].image);
  console.log(typeof(test[0].image));
  console.log(Number(test[0].image));
  console.log(parseInt(test[0].image));

  return (
    <View style={a.container}>
        <Image source={require('../images/강릉4.jpg')} style={a.image}></Image>
    </View>
  )
}

export default Location_Page