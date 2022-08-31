import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import * as SQLite from "expo-sqlite";
import SubLocation from './SubLocation'


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
    box2:{
      marginTop: 10,
      alignItems: 'flex-end',
    },
    next:{
      width: 50,
      height: 40,
      borderRadius: 10,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    }
})
const Location = ({subLocation, setSubLocation, location, setLocation, check, setCheck, 
  display, setDisplay}) => {
  
  const [info, setInfo] = useState([]); // city db
  const [display2, setDisplay2] = useState(false);

  
  const animation = useRef(new Animated.Value(0)).current;
  const db = SQLite.openDatabase('test.db');

  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('select * from city where rank = 1', [],(_, { rows: { _array } }) => {
        setInfo(_array)});});
  },[]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: subLocation ? 0 : 1,
      useNativeDriver: true, // 애니메이션 처리작업을 자바스크립트 엔진이 아닌
      // 네이티브 레벨에서 진행하게 하는 옵션
      
    }).start();
  }, [subLocation]);


  const List1 = () => {
    let arr = [];
    info.map((x, index) => {
      arr.push(
          <TouchableOpacity onPress={() => city(x.name)} style={a.contentbox} key={index}><Text style={a.content}>{x.name}</Text></TouchableOpacity>
    )
  })
    return arr;
  }
  
  const city = (e) => {
    setTimeout(()=>{
      setDisplay2(!display2);
    }, 100);
    setSubLocation(!subLocation);
    let arr = [...location];
    arr[0] = e;
    setLocation(arr);
  }
  const complete = () => {
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
        <Animated.View style={[a.box1, { opacity: animation }, { display: display2 ? 'none' : 'flex'}]}>
          <List1 />
        </Animated.View>
        <SubLocation subLocation={subLocation} setSubLocation={setSubLocation} location={location} setLocation={setLocation}/>
        <View style={a.box2}>
          <TouchableOpacity style={a.next} onPress={complete}>
            <Text style={{color: 'white'}}>완료</Text>
          </TouchableOpacity>
        </View>
    </View>
    </>
  )
}

export default Location