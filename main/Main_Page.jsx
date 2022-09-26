import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Header from './Header'
import Main from './Main'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'
import Result from './Result'
import Footer from './Footer'
import Search_Page from '../search/Search_Page'

const Main_Page = ({navigation, list, like, setLike}) => {

  const [scroll, setScroll] = useState(false); // search display animation
  const [complete, setComplete] = useState(false); // 태그 display

  return (
    <>
    <Header scroll={scroll} setScroll={setScroll} />
    <Search_Page scroll={scroll} setScroll={setScroll} navigation={navigation}/>
   
    <ScrollView>
      <Main navigation={navigation}/>
      <Main4/>
      {/* <Main5 /> */}
      <Main2 navigation={navigation}/>
      <Main3 navigation={navigation}/>
      <Footer />
    </ScrollView>
    </>
  )
}

export default Main_Page