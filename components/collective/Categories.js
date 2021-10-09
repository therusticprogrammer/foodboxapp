import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';


const items = [
    {
        image: require("../../assets/images/deliver.png"),
        text: "Delivery",
    },
    {
        image: require("../../assets/images/drinks.png"),
        text: "Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bagels",
    },
    {
        image: require("../../assets/images/fastfoodd.png"),
        text: "Fast food",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Discounts",
    },
    {
        image: require("../../assets/images/caff.png"),
        text: "Caffeine",
    },
    {
        image: require("../../assets/images/deserttt.png"),
        text: "Deserts",
    },
];

export default function Categories() {
    return (

        <View 
            style= {{
                marginTop: 5,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >

            <ScrollView horizontal showsHorizontalScrollIndicator="false" style={{ padding: 10}}>
                {items.map ( (item, index) => (
                    <View key={index}  style={{ alignItems: "center", marginRight: 30 }}>
                        <Image 
                            source={item.image}
                            style={{
                                width: 70,
                                height: 40,
                                resizeMode: "contain"
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight:"900"}}>{item.text}</Text>
                    </View>                
                ))}
            </ScrollView>

        </View>
    )
}
