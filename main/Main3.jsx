import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
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
    info:{

    },
    top:{
        flex: 1,
        height: 75,
    },
})
const Main3 = ({navigation}) => {


    const [categories, setCategories] = useState([true, false, false, false]);
    // 인기 여행지 display, 카테고리 폰트 bold

    const image = ['../images/6.jpg', '2', '3', '4'];
    const List1 = () => {
        let arr = [];
        let count = '';
        image.map((x, index) => {
            switch(index){ // 변수와 문자열의 조합이 안된다.. 벡틱도 불가
                case 0: count = require('../images/강화도1.jpg'); break;
                case 1: count = require('../images/강화도2.jpg'); break;
                case 3: count = require('../images/강화도3.jpg'); break;
                case 2: count = require('../images/강화도4.jpg'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[0] ? 'flex' : 'none'}]}
                onPress={()=>insert('강화도')} key={index}>
                <View style={a.imagebox}>
                    <Image source={count} style={a.image}></Image>
                </View>
                <View style={a.infobox}>
                    <View style={a.top}>
                        <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>강화도</Text></View>
                        <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} /> 평점 5/5</Text></View>
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
                case 0: count = require('../images/제주도1.jpg'); break;
                case 1: count = require('../images/제주도2.jpg'); break;
                case 3: count = require('../images/제주도3.jpg'); break;
                case 2: count = require('../images/제주도4.jpg'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[1] ? 'flex' : 'none'}]}
                onPress={()=>insert('제주도')} key={index}>
                <View style={a.imagebox}>
                    <Image source={count} style={a.image}></Image>
                </View>
                <View style={a.infobox}>
                    <View style={a.top}>
                        <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>제주도</Text></View>
                        <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} /> 평점 5/5</Text></View>
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
                case 0: count = require('../images/9.jpg'); break;
                case 1: count = require('../images/10.jpg'); break;
                case 3: count = require('../images/11.jpg'); break;
                case 2: count = require('../images/12.png'); break;
            }
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[2] ? 'flex' : 'none'}]}
                onPress={()=>insert('전주')} key={index}>
                <View style={a.imagebox}>
                    <Image source={count} style={a.image}></Image>
                </View>
                <View style={a.infobox}>
                    <View style={a.top}>
                        <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>전주</Text></View>
                        <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} /> 평점 5/5</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
            )
        })
        return arr;
    }
    const List4 = () => {
        let arr = [];
        image.map((x, index) => {
            arr.push(
                <TouchableOpacity style={[a.subbox, {display: categories[3] ? 'flex' : 'none'}]}
                onPress={()=>insert('강원도')} key={index}>
                <View style={a.imagebox}>
                    <Image source={require('../images/4.jpg')} style={a.image}></Image>
                </View>
                <View style={a.infobox}>
                    <View style={a.top}>
                        <View><Text style={{marginBottom: 5, fontWeight: 'bold'}}>강원도</Text></View>
                        <View><Text style={{fontSize: 10}}><Icon name="heart" size={10} /> 평점 5/5</Text></View>
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
        <Text style={{fontWeight: 'bold', fontSize: 20}}>인기 여행지</Text>
        <View style={a.categories}>
        <TouchableOpacity style={a.content} onPress={()=>sort(0)}><Text style={{fontWeight: categories[0] ? 'bold' : 'normal'}}>강화도</Text></TouchableOpacity>
            <TouchableOpacity style={a.content} onPress={()=>sort(1)}><Text style={{fontWeight: categories[1] ? 'bold' : 'normal'}}>제주도</Text></TouchableOpacity>
            <TouchableOpacity style={a.content} onPress={()=>sort(2)}><Text style={{fontWeight: categories[2] ? 'bold' : 'normal'}}>전주</Text></TouchableOpacity>
            <TouchableOpacity style={a.content} onPress={()=>sort(3)}><Text style={{fontWeight: categories[3] ? 'bold' : 'normal'}}>강원도</Text></TouchableOpacity>
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

export default Main3