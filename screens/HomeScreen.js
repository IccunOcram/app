import React, { useContext, useState, createRef } from "react";
import {  Text, View } from 'react-native';
import { AuthContext } from "../context/AuthContext"
import UpTab from "../components/UpTab"
import colors from "../config/colors";

export default function HomeScreen(){

    const { user } = useContext(AuthContext);
    //console.log(user)

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    return(        
        <>
            <UpTab/>
        
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={{color: colors.blu, fontSize: 40}}> {user.name}</Text>
                
            </View>
            <View style={{height: '100%', width: '100%', alignItems:'center', borderRadius: 10,}}>
                <View style={{ margin: 10 ,width: '90%', height: '15%', backgroundColor: colors.yellow, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>13 <Text style={{fontSize: 20 }}>pokemon</Text></Text>
                </View>
                <View style={{ margin: 10 ,width: '90%', height: '15%', backgroundColor: colors.red, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>13 <Text style={{fontSize: 20 }}>minecraft</Text></Text>
                </View>
                <View style={{ margin: 10 ,width: '90%', height: '15%', backgroundColor: colors.green, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 50}}>13 <Text style={{fontSize: 20 }}>supermario</Text></Text>
                </View>
                
                
                
            </View>
        
        
        </>
    
        
        
    )
}