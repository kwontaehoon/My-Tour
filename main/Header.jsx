import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const a = StyleSheet.create({
    container:{
        height: 80,
        marginTop: 50,
    },
    box:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input:{
        backgroundColor: 'white',
        width: '90%',
        height: 60,
        borderRadius: 15,
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        justifyContent: 'center',
      },
      serach:{
        position: 'absolute',
        right: 40,
      }
})
const Header = ({scroll, setScroll}) => {

    const search_bar = () => {
        setScroll(!scroll);
    }
  return (
    <View style={a.container}>
        <View style={a.box}>
          <TouchableOpacity style={a.input} onPress={search_bar} activeOpacity={0.5}>
            <Text>검색하기</Text>
          </TouchableOpacity>
          <View style={a.serach}><Icon name='search' style={{fontSize: 20}}></Icon></View>
        </View>
    </View>
  )
}

export default Header