import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'

const a = StyleSheet.create({
    container:{
      padding: 20,
      height: 200,
      backgroundColor: 'lightgrey',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box1:{
      flexDirection: 'row',
    },
    content1:{
      width: '90%',
      height: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    content1_temp:{
      width: 50,
      height: 50,
      justifyContent: 'space-around',
      marginLeft: 10,
    },
    content2:{
      width: '90%',
      height: '30%',
      padding: 10,
      marginTop: -30,
    },
    box2:{
      flex:1,
      height: 260,
    },
    text:{
      fontSize: 65,
      fontWeight: '400',
    },
    image:{
      width: 250,
      height: 250,
    }
})
const Main = ({list}) => {

  return (
    <View style={a.container}>
      <View style={a.box1}>
        <View style={[a.box2, {paddingTop: 20, paddingLeft: 20}]}>
          <View style={a.content1}>
            <Text style={a.text}>{(list[0].main.temp - 273.15).toFixed(0)}º</Text>
            <View style={a.content1_temp}>
              <Text><Icon name='arrow-up' style={{color: 'orange'}}></Icon> {(list[0].main.temp_max - 273.15).toFixed(1)}º</Text>
              <Text><Icon name='arrow-down' style={{color: 'skyblue'}}></Icon> {(list[0].main.temp_min - 273.15).toFixed(1)}º</Text>
            </View>
          </View>
          <View style={a.content2}>
            <Text>체감온도 {(list[0].main.feels_like - 273.15).toFixed(0)}º</Text>
            <Text>{moment(new Date()).format('MM월 DD일 dddd')}</Text>
          </View>
        </View>
        <View style={[a.box2, {alignItems: 'center', justifyContent: 'center'}]}>
          <Image style={a.image} source={{uri: `http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`}} resizeMode='cover'></Image>
        </View>
      </View>
    </View>
  )
}

export default Main