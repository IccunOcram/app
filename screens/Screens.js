import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from "../navigators/Auth.js";
import Main from "../navigators/Main.js";
import { rootNavigation } from "../Utility/navigation.js"

const Stack = createStackNavigator();

export default function Screens(props) {
    return (
        <>
            <NavigationContainer ref = { rootNavigation }>
                <Stack.Navigator initialRouteName="Auth" headerMode='none'>
                    <Stack.Screen name="Auth" component={Auth} />
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}