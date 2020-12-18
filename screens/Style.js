import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors'

const styles = StyleSheet.create({

    /////////////////////////////////SIGN//////////////////////

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
        
    },


    buttonw: {
        width: '90%',
        height: 45,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    


    /////////////////////////////////HOME//////////////////////

    

    /////////////////////////////////PROFILE//////////////////////

    profilecontainer: {
        
        height: '50%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor : colors.blu,
        borderBottomLeftRadius: 90,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90
    },

    profilecontainertext: {
        color:'white', 
        fontSize: 30,
        margin: 10,
    }


    /////////////////////////////////CARD//////////////////////


    



});

export default styles