import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Tabs(props) {
    /*const [activeTab, setActiveTab] = useState("Delivery");*/
    
    return (
        <View style= {{flexDirection:"row", alignSelf:"center"  }}  >
            {/* HButton */}
            <HButton text="Delivery" btnColor="black" txtColor="white" activeTab={ props.activeTab } setActiveTab = {props.setActiveTab} />
            <HButton text="Pickup" btnColor="white" txtColor="black" activeTab={ props.activeTab } setActiveTab = {props.setActiveTab} />

        </View>
    )
}


 const HButton = (props) => (
     <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white" ,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={ () => props.setActiveTab(props.text) }
     >
        <Text
            style={{
                color: props.activeTab === props.text ? "white" : "black" ,
                fontSize: 15,
                fontWeight: "900" 
            }}
        >{props.text} </Text>
     </TouchableOpacity>
 )