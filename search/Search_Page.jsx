import React, { useState, useEffect, useRef } from 'react'
import { Text, StyleSheet, Animated } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const a = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        top: 0,
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 100,
    },
})

const Search_Page = ({scroll, setScroll, navigation}) => {

  const animation = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(animation, {
      toValue: scroll ? 0 : -1000,
      useNativeDriver: true, // 애니메이션 처리작업을 자바스크립트 엔진이 아닌
      // 네이티브 레벨에서 진행하게 하는 옵션
    }).start();
  }, [scroll]);
  
  return (
    <Animated.View style={[a.container, { transform: [{translateY: animation}], display: scroll ? 'flex' : 'none' }]}>
      <Header scroll={scroll} setScroll={setScroll} navigation={navigation}/>
      <Main />
      <Footer scroll={scroll} setScroll={setScroll}/>
    </Animated.View>
  )
}

export default Search_Page