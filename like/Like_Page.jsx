import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import all_location from '../local'

const a = StyleSheet.create({
  container:{
    marginTop: 50,
    borderWidth: 3,
    borderColor: 'black',
    height: 400,
  },
  subcontainer:{
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'pink',
  },
  imagetest:{
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
  }
})

const Like_page = () => {

  console.log('like', all_location);
  console.log(all_location[0].image1);
  return (
    <View style={a.container}>
      {/* <ScrollView horizontal={true}>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
      </ScrollView> */}
      <View style={a.imagetest}>
        <Text>{all_location[0].title}</Text>
        <Image source={all_location[0].image1}></Image>
      </View>
    </View>
  )
}

export default Like_page