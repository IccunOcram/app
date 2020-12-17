import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors.js";
import FormButton from "../components/FormButton.js";
import { rootNavigation } from "../Utility/navigation.js";

export default function ThankYouScreen({navigation}) {
  const goHome = () => {
    rootNavigation.current.navigate("Main");
  };
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Grazie e benvenuto nella nostra app!</Text>
      <FormButton title={"Entra nell'App"} onPress={goHome} />
    </View>
  );
}

// COMPONENT STYLE
/////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
  },
  textCenter: {
    textAlign: "center",
  },
});
