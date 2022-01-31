import React from 'react'
import { View, Text,Dimensions } from 'react-native'
import {width} from '../../util/Constants'



const Title = () => {
    return (
        <View style={{backgroundColor:'red',height:150, width:width,alignItems:'center',borderRadius:10}}>
            <Text style={{marginTop:100,fontSize:30}}>24I-Films</Text>
        </View>
    )
}

export default Title
