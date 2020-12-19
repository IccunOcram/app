import React from "react";
import { StyleSheet, View } from "react-native";
export default function Row({ children, justify, align = "center", ...props }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: justify,
        alignItems: align,
      }}
      {...props}
    >
      {children}
    </View>
  );
}
