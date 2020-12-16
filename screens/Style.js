import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors'

const styles = StyleSheet.create({

    input: {
        
        width: "90%",
        height: 45,
        borderColor: colors.blu,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        
    },

    signcontainer: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : colors.blu,
        borderBottomLeftRadius: 90,
        
    },
    signupcontainer: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : colors.blu,
        borderBottomLeftRadius: 90,
        
    },


    button: {
        width: '90%',
        height: 45,
        borderRadius: 10,
        backgroundColor: colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        
    }



});

export default styles