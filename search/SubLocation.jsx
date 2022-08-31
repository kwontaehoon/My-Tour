import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Touchableopacity, Scrollview } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as SQLite from "expo-sqlite"

const a = StyleSheet.create({
    container:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box1:{
      height: 200,
    },
    contentbox:{
      borderWidth: 1,
      borderColor: 'black',
      width: '30%',
      marginTop: 7,
      borderRadius: 10,
      height: 35,
      marginRight: 11,
    },
    content:{
      textAlign: 'center',
      lineHeight: 32,
    }
})
const SubLocation = ({subLocation, setSubLocation, location, setLocation}) => {


  const [ani, setAni] = useState();
  const [info, setInfo] = useState([]); // seoul db
  
  const db = SQLite.openDatabase('test.db');

  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('select * from city where rank = 2;', [],(_, { rows: { _array } }) => {
        setInfo(_array)});});
  },[]);

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.sequence([
        Animated.delay(100),
        Animated.timing(animation, {
          toValue: subLocation ? 1 : 0,
          useNativeDriver: true, // 애니메이션 처리작업을 자바스크립트 엔진이 아닌
          // 네이티브 레벨에서 진행하게 하는 옵션
        })]).start();
      }, [subLocation]);

      const List1 = () => {
        let arr = [];
        info.map((x, index) => {
          arr.push(
              <TouchableOpacity onPress={() => test(x.name)} style={a.contentbox} key={index}><Text style={a.content}>{x.name}</Text></TouchableOpacity>
        )
      })
        return arr;
      }

      const test = (e) => {
        let arr = [...location];
        arr[1] = e;
        setLocation(arr);
      }
      
      return (
        <Animated.View style={[a.container, { opacity: animation }]}>
            <List1 />
        </Animated.View>
      )
}

export default SubLocation