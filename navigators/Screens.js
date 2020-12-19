import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Auth.js";
import Main from "./Main.js";
import { rootNavigation } from "../Utility/navigation.js";
import useLoader from "../hooks/useLoader.js";
import { AuthContext } from "../context/AuthContext.js";

const Stack = createStackNavigator();

export default function Screens(props) {

    const Loading = useLoader();
    const {user} = useContext(AuthContext);

  return (
      Loading ? null :
      <NavigationContainer ref={rootNavigation}>
        <Stack.Navigator initialRouteName={ user ? "Main" : "Auth"} headerMode="none">
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
