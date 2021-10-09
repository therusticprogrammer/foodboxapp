import React, { useEffect , useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { Divider } from "react-native-elements";
import Tabs from '../components/collective/Tabs';
import BottomTabs from '../components/collective/BottomTabs';
import SearchBar from '../components/collective/SearchBar';
import Categories from '../components/collective/Categories';
import DineoutItems, { localRestaurants, } from '../components/collective/DineoutItems';

const YELP_API_KEY = "1nuEdWjGGTR2ynkmSqqF6RgvypY4tZDrDkXUzgnq1S_xwqt-dEN9A1xpYEaaVPJXDJmXyf8SupynnZWWT6KT6WDMqtjMGNdsz_zVzC-wiVE0FXyOLmUO_VSHCTpUYXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Chicago");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((data) => {
                if(!data.businesses) setRestaurantData(localRestaurants);
                else setRestaurantData(
                        data.businesses.filter((business) => 
                            business.transactions.includes(activeTab.toLowerCase())
                        )
                    );
            });
    };


    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style= {{  backgroundColor: "#eee",  flex: 1  }}>
             <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: "row", backgroundColor:"white", alignItems: 'center'}}>
                <Image
                    source = {{
                        uri:"https://thumbs.dreamstime.com/b/print-137250303.jpg"    
                    }}
                    style= {{
                        backgroundColor:"white",
                        width: 137, height: 87,
                    }}
                />
                <Text 
                    style={{
                        borderStartColor: "#eee",
                        borderRadius:20,
                        fontSize:23,
                        fontWeight: "bold",
                        margin: 5,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        color: "#000",
                        width:187,
                        height:27,
                }}
                >
                    FOOD BOX Inc.
                </Text>
            </View>    
            <View style= {{ backgroundColor:"white", paddingHorizontal: 13, paddingTop:15  }}>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
            <View style= {{ backgroundColor:"white", paddingHorizontal: 15, paddingBottom:11 }}>
                {/*<SearchBar cityHandler={setCity}/>*/}
                <SearchBar onCityChange={newCity => setCity(newCity)} 
                    onCitySubmit={() => console.log("City was submitted")}
                />
                {/*<Text>{city}</Text>*/}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <DineoutItems restaurantData={restaurantData} navigation={navigation} />

            </ScrollView>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />  
        </SafeAreaView>
    );
}


