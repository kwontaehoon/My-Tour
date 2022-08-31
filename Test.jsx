import React from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import {Image, platfrom, Text, View, TouchableHighlight, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { prototype } from 'router'

const data = [{
    image: userImage,
    name: '홍길동',
    occupation: 'React Native Developer',
    description: '연소자의 근로는 특별한 보호를 받는다.',
    showThumbnail: true
   

}]
const Test = (props) => {

    const { image, name, occupation, description } = props;

    const onPress = () => {

    }

    ProfileCard.PropTypes = {
        image: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        occupation: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        showThumbnail: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    }
    
    const ProfileCard = 'dodgetblue';
    const styles = StyleSheet.create({
        cardContainer:{
            alignItems: 'center',
        },
        cardImageContainer:{

        },
        cardTitle:{

        },
        cardSubtitileContainer:{

        }
    })

  return (
    <TouchableHighlight onPress={onPress}>
        <View>
            <View>
                <Image />
            </View>
            <View>
                <Text>
                    {name}
                </Text>
            </View>
            <View>
                <Text>
                    {occupation}
                </Text>
            </View>
            <View>
                <Text>
                    {description}
                </Text>
            </View>
        </View>
    </TouchableHighlight>
  )
}

export default Test