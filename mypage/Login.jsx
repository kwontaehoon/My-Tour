import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const a = StyleSheet.create({
    container:{
      height: 700,
      marginTop: 50,
    },
    logout:{
      position: 'absolute',
      top: 0,
      width: 70,
      height: 50,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header:{
      height: 270,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileBox:{
      width: 80,
      height: 80,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 40,
    },
    main:{
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box1:{
      borderWidth: 1,
      borderColor: '#ddd',
      width: '33.3%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    box2:{
      borderBottomWidth: 1,
      borderColor: 'black',
      height: 50,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 20,
    },
    footer:{
      backgroundColor: 'yellow',
      height: 100,
    }
})

const Login = ({navigation, route}) => {

  // console.log(route); // undefined

  const routetest = [
    { id: 'gju04195', password: 1234, name: '권태훈', email: 'gju4195@naver.com'}
]

  console.log('login route: ', route.params);

  const [list, setList] = useState([
  {text: '좋아요', icon: 'heart'},
  {text: '최근본상품', icon: 'bookmark'},
  {text: '채팅', icon: 'comment'},
  {text: 'Q&A', icon: 'question'},
  {text: '위치', icon: 'map-marker'},
  {text: '리뷰'},
  {text: '옵션7'},
  {text: '옵션8'},
  {text: '설정'}
]);

useEffect(()=>{
  const [member, id, password] = route.params;
  console.log(member);
  console.log(id);
  console.log(password);
})

  const List1 = () => {
    let arr = [];
    list.map((x, index)=>{
      arr.push(
        <View style={a.box1} key={index}>
        <View><Icon name={x.icon} style={{fontSize: 22, marginBottom: 10}}></Icon></View>
        <View><Text>{x.text}</Text></View>
      </View>
      )
    })
    return arr;
  }

  const logout = () => {
     navigation.push('Login');
  }
    
  return (
    <View style={a.container}>
      <TouchableOpacity style={a.logout} onPress={logout}><Text>로그아웃</Text></TouchableOpacity>
      <View style={a.header}>
        <View style={a.profileBox}></View>
        <View style={{marginTop: 10}}>
          <Text>{routetest[0].name}</Text>
        </View>
        <View><Text>{routetest[0].email}</Text></View>
      </View>
      <View style={a.main}>
        <List1 />
      </View>
      <View style={a.box2}>
        <TouchableOpacity><Text>순서변경</Text></TouchableOpacity>
      </View>
      <View style={a.footer}></View>
    </View>
  )
}

export default Login