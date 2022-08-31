import React, { useState, useEffect, useReducer } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import * as SQLite from 'expo-sqlite'

const a = StyleSheet.create({
  
  container:{
  },
  header:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    height: 400,
    alignItems: 'center',
  },
  input: {
    width: 320,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  overlap:{
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#ddd',
    width: 60,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar:{
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
  }
})

const SignUp = ({navigation, route}) => {

  const db = SQLite.openDatabase('test.db');
  console.log('SignUp route: ', route.params);

  const [userId, setUserId] = useState('');
  console.log('id: ', userId);
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userAddress2, setUserAddress2] = useState('');
  const [test, setTest] = useState();
  console.log('test: ', test);

  const address = () => {
    if(route.params === undefined){return '우편번호'}
    else return route.params;
  }

  const submit = async() => {
    try{
    console.log('submit');
    await db.transaction(async (tx) => {
      tx.executeSql(
        'insert into member(id, password, name, email, address, address2) values(?,?,?,?,?,?)',
        [userId, userPass, userName, userEmail, userAddress, userAddress2], [],
        (tx, results)=>{
          console.log(results);
        }
        // 'select * from tt;', [], (tx, results) =>{
        //   console.log(results.rows._array);
        // }
      );
    })
    console.log('complete');
  }catch(error){
    console.log(error);
  }
  }

  return (
    <View style={a.container}>
      <View style={a.header}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>회원가입</Text>
      </View>
      <View style={a.main}>
          <SafeAreaView>
              <TextInput style={a.input} placeholder='이름' onChangeText={setUserName}/>
              <View>
                <TextInput style={[a.input, {width: '60%'}]} placeholder='아이디' onChangeText={setUserId}/>
                <TouchableOpacity style={a.overlap}><Text>중복확인</Text></TouchableOpacity>
              </View>
              <TextInput style={a.input} placeholder='이메일' onChangeText={setUserEmail}/>
              <TextInput style={a.input} placeholder='비밀번호' onChangeText={setUserPass}/>
              <TextInput style={a.input} placeholder='비밀번호 확인'/>
              <View>
                <View style={[a.input, {width: '60%'}]}>
                  <Text style={{color: 'black'}}>{address()}</Text>
                </View>
                <TouchableOpacity style={a.overlap} onPress={()=>navigation.push('Post')}><Text>검색</Text></TouchableOpacity>
              </View>
              <TextInput style={a.input} placeholder='상세주소' onChangeText={setUserAddress2}/>
          </SafeAreaView>
          <TouchableOpacity style={[a.bar, {backgroundColor: '#ddd'}]} onPress={submit}>
            <Text style={a.text}>계정 생성하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp