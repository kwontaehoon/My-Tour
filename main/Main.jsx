import React, {useRef, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Button, Image, TouchableOpacity } from 'react-native'

const a = StyleSheet.create({
    container:{
      paddingLeft: 20,
      paddingTop: 20,
      height: 180,
    },
    subcontainer:{
      width: 1000,
      height: 130,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box2:{
      width: 100,
      height: 100,
      borderRadius: 20,
      shadowColor: "black",
      backgroundColor: 'white',
      elevation: 20,
      shadowOffset: {x: 30, y: 20},
      shadowOpacity: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image:{
      width: '100%',
      height: '100%',
      borderRadius: 10,
      overflow: 'hidden',
    },
    content:{
      position: 'absolute',
      bottom: 10,
      right: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'black',
      width: 40,
      alignItems: 'center',
      borderRadius: 10,
    }

})
const Main = () => {

  const images = ['김포', '이천', '강화도', '여수', '강원도', '군산', '전주', '상암', '마곡'];
  const [cm, setCm] = useState(0);

  const List1 = () => {
    let arr = [];
    images.map((x, index) => {
      // switch(index){ // 변수와 문자열의 조합이 안된다.. 벡틱도 불가
      //     case 0: count = require('../images/h1.png'); break;
      //     case 1: count = require('../images/h3.png'); break;
      //     case 2: count = require('../images/h4.png'); break;
      //     case 3: count = require('../images/h2.png'); break;
      //     case 4: count = require('../images/h4.png'); break;
      //     case 5: count = require('../images/h1.png'); break;
      //     case 6: count = require('../images/h1.png'); break;
      //     case 7: count = require('../images/h1.png'); break;
      // }
      arr.push(
        <TouchableOpacity style={a.box2} key={index}>
            <View><Text style={{fontSize: 20, fontWeight: '500'}}>{x}</Text></View>
        </TouchableOpacity>
      )
    })
    return arr;
  }

  return (
    <View style={a.container}>
    <View><Text style={{fontWeight: 'bold', fontSize: 20}}>바로가기</Text></View>
    <ScrollView horizontal={true} pagingEnabled={true} 
      contentOffset={cm === 1 ? {x: 1000, y: 200}: {x: 0, y: 0}}
      scrollWithoutAnimationTo={ cm ===2 ? (1000, 200) : (0, 0)}
      scrollToOverflowEnabled={cm === 3 ? {x: 1000, y: 200}: {x: 0, y: 0}}>
        <View style={a.subcontainer}>
          <List1 />
        </View>
    </ScrollView>
    </View>
  )
}

export default Main