import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors.js";
import FormButton from "../components/FormButton.js";
import { rootNavigation } from "../Utility/navigation.js";
import styles from "./Style";

export default function ThankYouScreen({ navigation }) {
  const goHome = () => {
    rootNavigation.current.navigate("Main");
  };

  return (
    <View style={style.container}>
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
          onPress={goHome}
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
