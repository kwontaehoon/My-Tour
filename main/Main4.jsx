import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CustomPagination } from './CustomPagination';
import * as SQLite from "expo-sqlite";

const a = StyleSheet.create({
    container:{
      padding: 20,
    },
    subcontainer:{
      height: 550,
    },
    imageBox:{
      height: 370,
      borderRadius: 10,
    },
    image:{
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    contentBox:{
      height: 100,
      marginTop: 20,
      backgroundColor: '#ddd',
      borderRadius: 10,
      padding: 5,
    },
    contentBox2:{
      height: 20,
      flexDirection: 'row',
      margin: 5,
    },
    content:{
        flex: 1,
    },
    child:{
        width: 371,
    },
    footerBox:{
      height: 40,
      alignItems: 'center',
    },
    footer:{
      width: 100,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      elevation: 10,
    }
})
const Main4 = () => {
  
  const db = SQLite.openDatabase('test.db');
  const kwon = 3;
  const test = [
    {
      id: 1,
      title: '강원도 강릉시',
      content: '#커피거리 #주문진해변 #안목해변 #강문해변',
      score: '4.1',
      image1: require('../images/강릉1.jpg'),
      image2: require('../images/강릉2.jpg'),
      image3: require('../images/강릉3.jpg'),
      image4: require('../images/강릉4.jpg')
    },
    {
      id: 2,
      title: '제주도 서귀포시',
      content: '#협재해수욕장 #성산일출봉',
      score: '4.2',
      image1: require('../images/제주도1.jpg'),
      image2: require('../images/제주도2.jpg'),
      image3: require('../images/제주도3.jpg'),
      image4: require('../images/제주도4.jpg')
    },
    {
      id: 3,
      title: '전라남도 여수시',
      content: '#케이블카 #여수밤바다',
      score: '4.3',
      image1: require('../images/여수1.jpg'),
      image2: require('../images/여수2.jpg'),
      image3: require('../images/여수3.jpg'),
      image4: require('../images/여수4.jpg')
    },
    {
      id: 4,
      title: '경기도 양평군',
      content: '#수영장',
      score: '4.4',
      image1: require('../images/양평1.jpg'),
      image2: require('../images/양평2.jpg'),
      image3: require('../images/양평3.jpg'),
      image4: require('../images/양평4.jpg')
    },

  ]


  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('select * from main4;', [],(_, { rows: { _array } }) => {
        setInfo(_array)});});
  }, []);

  const [info, setInfo] = useState([]);
  console.log('info: ', info);

  const List1 = () => {
    let arr = [];
    test.map((x, index)=>{
      arr.push(
        <View style={a.subcontainer} key={index}>
            <View style={a.imageBox}>
                <SwiperFlatList showPagination PaginationComponent={CustomPagination}
                autoplay={true} autoplayDelay={5} autoplayLoop>
                    <View style={a.child}>
                      <Image source={x.image1} style={a.image} resizeMode='stretch'></Image>
                    </View>
                    <View style={a.child}>
                      <Image source={x.image2} style={a.image} resizeMode='stretch'></Image>
                    </View>
                    <View style={a.child}>
                      <Image source={x.image3} style={a.image} resizeMode='stretch'></Image>
                    </View>
                    <View style={a.child}>
                      <Image source={x.image4} style={a.image} resizeMode='stretch'></Image>
                    </View>
                </SwiperFlatList>
            </View>
            <View style={a.contentBox}>
                <View style={a.contentBox2}>
                    <View style={a.content}><Text>{x.title}</Text></View>
                    <View style={[a.content, {alignItems: 'flex-end'}]}><Text><Icon name='heart'></Icon>  {x.score}</Text></View>
                </View>
                <View style={a.contentBox2}>
                        <View style={a.content}><Text style={{color: 'grey'}}>{x.content}</Text></View>
                </View>
            </View>
        </View>
      )
    })
    return arr;
  }

  return (
    <ScrollView style={a.container}>
      <List1 />
    </ScrollView>
  )
}

export default Main4