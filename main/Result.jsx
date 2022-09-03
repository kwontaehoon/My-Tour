import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SwiperFlatList from 'react-native-swiper-flatlist'
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
const Result = ({complete, setComplete}) => {

    const {info, setInfo} = useState([]); // db 값

    const test = [1,2];

    const List1 = () => {
        let arr = [];
        test.map((x, index)=>{
        arr.push(
            <View style={a.tag}>
                <View style={a.inTag}>
                    <Icon name='close' style={{fontSize: 10}}></Icon>
                </View>
                <View><Text>내용임</Text></View>
            </View>
        )
    })
    return arr;
    }

    const List2 = () => {
        let arr = [];
        test.map((x, index)=>{
          arr.push(
            <View style={a.subcontainer} key={index}>
                <View style={a.imageBox}>
                    <SwiperFlatList showPagination PaginationComponent={CustomPagination}
                    autoplay={true} autoplayDelay={5} autoplayLoop>
                        <View style={a.child}>
                          <Image source={require('../images/강릉1.jpg')} style={a.image} resizeMode='stretch'></Image>
                        </View>
                        <View style={a.child}>
                          <Image source={require('../images/강릉1.jpg')} style={a.image} resizeMode='stretch'></Image>
                        </View>
                        <View style={a.child}>
                          <Image source={require('../images/강릉1.jpg')} style={a.image} resizeMode='stretch'></Image>
                        </View>
                        <View style={a.child}>
                          <Image source={require('../images/강릉1.jpg')} style={a.image} resizeMode='stretch'></Image>
                        </View>
                    </SwiperFlatList>
                </View>
                <View style={a.contentBox}>
                    <View style={a.contentBox2}>
                        <View style={a.content}><Text>제목</Text></View>
                        <View style={[a.content, {alignItems: 'flex-end'}]}><Text><Icon name='heart'></Icon>  5.00</Text></View>
                    </View>
                    <View style={a.contentBox2}>
                            <View style={a.content}><Text style={{color: 'grey'}}>내용</Text></View>
                    </View>
                </View>
            </View>
          )
        })
        return arr;
      }
  return (
    <ScrollView style={[a.container, {display: complete ? 'flex' : 'none'}]}>
        <View style={a.header}>
        <TouchableOpacity style={{flex: 1, paddingLeft: 10}} onPress={()=>setComplete(!complete)}>
            <Icon name='arrow-left' style={{fontSize: 25}}></Icon>
        </TouchableOpacity>
        <View style={a.tagBox}>
            <List1 />
        </View>
        </View>
        <List2 />
    </ScrollView>
  )
}

export default Result