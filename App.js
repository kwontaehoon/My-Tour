import React, {useState, useEffect} from 'react'
import { View, Text, Button, LogBox, StyleSheet } from 'react-native'
import Main_Page from './main/Main_Page'
import * as SQLite from "expo-sqlite";
import * as FileSystem  from 'expo-file-system'
import { Asset } from 'expo-asset'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Result from './main/Result'
import MyPage from './mypage/MyPage_Page'
import InfoContext from './context'
import Like from './like/Like_Page'
import Location from './location/Location_Page'
import Weather from './weather/Weather_Page'
import Icon from 'react-native-vector-icons/FontAwesome'
import Login from './mypage/Login'
import SignUp from './mypage/SignUp'
import City_Search from './weather/City_Search'
import Post from './mypage/Post'
import axios from 'axios'
import openDatabase from './db'
import { DatabaseConnection } from './db2'
import all_location from './local'

LogBox.ignoreAllLogs();

const a = StyleSheet.create({
  like_add:{
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: 'red',
    right: -10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
})

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const [info, setInfo] = useState([]); // db test용
  const [like, setLike] = useState({
    info: '', alaram: false
  }); // 좋아요
  const [list, setList] = useState(all_location); // 전체 location

  // const [weather, setWeather] = useState([]);
  // console.log('weather: ', weather);

  // const arr = [];
  // for(let i=0; i<weather.length; i++){
  //   if(weather[i].category === 'TMP'){
  //     arr.push(weather[i]);
  //   }
  // }
  // console.log(arr);
  


  const db = SQLite.openDatabase('test.db');
  // const db2 = DatabaseConnection.getConnection();

  console.log(FileSystem.documentDirectory + "SQLite/test.db");


  // const dt = new Date();
  // const CurrentTime = (dt.getHours())+":"+dt.getMinutes()+":"+dt.getSeconds()
  // const year = dt.getFullYear();
  // const month = ('0' + (dt.getMonth() + 1)).slice(-2);
  // const day = ('0' + dt.getDate()).slice(-2);
  // const dateString = year + month + day;
  // const serviceKey = 'Y4VLrNy6hcMz2TnhyK3%2BtCKiWrFOwWhhxg1R%2FgBtd9B1ty%2Fe%2FQz2z89s2e4IYd1p8hfkGw3lViB%2FGddDujE2vA%3D%3D'



  useEffect(() => {
     db.transaction((tx) => {
       tx.executeSql("SELECT * FROM member", [], (tx, results)=>{
        setInfo(results.rows._array);
         }, error => {console.log('error');});
        })
     
   }, []);

  //  const serviceKey = 'qk9nBBzMQRaV836surNRuBQcZb4cadI7MSWXH5dFl8sqsfuwN8xa3VFVMkb4whG8MnFIEYrCTs0cxf%2B1cVcttQ%3D%3D'
  //  useEffect(()=>{
  //      const TdWeather = async ()=>{
  //          const weather = await axios.get(`http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=${serviceKey}&dataType=JSON&numOfRows=279&base_date=20220907&base_time=2300&beach_num=304`);
  //          setWeather(weather.data.response.body.items.item);
  //        }
  //        TdWeather()
  //  },[]);

  //  const HomeScreen = ({navigation}) => {
  //   return(
  //     <View>
  //       <Text>Home Screen</Text>
  //       <Button title='Detail 페이지로 이동' onPress={()=> navigation.push('Detail')}></Button>
  //     </View>
  //   )
  // }

  // const DetailScreen = ({navigation}) => {
  //   return(
  //     <View>
  //       <Text>Detail Screen</Text>
  //       <Button title='Detail 페이지로 다시 이동' onPress={()=> navigation.push('Details')}></Button>
  //       <Button title='Home 으로 이동' onPress={()=> navigation.push('Hone')}></Button>
  //       <Button title='Go Back' onPress={()=>navigation.goBack()}></Button>
  //       <Button title='Go First Screen' onPress={()=> navigation.popToTop()}></Button>
  //     </View>
  //   )
  // }


  return (
    <InfoContext.Provider value={{like, setLike}}>
    <NavigationContainer>

      <Tab.Navigator screenOptions={{ headerShown: false,
        tabBarStyle:{ height: 60, position: 'absolute', paddingBottom: 7 },
        tabBarLabelStyle: { fontSize: 13 }}}>

        <Tab.Screen name="메인" options={{tabBarIcon: () => (<Icon name='home' size={23} />)}}>
          {()=>(
               <Stack.Navigator >
                    <Stack.Screen 
                        name="Main_Page"
                        children={({navigation})=> <Main_Page list={list} navigation={navigation} like={like} setLike={setLike}/>}
                        options={{headerShown: false}}
                        />
                    <Stack.Screen 
                        name="Result"
                        children={({navigation, route})=> <Result list={list} navigation={navigation} route={route}/>}
                        list={list}
                        />
               </Stack.Navigator>   
              )}

        </Tab.Screen>
        
        
        <Tab.Screen name="위치" options={{tabBarIcon: () => (<Icon name='location-arrow' size={23} />)}}>
        {()=>(
               <Stack.Navigator >
                    <Stack.Screen 
                        name="위치"
                        component={Location}
                        // options={{headerShown: false}}
                        />
               </Stack.Navigator>   
              )}
        </Tab.Screen>
    
        <Tab.Screen name="날씨" options={{tabBarIcon: () => (<Icon name='cloud' size={23} />)}}>
        {()=>(
               <Stack.Navigator>
                    <Stack.Screen 
                        name="날씨"
                        component={Weather}/>
                    <Stack.Screen
                        name="도시검색"
                        component={City_Search} />
               </Stack.Navigator>   
              )}
        </Tab.Screen>

        <Tab.Screen name="찜" options={{tabBarIcon: () => (
          <View>
            <Icon name='thumbs-up' size={25} />
            <View style={[a.like_add, {display: like.alaram ? 'flex' : 'none'}]}></View>
          </View> )}}>
        {()=>(
               <Stack.Navigator>
                    <Stack.Screen 
                        name="찜 목록"
                        children={({navigation})=> <Like navigation={navigation} like={like} setLike={setLike}/>}/>
                        <Stack.Screen 
                        name="위치" // 다른 네비로 이동할 때 다른 네비를 꼭 써주자!!!!!!!!!!!!!!!
                        component={Location}
                        // options={{headerShown: false}}
                        />
               </Stack.Navigator>   
        )}
        </Tab.Screen>
        
        <Tab.Screen name="마이페이지" options={{tabBarIcon: () => (<Icon name='user' size={23} />)}}>
        {()=>(
               <Stack.Navigator>
                    <Stack.Screen 
                        name="Login"
                        component={MyPage}/>
                    <Stack.Screen
                        name="마이페이지"
                        component={Login} />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp} />
                    <Stack.Screen
                        name="Post"
                        component={Post} />
               </Stack.Navigator>   
              )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
    </InfoContext.Provider>
  )
}

export default App