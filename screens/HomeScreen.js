import React, { useContext, useState, createRef } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from "../context/AuthContext"

export default function HomeScreen(){

    const { manageUserData } = useContext(AuthContext);

    return(
        <View>
            <Text>Benvenuto</Text>
        </View>
    )
}