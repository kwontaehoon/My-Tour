import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Postcode from '@actbase/react-daum-postcode';

const a = StyleSheet.create({
    container:{
        height: '100%',
    },
    postBox:{
        flex: 1,
    }
})
const Post = ({navigation}) => {

    const getAddressData = data => {
        let defaultAddress = ''; // 기본주소
        if (data.buildingName === 'N') {
            console.log('aa');
          defaultAddress = data.apartment;
        } else {
            console.log('bb');
            console.log('지번: ', data.jibunAddress);
            console.log('도로명: ', data.roadAress);
            defaultAddress = data.buildingName;
        }
        if(data.jibunAddress === undefined){
            navigation.navigate('SignUp', data.roadAress);
        }else navigation.navigate('SignUp', data.jibunAddress);
};

  return (
    <View style={a.container}>
        <Postcode style={a.postBox} jsOptions={{ animation: true }}
        onSelected={data => getAddressData(data)}
        onError={function (){
        throw new Error('Function not implemented.'); }} />
    </View>
    
  )
}

export default Post