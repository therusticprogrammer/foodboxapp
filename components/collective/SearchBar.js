import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";


/*cityHandler*/
export default function SearchBar({ onCityChange, onCitySubmit }) {

    return (
        <View style={{marginTop: 15, flexDirection: "row" }}>
            <View style={{
                flexDirection:"row",
                justifyContent: "center",
                alignItems:"center",
                flex: 1,
                backgroundColor:"#8fbc8f",
                borderRadius:20,
                padding:11,
            }}>
            <View style={{ marginHorizontal: 3 }}>
                    <Ionicons name="location-sharp" size={22} />
            </View> 
                    <View style={{
                                backgroundColor: "#eee",
                                borderRadius: 50,
                                flexDirection: "row",
                                alignItems: "center",
                                marginRight: 10,
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                
                    }}>
            <TextInput
                style={{
                        backgroundColor: "#eee",
                        borderStartColor: "#eee",
                        borderRadius:20,
                        fontWeight: "700",
                        margin: 5,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        color: "#000",
                        width:187,
                        height:27,
                }}
                placeholder="Search"
                onChangeText= {newCity => onCityChange(newCity)}
                //onEndEditing = { () => this.endEditing()}
                //onEndEditing={checkTextInput}//(data) => {
                    //checkTextInput
                    //console.log(data);
                    //const displaycity = data.description.split(",")[0];
                    //onCityChange(data);
                //}}
            >
               
            </TextInput>
            </View>
                <View
                    /*title="Search"
                    onPress={(data) => {
                        onCitySubmit();
                        console.log(data);
                        //onCityChange(data);
                    }}*/               
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="clockcircle" size={12} style={{ marginRight:6}}/>
                        <Text>Explore</Text>
                    </View>
                </View>
            </View>
            {/*
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyArV6S9XW4N9FZy0jGCjr3edZIgJ_ubs5g" }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description;
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderStartColor: "#eee",
                        borderRadius:20,
                        fontWeight: "700",
                        margin: 5,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        color: "#000",
  
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        
                    }
                }}
                renderLeftButton = { () => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>    
                )}
                renderRightButton = {() => (
                    <View
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="clockcircle" size={11} style={{ marginRight:6}}/>
                        <Text>Search</Text>
                    </View>
                )}
            
            />*/}
        </View>
    );
}


const styles = StyleSheet.create({
    input_layout: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    textInput: {
        backgroundColor: "#eee",
        borderStartColor: "#eee",
        borderRadius:20,
        fontWeight: "700",
        margin: 5,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        color: "#000",

    },
    textInputContainer: {
        backgroundColor: "#eee",
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        
    }
});
//2:02:00