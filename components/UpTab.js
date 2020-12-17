import React, { useContext } from 'react';
import {Text, View} from 'react-native';
import { AuthContext } from "../context/AuthContext"

export default function UpTab () {

    const { user } = useContext(AuthContext);

    return (
        <View style={{height: '30%', backgroundColor: 'red'}}>
            <View>
                <Text>logo</Text>
                <Text>{user.name}</Text>
            </View>
        </View>
    )
}