import React, { useContext } from "react";
import {Image, Text, View } from "react-native";
import colors from "../config/colors";
import { AuthContext } from "../context/AuthContext";
import Colors from "../config/colors";
import logo_blue from '../assets/logo_blue.png'

export default function UpTab() {
  const { user } = useContext(AuthContext);
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  return (
    <View style={{ height: "10%", marginTop: 10 }}>
      <View
        style={{
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "50%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={logo_blue} style={{width: 40, height: 40, marginLeft: 10}}></Image>
          <Text style={{ margin: 5, color: colors.blu, fontSize: 15 }}>
            {" "}
            {date}/{month}/{year}
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: colors.blu, fontSize: 20 }}>{user.name}</Text>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.blu,
              borderRadius: 100,
              margin: 5,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}
