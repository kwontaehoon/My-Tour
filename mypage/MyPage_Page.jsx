import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Main from './Main'
import Login from './Login'
import SignUp from './SignUp'

const a = StyleSheet.create({
  container:{
    marginTop: 20,

  }
})


const MyPage_page = ({navigation}) => {
  return (
    <>
      <Login />
      {/* <Main navigation={navigation}/> */}
    </>
  )
}

export default MyPage_page