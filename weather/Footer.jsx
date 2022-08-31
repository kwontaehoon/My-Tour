import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const a = StyleSheet.create({
    container:{
      height: 80,
      backgroundColor: '#ddd',
      alignItems: 'center',
    },
    box1:{
      width: '100%',
      alignItems: 'center',
    }
})
const Footer = ({scroll, setScroll}) => {

  return (
    <View style={a.container}>
      <TouchableOpacity style={a.box1}onPress={()=>setScroll(!scroll)}>
          <Icon name='caret-up' style={{fontSize: 20}}></Icon>
      </TouchableOpacity>
    </View>
  )
}

export default Footer