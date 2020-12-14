import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login.js"
import SignUp from "../screens/SignUp.js"

const Stack = createStackNavigator()

export default function Auth() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}