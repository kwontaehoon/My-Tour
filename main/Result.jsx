import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SwiperFlatList from 'react-native-swiper-flatlist'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CustomPagination } from './CustomPagination'

const a = StyleSheet.create({
    container:{
        padding: 20,
    },
    header:{
        height: 50,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagBox:{
        flex: 9,
        flexDirection: 'row',
    },
    tag:{
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 15,
    },
    inTag:{
        width: 15,
        height: 15,
        position: 'absolute',
        padding: 2,
        alignItems: 'flex-end',
        top: 1,
        right: 1,
    },
    subcontainer:{
        height: 550,
      },
      imageBox:{
        height: 370,
        borderRadius: 10,
      },
      image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
      },
      contentBox:{
        height: 100,
        marginTop: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        padding: 5,
      },
      contentBox2:{
        height: 20,
        flexDirection: 'row',
        margin: 5,
      },
      content:{
          flex: 1,
      },
      child:{
          width: 371,
      },
      footerBox:{
        height: 40,
        alignItems: 'center',
      },
      footer:{
        width: 100,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 10,
      }
})
const Result = ({route, list}) => {

  // const isDark = useContext(InfoContext);
  // console.log('isDark: ', isDark);

  const [filter, setFilter] = useState([]); // location 필터링
  console.log('filter: ', filter);

  useEffect(()=>{
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        setFilter(stores);
      });
    });

    
  }, [route]);

    const List1 = () => {
        let arr = [];
        filter.map((x, index)=>{
        arr.push(
            <View style={a.tag} key={index}>
                <TouchableOpacity style={a.inTag} onPress={()=>remove(x[0])}>
                    <Icon name='close' style={{fontSize: 10}}></Icon>
                </TouchableOpacity>
                <View><Text>{filter[index][0]}</Text></View>
            </View>
        )
    })
    return arr;
    }

    const List2 = () => {
        let arr = [];
        let arr2 = [];
        filter.map((x, index)=>{
          for(let i=0; i<list.length; i++){
            if(list[i].title.includes(x[0]) && !arr2.includes(list[i].title)){
              arr2.push(list[i].title);
          arr.push(
            <View style={a.subcontainer} key={index}>
                <View style={a.imageBox}>
                    <SwiperFlatList showPagination PaginationComponent={CustomPagination}
                    autoplay={true} autoplayDelay={5} autoplayLoop>
                        <View style={a.child}>
                          <Image source={list[i].image1} style={a.image} resizeMode='stretch'></Image>
                        </View>
                        <View style={a.child}>
                          <Image source={list[i].image2} style={a.image} resizeMode='stretch'></Image>
                        </View>
                        <View style={a.child}>
                          <Image source={list[i].image3} style={a.image} resizeMode='stretch'></Image>
                        </View>
                        <View style={a.child}>
                          <Image source={list[i].image4} style={a.image} resizeMode='stretch'></Image>
                        </View>
                    </SwiperFlatList>
                </View>
                <View style={a.contentBox}>
                    <View style={a.contentBox2}>
                        <View style={a.content}><Text>{list[i].title}</Text></View>
                        <View style={[a.content, {alignItems: 'flex-end'}]}><Text><Icon name='heart'></Icon>  5.00</Text></View>
                    </View>
                    <View style={a.contentBox2}>
                            <View style={a.content}><Text style={{color: 'grey'}}>{list[i].content}</Text></View>
                    </View>
                </View>
            </View>
          )
        }}
        })
        return arr;
      }

      const remove = (e) => {
        let arr = [...filter];
        arr = arr.filter(x => x[0] !== e);
        setFilter(arr);
        AsyncStorage.removeItem(e);
      }

  return (
    <View style={a.container}>
      <View style={a.header}>
        <View style={a.tagBox}>
            <List1 />
        </View>
        </View>
      <View style={{height: '88%'}}>
        <ScrollView>
            <List2 />
        </ScrollView>
      </View>
    </View>
  )
}

export default Result