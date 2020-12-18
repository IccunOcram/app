import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import CardListScreen from "../screens/CardListScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";
import Scambio from "../screens/Scambio.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../config/colors";

// usare createBottommTabNavigator: https://reactnavigation.org/docs/bottom-tab-navigator/

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "CardList") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Profile") {
            4;
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.blu,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CardList" component={CardListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Scambio" component={Scambio} />
    </Tab.Navigator>
  );
}
