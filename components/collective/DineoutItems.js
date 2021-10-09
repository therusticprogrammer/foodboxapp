import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://www.occasionvenue.com/files/venue_gallery/8a561_Razzberry-Rhinoceros-1.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://www.benihanainternational.com/wp-content/uploads/2019/04/Benihana-Piccadilly-4-1-1024x684.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://qul.imgix.net/c64a34e9-3dd9-46a6-9885-3589b21a2a6d/221627_landscape.jpg",
        categories: ["Grill", "Dine"],
        price: "$$",
        reviews: 700,
        rating: 3.9,
    },
];

export default function DineoutItems({ navigation, ...props }) {
    return (
        <>
          {props.restaurantData.map((restaurant, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              style={{ marginBottom: 30 }}
              onPress={() =>
                navigation.navigate("DineDetail", {
                  name: restaurant.name,
                  image: restaurant.image_url,
                  price: restaurant.price,
                  reviews: restaurant.review_count,
                  rating: restaurant.rating,
                  categories: restaurant.categories,
                })
              }
            >
              <View
                style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
              >
                <DineoutImage image={restaurant.image_url} />
                <DineoutInfo name={restaurant.name} rating={restaurant.rating} />
              </View>
            </TouchableOpacity>
          ))}
        </>
      );
    {/*return (
        <TouchableOpacity activeOpacity={0.75} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (  
                <View
                    key={index} 
                    style={{ marginTop: 10, padding: 15, backgroundColor:"white" }}>
                    <DineoutImage image={restaurant.image_url}/>
                    <DineoutInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
            
        </TouchableOpacity>
    )*/}
}

const DineoutImage = (props) => (
    <>
        <Image
            source = {{
                uri: props.image,
            }}
            style= {{
                width: "100%", height: 189 
            }}
        />
        <TouchableOpacity style={{
            position: "absolute",
            right: 20,
            top: 20,
        }}
        >
            <MaterialCommunityIcons name="heart-outline" size={25} color="#FFF" />
        </TouchableOpacity>
     </>   
);


const DineoutInfo = (props) => (
    <View style={{ 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        }}
    >
        <View>
            <Text
                style = {{
                    fontSize:15, fontWeight: "bold",
                }}
            >
                {props.name}</Text>
            <Text style={{ fontSize:13, color:"gray"}}>30-45 . min </Text>
        </View>
        <View 
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text >{props.rating}</Text>
        </View>
    </View>
  
);

