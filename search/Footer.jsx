import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

const a = StyleSheet.create({
    container:{
      height: 100,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button:{
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#ddd',
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      shadowColor: "black",
      backgroundColor: '#ddd',
    }
})
const Footer = ({scroll, setScroll}) => {

  const info = [1,2,3];

  return (
    <View style={a.container}>
      <TouchableOpacity style={a.button} onPress={() => setScroll(!scroll)}>
        <Text style={{fontSize: 18,}}>검색하기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer