import React from 'react'
import { View, Text, Image } from 'react-native';

/*
const dineImg = "https://s3-media0.fl.yelpcdn.com/bphoto/noH7uizml5jbyTMSfT9aPA/348s.jpg";

const dineTitle = "Farmhouse Kitchen Thai Cuisine"
const descr = "Thai - Comfort Food - 💲 - 💵 - 4 ⭐ (1728+)"*/

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/noH7uizml5jbyTMSfT9aPA/348s.jpg",
    price: "$$",
    reviews: "1562",
    rating: "4.1",
    categories: [{ title: "Lebanese"}, {title:"Aesthetic food"}, {title:"Coffee"}, {title:"Wifi"}],
};



export default function KnowMore(props) {

    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map( (cat) => cat.title).join(" - ");

    const description = `${formattedCategories}  ${price ? " - " + price : ""} - 💵 - ${rating} ⭐(${reviews}+) `;


    return (
        <View>
            <DineImage imagetoChild={image} />
            <DineTitle texttoChild={name} />
            <DineDescr descrtoChild={description} />

        </View>
    )
}

const DineImage = (props) => (
    <Image source={{ uri:props.imagetoChild }} style={{ width:"100%", height:470 }} />
)


const DineTitle = (props) => (
    <Text
        style={{
            fontSize: 22,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
            width:"100%",
            height:47,
        }}
    > 
        {props.texttoChild}
    </Text>
)

 const DineDescr = (props) => (
     <Text
        style={{
            fontSize:15.5,
            fontStyle:"italic",
            fontWeight:"300",
            marginLeft:10,
        }}
     >
         {props.descrtoChild}
     </Text>
 )