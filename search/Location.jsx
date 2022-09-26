import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import * as SQLite from "expo-sqlite";
import all_location from '../local'


const a = StyleSheet.create({
    container:{
        padding: 20,
    },
    title:{
      fontSize: 30,
      marginBottom: 10,
    },
    box1:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    contentbox:{
      borderWidth: 1,
      borderColor: 'black',
      width: '30%',
      marginTop: 7,
      borderRadius: 10,
      height: 55,
      marginRight: 11,
    },
    content:{
      textAlign: 'center',
      lineHeight: 55,
    },
})
const Location = ({location, setLocation, check, setCheck, 
  display, setDisplay}) => {
  
  const [list, setList] = useState(all_location); // 지역 전체

  
  const animation = useRef(new Animated.Value(0)).current;
  const db = SQLite.openDatabase('test.db');

  // useEffect(()=> {
  //   db.transaction(tx => {
  //     tx.executeSql('select * from city where rank = 1', [],(_, { rows: { _array } }) => {
  //       setInfo(_array)});});
  // },[]);



  const List1 = () => {
    let arr = [];
    list.map((x, index) => {
      arr.push(
          <TouchableOpacity onPress={() => city(x.title)} style={a.contentbox} key={index}><Text style={a.content}>{x.title}</Text></TouchableOpacity>
    )
  })
    return arr;
  }
  
  const city = (e) => {
    setLocation(e);
    let arr = [...check];
    arr[1] = 'flex';
    setCheck(arr);
    let arr2 = [...display];
    arr2[1] = !arr2[1];
    setDisplay(arr2);
  }

  return (
    <>
    <View style={a.container}>
        <Text style={a.title}>여행지를 알려주세요!</Text>
        <View style={a.box1}>
          <List1 />
        </View>
    </View>
    </>
  )
}

export default Location