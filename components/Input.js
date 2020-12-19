import { useLinkProps } from "@react-navigation/native";
import React, { Component } from "react";
import { TextInput } from "react-native";

export default function Input(props) {
  const [value, onChangeText] = React.useState("");

  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={(text) => {
        if (props.updateInputValue) {
          props.updateInputValue(text);
        }
        onChangeText(text);
      }}
      value={value}
    />
  );
}
