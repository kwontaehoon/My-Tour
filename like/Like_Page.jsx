import React, { useEffect, useContext } from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import all_location from '../local'
import InfoContext from '../context'

const a = StyleSheet.create({
  container:{
    padding: 5,
  },
  header:{
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header_button:{
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    borderWidth: 2,
    borderColor: 'black',
    height: 230,
    marginBottom: 10,
  },
  select_box:{
    height: 30,
    padding: 10,
  },
  select:{
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  box2:{
    borderWidth: 1,
    borderColor: 'grey',
    height: 150,
    flexDirection: 'row',
  },
  image_box:{
    flex: 1,
  },
  image:{
    width: '100%',
    height: '100%',
  },
  content_box:{
    flex: 2,
  },
  location_box:{
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  location_button:{
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent:'center',
    alignItems: 'center',
  },
  except:{
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const Like_page = ({navigation}) => {

  const { like, setLike } = useContext(InfoContext);
  console.log('like: ', like);

  const unsubscribe = navigation.addListener('focus', () => { // 찜 네비 누를때마다 마운트
    setLike((prevState) => ({
      ...prevState,
      alaram: false
    }))
  });
  
  // useEffect(() => {
  //   return () => unsubscribe();
  // });

  const List1 = () => {
    if(like.info.length !== 0){
    let arr = [];
    like.info.map((x, index)=>{
      arr.push(
        <View style={a.box} key={index}>
          <View style={a.select_box}>
            <View style={a.select}></View>
          </View>
          <View style={a.box2}>
            <View style={a.image_box}>
              <Image source={x.image1} style={a.image} resizeMode='stretch'></Image>
            </View>
            <View style={a.content_box}>
              <Text style={{padding: 5, fontWeight: 'bold'}}>{x.title}</Text>
              <Text style={{padding: 5}}>{x.content}</Text>
            </View>
          </View>
          <View style={a.location_box}>
          <TouchableOpacity style={a.location_button} onPress={()=>navigation.navigate('위치', x)}>
            <Text>위치보기</Text>
          </TouchableOpacity>
          </View>
      </View>
      )
    })
    return arr;
  }else return(
    <View style={a.except}><Text>비어있음</Text></View>
  )
  }

  return (
    <View style={a.container}>
      <View style={a.header}>
        <TouchableOpacity style={a.header_button} onPress={()=>navigation.navigate('위치', 1234)}><Text>전체선택</Text></TouchableOpacity>
        <View style={a.header_button}><Text>선택삭제</Text></View>
        <View style={a.header_button}><Text>더보기</Text></View>
      </View>
      <ScrollView style={{height: '85%'}}>
        <List1 />
      </ScrollView>
    </View>
  )
}

export default Like_page