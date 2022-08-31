import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'

const a = StyleSheet.create({
    container:{
        padding: 10,
        height: 500,
    },
    box1:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        opacity: 0.8,
    },
    contentBox:{
        width: '25%',
    },
    content:{
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        fontSize: 30,
    },
    image:{
        width: 50,
        height: 50,
    },
    box2:{
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        opacity: 0.8,
    },
    title:{
        borderBottomWidth: 2,
        borderColor: 'white',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    line:{
        borderColor: 'black',
    },
    contentBox2:{
        height: 250,
        flexDirection: 'row',
    },
    subcontent1:{
        width: 82,
    },
    subcontent2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    wind:{
        marginTop: 10,
    }
})
const Main2 = ({info, list, info2, select}) => {

    const title = ['미세먼지', '바람', '습도', '시간당강수량'];
    const icon = ['smile-o', 'send', 'tint', 'umbrella']
    const [color, setColor] = useState([true, false, false]); // 2번째 슬라이드 bottom color
    // console.log('main2 list: ', list);

    const List1 = () => { // 현재
        let arr = [];
        title.map((x, index)=> {
            arr.push(
                <View style={a.contentBox} key={index}>
                    <View style={[a.content, {height: 70}]}><Icon name={icon[index]} style={a.icon}></Icon></View>
                    <View style={a.content}><Text style={{fontSize: 20, fontWeight: '500'}}>{content(index)}</Text></View>
                    <View style={a.content}><Text>{x}</Text></View>
                </View>
            )
        })
        return arr;
    }


    const List2 = () => { // 날씨
        const arr = [];
        list.map((x, index)=>{
            arr.push(
                <View style={a.subcontent1} key={index}>
                    <View style={[a.subcontent2, {flex: 1}]}>{clock(index)}</View>
                    <View style={[a.subcontent2, {flex: 2}]}><Image style={a.image} source={{uri: `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`}}></Image></View>
                    <View style={[a.subcontent2, {flex: 1}]}>{temp(index)}</View>
                </View>
            )
        })
        return arr;
    }
    const List3 = () => { // 바람
        const arr = [];
        list.map((x, index)=>{
            arr.push(
                <View style={a.subcontent1} key={index}>
                    <View style={[a.subcontent2, {flex: 1}]}>{clock(index)}</View>
                    <View style={[a.subcontent2, {flex: 2}]}>{wind(index)}</View>
                    <View style={[a.subcontent2, {flex: 1}]}><Text>{content(index, 'list3')}</Text></View>
                </View>
            )
        })
        return arr;

    }

    const List4 = () => { // 대기압
        const arr = [];
        list.map((x, index)=>{
            arr.push(
                <View style={a.subcontent1} key={index}>
                    <View style={[a.subcontent2, {flex: 1}]}>{clock(index)}</View>
                    <View style={[a.subcontent2, {flex: 2}]}>{atmospheric(index)}</View>
                    <View style={[a.subcontent2, {flex: 1}]}>{atmospheric(index, 'hh')}</View>
                </View>
            )
        })
        return arr;
    }

    const color_change = (e) => {
        let arr = Array.from({length: 3}, () => {return false});
        arr[e] = true;
        setColor(arr);
    }

    const content = (e, l) => {
        const wind = list[e].wind.speed;
        let wind2 = '';
        const humidity = list[e].main.humidity;
        let rain = list[e].rain;
        let dust = info2[0].pm10Value;
        
        if(list[e].rain === undefined){ rain = 0; }

        switch(true){
            case wind < 0.2 : wind2='고요';break;
            case wind < 2.02 : wind2='실바람'; break;
            case wind < 3.3 : wind2='남실바람'; break;
            case wind < 5.4 : wind2='산들바람'; break;
            case wind < 7.9 : wind2='건들바람'; break;
            case wind < 10.7 : wind2='흔들바람'; break;
            case wind < 13.8 : wind2='된바람'; break;
            case wind < 17.1 : wind2='센바람'; break;
            case wind < 20.7 : wind2='큰바람'; break;
            case wind < 24.4 : wind2='큰센바람'; break;
            case wind < 28.4 : wind2='노대바람'; break;
            case wind < 32.6 : wind2='왕바람'; break;
            default : wind2='싹슬바람';
        }
        const arr = [dust, wind2, humidity, Object.values(rain)];

        if(l !== undefined){return wind2}else return arr[e]; 
    }

    const clock = (index) => {
        const nowTime = list[index].dt*1000;
        const day = moment(new Date(nowTime)).format('DD');
        const clock = moment(new Date(nowTime)).format('A HH:ss');
        return <>
                <Text>{day}일</Text>
                <Text>{clock}</Text>
            </>
    }
    const temp = (index) => {
        // console.log(list[index].main.temp);
        const temp = (list[index].main.temp - 273.15).toFixed(1);
        return <Text>{temp}</Text>
    }

    const wind = (index) => {
        const wind = (list[index].wind.speed);
        const gust = (list[index].wind.gust);
        const deg = (list[index].wind.deg);

        return <View>
            <Text style={a.wind}>바람 {wind}</Text>
            <Text style={a.wind}>단위 {gust}</Text>
            <Text style={a.wind}>방향 {deg}</Text>
        </View>
    }

    const atmospheric = (index, l) => {
        const atmospheric = list[index].main.pressure;
        // const sea_level = list[index].main.sea_level;
        const grnd_level = list[index].main.grnd_level;

        if(l === undefined){return <Text style={{fontSize: 15, textAlign: 'center'}}>해수면 {grnd_level}</Text>} else return <Text>지상 {atmospheric}</Text>
    }


    const change_List = () => {
        switch(true){
            case color[0] === true : return <List2 />
            case color[1] === true : return <List3 />
            case color[2] === true : return <List4 />
        }
    
    }

  return (
    <View style={a.container}>
        <View style={a.box1}>
            <List1 />
        </View>
        <View style={a.box2}>
            <View style={a.title}>
                <TouchableOpacity style={[a.line, {borderBottomWidth: color[0] ? 2 : 0}]} onPress={()=>color_change(0)}>
                    <Text>날씨</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[a.line, {borderBottomWidth: color[1] ? 2 : 0}]} onPress={()=>color_change(1)}>
                    <Text>바람</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[a.line, {borderBottomWidth: color[2] ? 2 : 0}]} onPress={()=>color_change(2)}>
                    <Text>대기압</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
            <View style={a.contentBox2}>
                {change_List()}
            </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default Main2