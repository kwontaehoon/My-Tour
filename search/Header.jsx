import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView,
TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import all_location from '../local'
import AsyncStorage from "@react-native-async-storage/async-storage"

const a = StyleSheet.create({
    container:{
      padding: 10,
      marginTop: 50,
    },
    modalBox:{
      backgroundColor: 'white',
      flexDirection: 'row',
      marginBottom: 20,
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
})

const Header = ({scroll, setScroll, navigation}) => {

  const [info, setInfo] = useState(all_location); // 검색한 내용
  const [complete, setComplete] = useState(true); // 검색 완료했는지 안했는지
  const [data, setData] = useState();

  const search = () => {
    setComplete(!complete);
  }
  const select = (e) => {
    if(e !== null){
    AsyncStorage.setItem(e.title, e.title);
    navigation.push('Result', e);
    }
  }

  return complete ? (
    <View style={a.container}>
      <View style={a.modalBox}>
        <View style={a.modal}><Text style={{fontSize: 30, fontWeight: 'bold'}}>검색</Text></View>
        <View style={[a.modal, {alignItems: 'flex-end', paddingRight: 10}]}>
        <TouchableOpacity style={a.close} onPress={() => setScroll(!scroll)}><Icon name='close'></Icon></TouchableOpacity>
      </View>
    </View>
      <AutocompleteDropdown clearOnFocus={false} closeOnBlur={false}
        closeOnSubmit={false} dataSet={info}
        onSelectItem={(e) => select(e)} />
    </View>
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