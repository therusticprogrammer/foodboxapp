import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const foodItems = [
    {
        title: "Lasagna",
        descripion: "With maska and cauli flower leaves, tomato and broccoli",
        price: "$13.50",
        image: "https://www.simplyrecipes.com/thmb/Hm1DTQDZ9Dhkl7zTUkD6idFKmT8=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg",
    },
    {
        title: "Tandoori Chicken",
        descripion: "Crackling Indian dish with tenderloin chicken off the embers 🔥",
        price: "$17.70",
        image: "https://www.simplyrecipes.com/thmb/3QI11QIS3PNsXE7McR5MddKs6bk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg",

    },
    {
        title: "Chilaqueile",
        descripion: "With mozarella cheese and cauli flower leaves, tomato and broccoli",
        price: "$15.90",
        image: "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",

    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin:20,
    },
    titleStyle: {
        fontSize:17,
        fontWeight:"600",
    },
})

export default function Menu() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foodItems.map( (food, index) => ( 
        <View key={index}>
            <View style={styles.menuItemStyle} >
                <BouncyCheckbox
                    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                    fillColor="green"
                />
                {/*03:28:53 - ViewCart */}
                <FoodInfo food={food}  />
                <FoodImage food={food} />
            </View>
            <Divider width={0.5} orientation="vertical" 
                style={{ marginHorizontal:20 }}
            />
        </View>
        ))}
        </ScrollView>
    );
    
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle} >{props.food.title}</Text>
        <Text>{props.food.descripion}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image 
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
)