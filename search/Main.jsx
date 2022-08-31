import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Location from './Location'
import CalendarView from './CalendarView'
import Icon from 'react-native-vector-icons/FontAwesome'


const a = StyleSheet.create({
  container:{
    padding: 10,
  },
  box1:{
    height: 200,
    justifyContent: 'space-around',
  },
  contentbox:{
    height: 70,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 30,
  },
  content2:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 50,
  },
  box2:{
    height: 450,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    borderRadius: 10,
  },
})
const Main = () => {

  const [con, setCon] = useState(true); // 날짜 여행지 display true일때 container 크기 증가
  const [display, setDisplay] = useState([false, false]); // 날짜 여행지 display, background color
  const [subLocation, setSubLocation] = useState(false); // sublocation 애니메이션
  const [day, setDay] = useState(['Date', '']); // 날짜
  const [location, setLocation] = useState(['Location']); // 여행지
  const [check, setCheck] = useState(['none', 'none']); // 달력 여행지 완료 check

  useEffect(()=> {
    for(let i of display){
      if(i === true){ setCon(true); return; } else { setCon(false); }
    }
  }, [display])

  const datepeople = (e) => { // 날짜 사람 클릭시 배경색 변경
    let arr = [...display];
    arr[e] = !arr[e];
    setDisplay(arr);
  }
  return (
    <View style={{height: con ? 500 : 230}}>
    <ScrollView style={a.container}>
      <View style={a.box1}>
        <TouchableOpacity onPress={() => datepeople(0)} style={[a.contentbox, {backgroundColor: display[0] ? '#ddd' : 'white'}]}>
          <View style={a.content}><Text>날짜 </Text><Icon name='check' style={{display: check[0]}}></Icon></View>
          <View style={a.content2}><Text style={{fontWeight: 'bold'}}>{day[0]}~{day[day.length-1]}</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => datepeople(1)} style={[a.contentbox, {backgroundColor: display[1] ? '#ddd' : 'white'}]}>
          <View style={a.content}><Text>여행지 </Text><Icon name='check' style={{display: check[1]}}></Icon></View>
          <View style={a.content2}><Text style={{fontWeight: 'bold'}}>{location[0]} {location[1]}</Text></View>
        </TouchableOpacity>
      </View>
      
      <View style={[a.box2, {display: display[0] ? 'flex' : 'none'}]}>
        <CalendarView day={day} setDay={setDay} check={check} setCheck={setCheck} display={display} setDisplay={setDisplay}/>
      </View>
      <View style={[a.box2, {display: display[1] ? 'flex' : 'none', height: 520}]}>
        <Location subLocation={subLocation} setSubLocation={setSubLocation}
        location={location} setLocation={setLocation} check={check} setCheck={setCheck} display={display} setDisplay={setDisplay}/>
      </View>
      <Text></Text>
    </ScrollView>
    </View>
  )
}

export default Main