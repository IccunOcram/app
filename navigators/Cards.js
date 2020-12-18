import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CardListScreen from "../screens/CardListScreen.js";
import Scambio from "../screens/Scambio.js";

const Stack = createStackNavigator();

export default function Cards() {
  return (
    <Stack.Navigator initialRouteName="CardListScreen" headerMode="none">
      <Stack.Screen name="CardListScreen" component={CardListScreen} />
      <Stack.Screen name="Scambio" component={Scambio} />
    </Stack.Navigator>
  );
}
