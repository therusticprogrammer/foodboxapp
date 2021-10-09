import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "./screens/Home";
import DineDetail from "./screens/DineDetail";

export default function ReactNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown:false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DineDetail" component={DineDetail} />
            </Stack.Navigator>
        </NavigationContainer>        
    );
}
