import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import * as SQLite from "expo-sqlite"


const a = StyleSheet.create({
    container:{
        height: 80,
    },
    box:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input:{
        backgroundColor: 'white',
        width: '90%',
        height: 60,
        borderRadius: 15,
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        justifyContent: 'center',
      },
      serach:{
        position: 'absolute',
        right: 40,
      }
})
const City_Search = ({navigation}) => {

  const [info, setInfo] = useState([]);

  console.log('city_search info: ', info);

  const db = SQLite.openDatabase('test.db');

  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('select * from city_search;', [],(_, { rows: { _array } }) => {
        setInfo(_array)});});
  }, []);

  const complete = (e) => {
    if(e !== null){
      navigation.navigate('날씨', e);
    }
  }

  const aa = '검색하기';

  return (
    <View style={a.container}>
        <AutocompleteDropdown clearOnFocus={false} closeOnBlur={false}
        closeOnSubmit={false} initialValue={{aa}}
        onSelectItem={(e) => complete(e)}
        // onSubmit={(e) => complete(e)}
        // onChangeText={(e)=>complete(e)}
        dataSet={info}
/>
    {/* <Button title='Go Back' onPress={()=>navigation.navigate('Login', {id: 1})}></Button> */}
    </View>
  )
}

export default City_Search