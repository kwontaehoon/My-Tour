import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

const a = StyleSheet.create({
  container:{
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'black',
    height: 400,
    backgroundColor: 'blue',
  },
  subcontainer:{
    height: 200,
    borderWidth: 1,
    borderColor: 'black',

  }
})
const Like_page = () => {
  return (
    <View style={a.container}>
      <ScrollView>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
        <View style={a.subcontainer}></View>
      </ScrollView>
    </View>
  )
}

export default Like_page