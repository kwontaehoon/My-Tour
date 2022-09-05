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
          defaultAddress = data.apartment;
        } else {
            defaultAddress = data.buildingName;
        }
        if(data.userSelectedType === 'R'){
            navigation.navigate('SignUp',data.roadAddress);
        }else
         {
            navigation.navigate('SignUp', data.jibunAddress);
        }
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