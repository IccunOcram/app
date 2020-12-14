import React from "react";
import { Text } from 'react-native'
import Input from '../components/Input.js'
import { View } from 'react-native'

const inputs = [
    { label: 'Username', name: 'username'}
];


export default function SignUp(){
    return (
        <View>
        {inputs.map((input, index)=>
        <Input 
        label={input.label}
        
        />
        )}
        </View>
    )
}