import React from "react";
import { Image , View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors.js";
import FormButton from "../components/FormButton.js";
import { rootNavigation } from "../Utility/navigation.js";
import styles from "./Style";
import logo_white from '../assets/logo_white.png'

export default function ThankYouScreen({ navigation }) {
  const goLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={style.container}>
      <Image source={logo_white} style={{width: 150, height: 150}}></Image>
      <Text style={{ fontSize: 50, color: "white", marginBottom: 20 }}>
        THANKS
      </Text>
      <Text style={[style.text]}>
        Welcome to our app. Before continue check your email and verify the
        address by clicking on the link we have for you sent.
      </Text>
      {/* <FormButton title={"Entra nell'App"} onPress={goHome} /> */}
      <View style={styles.buttonw}>
        <TouchableOpacity
          onPress={goLogin}
          style={{ width: 300, alignItems: "center" }}
        >
          <Text>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// COMPONENT STYLE
/////////////////////////////////////////////////////////////////////

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.blu,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    color: "white",
    fontSize: 22,
  },
});
