import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Row from "../components/Row.js";
import FormButton from "../components/FormButton.js";
import Input from "../components/Input.js";
import { rootNavigation } from '../Utility/navigation.js';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Login({ navigation, route }) {

    const lostPassword = () => {
        console.log('Hai cambiato la password');
    }

    const signUpForm = () => {
        navigation.navigate('SignUp')
    }

    return (
        <>
            <Text>Nome Utente/Email</Text>
            <Input />
            <Text>Password</Text>
            <Input />
            <FormButton title={"Invia"} />
            <TouchableOpacity onPress={lostPassword}>
                <Text>Hai dimenticato la password?</Text>
            </TouchableOpacity>
            <Text>Non sei iscritto?
            <TouchableOpacity onPress={signUpForm}>
                    <Text>Registrati!</Text>
                </TouchableOpacity>
            </Text>

        </>
    )
}