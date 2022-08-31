import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Search_Page from '../Search/Search_Page'

const a = StyleSheet.create({
    container:{
        height: 60,
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    box:{
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    content:{
        marginTop: 3,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    middle:{
        textAlign: 'center',
    }
    
})
const MainBar = ({ search, setSearch, navigation }) => {

    const [navigation2, Setnavigation2] = useState([true, false, false, false, false]);
    // 네비게이션 바 배경색깔

    const background = (e) => { // 내비게이션 누르면 누른 것만 true, search 네비게이션
        if(search === false && e === 2){
            setSearch(!search);
        }else if(search === true){
            setSearch(!search);
        }
        let arr = Array.from({length: 5}, () => {return false});
        arr[e] = true;
        Setnavigation2(arr);
    }

    return(
        <View style={a.container}>
            
            <TouchableOpacity onPress={()=>background(0)} style={[a.box, {backgroundColor: navigation2[0] ? '#ddd' : 'white'}]}>
                <View>
                    <Text style={a.content}><Icon name='home' size={20}/></Text>
                    <Text style={a.content}>홈</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>background(1)} style={[a.box, {backgroundColor: navigation2[1] ? '#ddd' : 'white'}]}>
                <View>
                    <Text style={a.content}><Icon name='location-arrow' size={20}/></Text>
                    <Text style={a.content}>위치</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>background(2)} style={[a.box, {backgroundColor: navigation2[2] ? '#ddd' : 'white'}]}>
                <View>
                    <Text style={a.content}><Icon name='search' size={20}/></Text>
                    <Text style={a.content}>검색</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>background(3)} style={[a.box, {backgroundColor: navigation2[3] ? '#ddd' : 'white'}]}>
                <View>
                    <Text style={a.content}><Icon name='thumbs-up' size={20}/></Text>
                    <Text style={a.content}>찜</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ background(4); navigation.navigate('Mypage')}} style={[a.box, {backgroundColor: navigation2[4] ? '#ddd' : 'white'}]}>
                <View>
                    <Text style={a.content}><Icon name='user' size={20}/></Text> 
                    <Text style={a.content}>마이페이지</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
} 

export default MainBar