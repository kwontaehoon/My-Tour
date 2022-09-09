import React, { useState, useEffect, useReducer } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView , TextInput,
Switch, Button} from 'react-native'
import * as SQLite from "expo-sqlite"

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
    auto:{
        width: '80%',
        flexDirection: 'row',
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
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})
const Main = ({navigation, route}) => {

    // console.log('Main 라우트: ', route.params);

    const db = SQLite.openDatabase('test.db');

    const reducer = ( state, action ) => {
        console.log('reducer 호출', state, action);

        switch(action.type){
            case 'login':
                const id = info.map(x => x.id !== action.payload[1]);
                console.log('id: ', id);
                const passwrod = info.map(x => x.password !== action.payload[1]);
                console.log('password: ', password);
                if(id.length === 0 || password.length === 0){
                    console.log('다시입력');
                    navigation.navigate('Login');
                }else {
                    console.log('로그인됨');
                    navigation.navigate('마이페이지', [member, kwon]);
                }
            case 'logout':
                console.log('로그아웃');
        }
    }

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false); // 자동로그인 스위치
    const [info, setInfo] = useState([
        { id: 'gju04195', password: 1234, name: '권태훈', email: 'gju4195@naver.com'},
        { id: 'taehoon', password: 4567, name: '태훈', email: 'kk' }
    ]); // 회원가입 정보
    const [member, setMember] = useState([]); // 회원정보 받아옴
    console.log('등록된 회원정보: ', member);

    const [kwon, dispatch] = useReducer(reducer, 0);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(()=> {
        db.transaction(tx => {
          tx.executeSql('select * from member;', [],(_, { rows: { _array } }) => {
            setMember(_array)});});
      }, []);


  return (
    <View style={a.container}>
        <View style={a.header}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>로그인</Text>
        </View>
        <View style={a.main}>
            <SafeAreaView>
                <TextInput style={a.input} placeholder='아이디' onChangeText={setId}/>
                <TextInput style={a.input} secureTextEntry={true} placeholder='비밀번호' onChangeText={setPassword}/>
            </SafeAreaView>
        <View style={a.auto}>
           <Text>자동 로그인</Text>
           <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        <TouchableOpacity style={[a.bar, {backgroundColor: '#ddd'}]} onPress={()=>{dispatch({type: 'login', payload: [id, password]})}}>
            <Text style={a.text}>로그인</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[a.bar, {backgroundColor: 'yellow', marginTop: 20}]} onPress={()=>navigation.push('SignUp')}>
            <Text style={a.text}>회원가입</Text>
        </TouchableOpacity>
        <View><Text>{kwon}</Text></View>
        </View>
    </View>
  )
}

export default Main