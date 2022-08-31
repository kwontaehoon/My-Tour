import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Calendar } from "react-native-calendars";

const a = StyleSheet.create({
    container:{
        padding: 20,
    },
    title:{
      fontSize: 30,
    },
    box1:{
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
const CalendarView = ({day, setDay, check, setCheck, display, setDisplay}) => {
  
  const [selectDate, setSelectDate] = useState({}); // calendar selected: true
  const [overlap, setOverlap] = useState([]); // 선택된 날짜가 떨어져있으면 초기화


  const select = (e, date) => { // 날짜 선택시 selected

    const arr = {[e]: {selected: true}};

    const arr2 = {...selectDate, ...arr};

    const arr3 = [...overlap];

    setDay([e, '']);

    if(Object.keys(selectDate).length === 0){
    }else{
    if(overlap[overlap.length-1]+1 === date){console.log('aa');}
    else {
    setSelectDate({});
    setOverlap([date]);
    setSelectDate(arr);
    return; }}

    arr3.push(date);
    setOverlap(arr3);
    setSelectDate(arr2);
    console.log(day[0] === 'Date');
    if(day[0] === 'Date'){setDay([e, '']);}else{

      let arrgg = [...day];
      arrgg.push(date);
      setDay(arrgg);      
    }
  }
  const complete = () => {
    let arr = [...check];
    arr[0] = 'flex';
    setCheck(arr);
    let arr2 = [...display];
    arr2[0] = !arr2[0];
    setDisplay(arr2);
  }

  return (
    <View style={a.container}>
        <Text style={a.title}>날짜를 알려주세요!</Text>
        <View>
          <Calendar onDayPress={(day) => select(day.dateString, day.day)}
          markedDates={selectDate}/>
        </View>
        <View style={a.box1}>
          <TouchableOpacity style={a.next} onPress={complete}>
            <Text style={{color: 'white'}}>완료</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CalendarView