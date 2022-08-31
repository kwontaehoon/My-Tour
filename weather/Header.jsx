import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const a = StyleSheet.create({
    container:{
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'lightgrey',
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
    }
})
const Header = ({select}) => {
  return (
    <View style={a.container}>
      <Text style={a.text}>{select[0].title.split(' ')[1]}</Text>
    </View>
  )
}

export default Header