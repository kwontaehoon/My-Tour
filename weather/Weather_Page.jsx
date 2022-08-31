import React, { useEffect, useState, useReducer } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import Main2 from './Main2'
import Footer from './Footer'
import Footer2 from './Footer2'
import moment from 'moment'
import _ from 'lodash'

const a = StyleSheet.create({
  container:{
  },
  l_container:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
  
})

const Weather_Page = ({navigation, route}) => {

  console.log('route: ', route.params);

    const [info, setInfo] = useState([]); // open weather 정보
    const [list, setList] = useState([]); // open weather 정보
    console.log('list: ', list);
    const [info2, setInfo2] = useState([]); // 미세먼지 정보
    const [scroll, setScroll] = useState(false); // footer 페이지 스크롤
    const [favorites, setFavorites] = useState([ // 즐겨찾기
      { id: 26, title: '경기도 김포시', etitle: 'Gimpo-si' },
      { id: '+', title: '+ +' }
    ]);
    const [select, setSelect] = useState([ // open weather api 다시 불러옴
      { id: favorites[0].id, title: favorites[0].title, etitle: favorites[0].etitle }
    ]);
    const [info3, setInfo3] = useState([]);
    
    const key = '26bc7e52ad1e06fe08e9ac9920df3a31'; // open weather 키
    const key2 = '61817fe9871c5ce196a7b67a92ce3a6b';
    const key3 = 'UQ8rHfkilyp7O5%2FdWxTz1i2rdm32T6AVAAAyGIKXQiQUpaZ3SWwODFHHc%2Fafb3ecEvI3k0uR6eNW2YObO5Q%2FGQ%3D%3D' // 미세먼지 키

    

    useEffect(()=>{
        const a = async ()=>{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${select[0].etitle}&appid=${key}`);
            console.log('데이터받아왔니??');
            console.log(response.data);
            setInfo(response.data);
            setList(response.data.list);
          }
          a();
        }, [select]);

      useEffect(()=>{
        const a = async ()=>{
            const response = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${(select[0].title).substring(0, 2)}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${key3}&ver=1.0`);
            console.log('미세먼지 받아왔니??');
            console.log('info2: ', response.data.response.body.items);
            setInfo2(response.data.response.body.items);
          }
          a();
        }, [select]);
      
      useEffect(()=>{
        console.log('routes: ', route.params);
        if(route.params !== undefined){
        let arr = _.uniqBy([route.params, ...favorites], 'id'); // lodash로 객체배열 중복제거
        setFavorites(arr);
        setSelect([route.params]);
        }
      }, [route]);

      useEffect(()=>{
        const a = async ()=>{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=26bc7e52ad1e06fe08e9ac9920df3a31`);
            console.log('데이터받아왔니??>>');
            console.log(response.data);
            setInfo3(response.data);
          }
          a();
        }, []);

        


      // useEffect(()=>{

      //   if(list2.length !== 0 ){
      //     const nowTime = list2.dt*1000;
      //     const Year = moment(new Date(nowTime)).format('YYYY');
      //     const Month = moment(new Date(nowTime)).format('MM');
      //     const day = moment(new Date(nowTime)).format('DD');
      //     const result = moment(new Date()).format('MM월 DD일 dddd');
      //     const temp = (list2.main.temp - 273.15).toFixed(1);
      //     const min = (list2.main.temp_min - 273.15).toFixed(1);
      //     const max = (list2.main.temp_max - 273.15).toFixed(1);
      //     const feel = (list2.main.temp.feels_like - 273.15).toFixed(1);
      //     const humidity = list2.main.humidity;
      //     const wind = list2.wind.speed;
      //     const rain = list2.rain;
      //     const clouds = list2.clouds;
      //   }
      // }, [list2]);


        // const nowTime = list.dt*1000;
        // console.log(new Date());
        // console.log(new Date(nowTime));
        // const Year = moment(new Date(nowTime)).format('YYYY');
        // const Month = moment(new Date(nowTime)).format('MM');
        // const day = moment(new Date(nowTime)).format('DD');
        // const day2 = moment(new Date(nowTime)).format('A HH:mm');
        // const result = moment(new Date()).format('YYYY년 MM월 DD일 dddd');
        // console.log(result);
        // console.log(Year);
        // console.log(Month);
        // console.log(day);
        // console.log(day2);


        

  return list.length !== 0 && info2.length !== 0 ? (
    <>
    <ScrollView style={a.container}>
        <Header select={select}/>
        <Main list={list}/>
        <Main2 info={info} list={list} info2={info2} select={select} />
    </ScrollView>
    <Footer scroll={scroll} setScroll={setScroll}/>
    <Footer2 scroll={scroll} setScroll={setScroll} navigation={navigation}
    favorites={favorites} setFavorties={setFavorites} select={select} setSelect={setSelect}/>
    </>
  ) : (<View style={a.l_container}>
    <Text style={{fontSize: 60, fontWeight: 'bold'}}>로딩중</Text>
  </View>)
}

export default Weather_Page