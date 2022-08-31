import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView,
TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const a = StyleSheet.create({
    container:{
      padding: 10,
      marginTop: 50,
    },
    modalBox:{
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    modal:{
     flex: 1,
     justifyContent: 'center',
    },
    close:{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 40,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box:{
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      backgroundColor: 'white',
      flex: 1,
      height: 60,
      borderRadius: 15,
      fontSize: 12,
      borderWidth: 1,
      borderColor: 'black',
      paddingLeft: 10,
      justifyContent: 'center',
    },
    search:{
      height: 40,
      fontSize: 20,
      textAlign: 'center',
      lineHeight: 40,
      position: 'absolute',
      right: 15,
    },
    test:{
      height: 40,
      backgroundColor: 'black',
    }
})

const Header = ({scroll, setScroll}) => {

  
  const [info, setInfo] = useState(); // 검색한 내용
  const [complete, setComplete] = useState(true); // 검색 완료했는지 안했는지

  const search = () => {
    setComplete(!complete);
  }
  return complete ? (
    <KeyboardAvoidingView style={a.container}>

    <View style={a.modalBox}>
      <View style={a.modal}><Text style={{fontSize: 30, fontWeight: 'bold'}}>검색</Text></View>
      <View style={[a.modal, {alignItems: 'flex-end', paddingRight: 10}]}>
        <TouchableOpacity style={a.close} onPress={() => setScroll(!scroll)}><Icon name='close'></Icon></TouchableOpacity>
      </View>
    </View>
      
      <View style={a.box}>
        <TextInput style={a.input} placeholder='수영장도 찾을 수 있어요.' onChangeText={(info) => setInfo(info)} clearTextOnFocus={true}></TextInput>
        <Icon name="search" style={a.search} onPress={()=> setComplete(!complete)}></Icon>
      </View>
    </KeyboardAvoidingView>
  ) : (
    <View>
      <View style={a.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>검색</Text>

        <View style={a.box}>
          <View style={a.input}><Text>{info}</Text></View>
          <Icon name="search" style={a.search} onPress={search}></Icon>
      </View>

      </View>

    </View>
  )
}

export default Header