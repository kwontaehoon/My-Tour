import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const a = StyleSheet.create({
    container:{
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
    }
})
const Main5 = () => {
  return (
    <View style={a.container}>
        <Text>첫번째 main</Text>
    </View>
  )
}

export default Main5