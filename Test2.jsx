import React, { useContext } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import UserContext from './context'

const a = StyleSheet.create({
    container:{
        width: 400,
        height: 400,
        backgroundColor: 'pink',
    }
})

const Test2 = () => {

  const info = useContext(UserContext);
  return (

    <View style={a.container}>
        <Text>gg</Text>
        <UserContext.Consumer>{
          // provider가 없다면 context.js에 있는 taehoon kwon이 출력됨
          value=> <Text>{value.name}</Text>}
        </UserContext.Consumer>
        <Text>{info.name}</Text>
    </View>
  )
}

export default Test2