import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const a = StyleSheet.create({
    container:{
      height: 100,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button:{
      backgroundColor: '#ddd',
      width: '30%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      shadowColor: "black",
      backgroundColor: '#ddd',
      elevation: 10,
      shadowOffset: {x: 30, y: 20},
      shadowOpacity: 0.2,
    }
})
const Footer = ({scroll, setScroll}) => {

  return (
    <View style={a.container}>
       <TouchableOpacity style={a.button}>
        <Text style={{fontSize: 18,}}>초기화</Text>
      </TouchableOpacity>
      <TouchableOpacity style={a.button} onPress={() => setScroll(!scroll)}>
        <Text style={{fontSize: 18,}}>검색하기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer