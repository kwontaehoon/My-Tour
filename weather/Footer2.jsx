import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const a = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        bottom: 60,
        position: 'absolute',
        backgroundColor: 'white',
    },
    header:{
        height: 20,
        alignItems: 'center',
    },
    header2:{
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    edit:{
      borderWidth: 1,
      borderColor: 'black',
      height: 40,
      width: 90,
      position: 'absolute',
      right: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },  
    box2:{
        width: 1000,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 30,
        backgroundColor: 'lightgrey',
    },
    content2:{
      alignItems: 'center',
      justifyContent: 'center',
      height: 25,
      marginTop: -10,
    },
    circle:{
      width: 25,
      height: 25,
      backgroundColor: 'lightgrey',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    delete:{
      width: '100%',
      height: 60,
      position: 'absolute',
      backgroundColor: 'white',
      top: 0,
      zIndex: 100,
      alignItems: 'center',
      justifyContent: 'center',
    }
})
const Footer2 = ({scroll, setScroll, navigation, favorites, setFavorties, setSelect}) => {

  const [display, setDisplay] = useState(false); // 편집 display
  const [display2, setDisplay2] = useState(false); // 삭제할 circle display
  
  const [circle, setCircle] = useState(Array.from({length: favorites.length-1}, () => {return false})); // 삭제 버튼
  const [delete2, setDelete2] = useState(false); // 삭제 아이콘 display

  const animation = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(animation, {
      toValue: scroll ? 0 : 200,
      useNativeDriver: true, // 애니메이션 처리작업을 자바스크립트 엔진이 아닌
      // 네이티브 레벨에서 진행하게 하는 옵션 
    }).start();
  }, [scroll]);

  useEffect(()=> {
    setCircle(Array.from({length: favorites.length-1}, () => {return false}));
  }, [favorites]);

  useEffect(()=>{
    let count = 0;
    circle.map(x=>{
      if(x === true){count++;}
    })
    count !==0 ? setDelete2(true) : setDelete2(false);
  }, [circle]);


  const List1 = () => {
    let arr = [];
    favorites.map((x, index)=>{
        arr.push(
        <View key={index}>
            <TouchableOpacity key={index} style={a.content} onPress={()=>change(x)}><Text style={{fontSize: 25}}>{x.title.split(' ')[1]}</Text></TouchableOpacity>
            <View style={[a.content2, {display: display2 ? 'flex' : 'none'}]}>
            <TouchableOpacity style={a.circle} onPress={()=>circleBox(index)}>
              <Icon name='check-circle' style={[{fontSize: 27, position: 'absolute'}, {display: circle[index] ? 'flex' : 'none'}]}></Icon>
            </TouchableOpacity>
            </View>
        </View>
        );
    });
    return arr;
  }

  const change = (e) => {
    if(e.id === '+'){
      setScroll(!scroll);
      return navigation.navigate('도시검색');
    }else setSelect([e]);
  }

  const circleBox = (e) => {
    if(circle.length !== 0 && e !== circle.length){
      let arr = [...circle];
      arr[e] = !arr[e];
      setCircle(arr);
    }
  }

  const edit = () => {
    return display2 ? (<Text onPress={()=>{setDisplay(false), setDisplay2(false)}}>완료</Text>
    ) : (<Text>편집</Text>)
  }

  const delete_fav = () => {
    setDelete2(!delete2);
    let arr = [...favorites];
    let arr2 = circle.filter((x, index)=>{
      if(x !== true){ return x; }else arr.splice(index, 1, ''); });
    arr = arr.filter(x => x !== '');

    setSelect([arr[0]]);
    setFavorties(arr);
    setCircle(arr2);
    setDisplay(false);
    setDisplay2(false);
  }

  return (
    <Animated.View style={[a.container, { transform: [{translateY: animation}], display: scroll ? 'flex' : 'none' }]}>
      <View style={[a.delete, {display: delete2 ? 'flex' : 'none'}]}>
        <TouchableOpacity onPress={delete_fav}><Icon name='trash-o' style={{fontSize: 25}}></Icon></TouchableOpacity>
      </View>
      <TouchableOpacity style={a.header} onPress={()=>setScroll(!scroll)}>
          <Icon name='caret-down' style={{fontSize: 20}}></Icon>
      </TouchableOpacity>
      <View style={a.header2}>
        <TouchableOpacity style={{width: 30, alignItems: 'flex-end'}} onPress={()=>setDisplay(!display)}>
          <Icon name='ellipsis-v' style={{fontSize: 20}}></Icon>
        </TouchableOpacity>
      <TouchableOpacity style={[a.edit, {display: display ? 'flex' : 'none'}]} onPress={()=>{ setDisplay2(!display2);} }>
        {edit()}
      </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={a.box2}>
          <List1 />
        </View>
        <Button title='버튼'></Button>
    </ScrollView>
    </Animated.View>
  )
}

export default Footer2