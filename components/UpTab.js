import React from 'react';
import {Text, View} from 'react-native';
import colors from '../config/colors';

export default function UpTab () {

    return (
        <View style={{height: '100%', backgroundColor: 'red'}}>
            <View style={{height: '20%', backgroundColor: colors.blu}}>
                <Text>logo</Text>
                <Text>utente</Text>
            </View>
        </View>
    )
}