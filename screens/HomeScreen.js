import React, { useContext, useState, createRef } from "react";
import {  Text, View } from 'react-native';
import { AuthContext } from "../context/AuthContext"
import UpTab from "../components/UpTab"

export default function HomeScreen(){

    const { user } = useContext(AuthContext);
    //console.log(user)

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    return(        
        <>
            <UpTab/>
        
            <View>
                <Text>Benvenuto {user.name}</Text>
                <Text>Oggi è il {date}/{month}/{year}</Text>
            </View>
        
        
        </>
    
        
        
    )
}