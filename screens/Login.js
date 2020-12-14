import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Row from "../components/Row.js";
import FormButton from "../components/FormButton.js";
import Input from "../components/Input.js";
import { rootNavigation } from '../Utility/navigation.js';


export default function Welcome({ navigation, route }) {

    const lostPassword = () => {
        navigation.navigate('SignUp')
    }

    return (
        <>
            <Text>Nome Utente/Email</Text>
                <Input />
            <Text>Password</Text>
                <Input />
                    <FormButton />
            <Text onPress={lostPassword}>Hai dimenticato la password?</Text>
            <Text>Hai dimenticato la password?</Text>

        </>
    )
}