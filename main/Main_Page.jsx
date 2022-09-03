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

const Main_Page = () => {

  const [scroll, setScroll] = useState(false); // search display animation
  const [complete, setComplete] = useState(true);
  console.log('complete: ', complete);

  return (
    <>
    <Header scroll={scroll} setScroll={setScroll} />
    <Search_Page scroll={scroll} setScroll={setScroll} complete={complete} setComplete={setComplete}/>
    <Result complete={complete} setComplete={setComplete}/>
    <ScrollView style={{display: complete ? 'none' : 'flex'}}>
      <Main complete={complete} setComplete={setComplete}/>
      <Main4 />
      {/* <Main5 /> */}
      <Main2 />
      <Main3 />
      <Footer />
    </ScrollView>
    </>
  )
}

export default Main_Page