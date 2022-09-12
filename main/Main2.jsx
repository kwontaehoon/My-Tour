import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from "@react-native-async-storage/async-storage"

const a = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 20,
    },
    categories:{
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content:{
        width: 70,
        height: 35,
        margin: 10,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#ddd',
    },
    box:{
        height: 560,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    subbox:{
        height: 120,
        marginBottom: 10,
        flexDirection: 'row',
    },
    imagebox:{
        flex: 2,
        height: 120,
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    infobox:{
        flex: 3,
        height: 150,
        backgroundColor: 'yellogreen',
        padding: 10,
    },
    top:{
        flex: 1,
        height: 75,
    },
})
const Main2 = ({navigation}) => {

    const [categories, setCategories] = useState([true, false, false, false]);
    // 추천 여행지 display, 카테고리 폰트 bold

    const image = ['../images/6.jpg', '2', '3', '4'];
    const List1 = () => {
        let arr = [];
        let count = '';
        image.map((x, index) => {
            switch(index){ // 변수와 문자열의 조합이 안된다.. 벡틱도 불가 (반복문에서 index로하면안됨)
                case 0: count = require('../images/김포1.jpg'); break;
                case 1: count = require('../images/김포2.jpg'); break;
                case 3: count = require('../images/김포3.jpg'); break;
                case 2: count = require('../images/김포4.jpg'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[0] ? 'flex' : 'none'}]}
                onPress={()=>insert('김포')} key={index}>
                    <View style={a.imagebox}>
                        <Image source={count} style={a.image}></Image>
                    </View>
                    <View style={a.infobox}>
                        <View style={a.top}>
                            <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>김포</Text></View>
                            <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} />  4.94</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
            
        })
        return arr;
    }
    const List2 = () => {
        let arr = [];
        let count = '';
        image.map((x, index) => {
            switch(index){  
                case 0: count = require('../images/이천1.jpg'); break;
                case 1: count = require('../images/이천2.jpg'); break;
                case 3: count = require('../images/이천3.jpg'); break;
                case 2: count = require('../images/이천4.jpg'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[1] ? 'flex' : 'none'}]}
                onPress={()=>insert('이천')} key={index}>
                    <View style={a.imagebox}>
                        <Image source={count} style={a.image}></Image>
                    </View>
                    <View style={a.infobox}>
                        <View style={a.top}>
                            <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>이천</Text></View>
                            <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} />  4.93</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return arr;
    }
    const List3 = () => {
        let arr = [];
        let count = '';
        image.map((x, index)=> {
            switch(index){  
                case 0: count = require('../images/상암1.jpg'); break;
                case 1: count = require('../images/상암2.jpg'); break;
                case 3: count = require('../images/상암3.jpg'); break;
                case 2: count = require('../images/상암4.jpg'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[2] ? 'flex' : 'none'}]}
                onPress={()=>insert('상암')} key={index}>
                    <View style={a.imagebox}>
                        <Image source={count} style={a.image}></Image>
                    </View>
                    <View style={a.infobox}>
                        <View style={a.top}>
                            <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>상암</Text></View>
                            <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} />  4.92</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return arr;
    }
    const List4 = () => {
        let arr = [];
        let count = '';
        image.map((x, index) => {
            switch(index){  
                case 0: count = require('../images/마곡1.jpg'); break;
                case 1: count = require('../images/마곡2.jpg'); break;
                case 3: count = require('../images/마곡3.jpg'); break;
                case 2: count = require('../images/마곡4.jpg'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[3] ? 'flex' : 'none'}]} 
                onPress={()=>insert('마곡')} key={index}>
                <View style={a.imagebox}>
                    <Image source={count} style={a.image}></Image>
                </View>
                <View style={a.infobox}>
                    <View style={a.top}>
                        <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>마곡</Text></View>
                        <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} />  4.91</Text></View>
                    </View>
                </View>
                </TouchableOpacity>
            )
        })
        return arr;
    }
    const sort = (e) => { // 카테고리 누르면 누른것만 true
        let arr = Array.from({length: 4}, () => {return false});
        arr[e] = true;
        setCategories(arr);
    }
    
    const insert = (location) => {
        AsyncStorage.setItem(location, location);
        navigation.navigate('Result');
    }

  return (
    <View style={a.container}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>추천 여행지</Text>
        <View style={a.categories}>
            <TouchableOpacity style={a.content} onPress={()=>sort(0)}><Text style={{fontWeight: categories[0] ? 'bold' : 'normal'}}>김포</Text></TouchableOpacity>
            <TouchableOpacity style={a.content} onPress={()=>sort(1)}><Text style={{fontWeight: categories[1] ? 'bold' : 'normal'}}>이천</Text></TouchableOpacity>
            <TouchableOpacity style={a.content} onPress={()=>sort(2)}><Text style={{fontWeight: categories[2] ? 'bold' : 'normal'}}>상암</Text></TouchableOpacity>
            <TouchableOpacity style={a.content} onPress={()=>sort(3)}><Text style={{fontWeight: categories[3] ? 'bold' : 'normal'}}>마곡</Text></TouchableOpacity>
        </View>
        <View style={a.box}>
            <List1 />
            <List2 />
            <List3 />
            <List4 />
        </View>
    </View>
  )
}

export default Main2