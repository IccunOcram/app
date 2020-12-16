import React, { useContext, useState, createRef } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from "../context/AuthContext"

export default function HomeScreen(){

    const { user } = useContext(AuthContext);
    //console.log(user)

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    return(
        <View>
            <Text>Benvenuto {user.name}</Text>
            <Text>Oggi è il {date}/{month}/{year}</Text>
        </View>
    )
}