import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import KnowMore from "../components/dineDetails/KnowMore"
import Menu from '../components/dineDetails/Menu'

export default function DineDetail( {route}) {
    return (
        <View style={{ }}> 
            <KnowMore route={route} />
            <Divider width={1.8} style={{ marginVertical: 21 }} />
            {/*<Menu />*/}
        </View>
    )
}
