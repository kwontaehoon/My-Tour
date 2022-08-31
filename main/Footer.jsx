import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const a = StyleSheet.create({
    container:{
        height: 100,
    }
})
const Footer = () => {
  return (
    <View style={a.container}>
        <Text>Footer입니다.</Text>
    </View>
  )
}

export default Footer