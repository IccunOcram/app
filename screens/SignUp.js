import React from "react";
import { Text } from 'react-native'
import Input from '../components/Input.js'
import FormButton from '../components/FormButton.js';
import { View, CheckBox } from 'react-native'
import { useState } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import useForm from '../hooks/useForm.js'
import api from '../Utility/api'


const inputs = [
    { label: 'Email', name: 'email' },
    { label: 'Nome Utente', name: 'username' },
    { label: 'Password', name: 'password' },
    { label: 'Conferma la password', name: 'password_confirmation' }
];

export default function SignUp() {

    const requiredInputs = ['username', 'email', 'password', 'password_confirmation']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);

    const privacyConfirmation = () => {
        console.log('Grazie per aver accettato la privacy');
    }
    
    const submitSignup = async () => {

        console.log(formData.values);

        try {
            setLoading(true)
            const { result, payload } = await api.post('authentication/signup-action', formData.values)
            if (result) {
                manageUserData(payload)
                navigation.navigate('ThankYouScreen')
                console.log('Ha funzionato');
            } else {
                console.log('Errore');
            }

        } catch (err) {
            console.log('catch', err);

        } finally {
            setLoading(false);
        }

    }

    return (<>

        {inputs.map((input, index) =>
            <View key={index}>
                <Text>{input.label}</Text>
                <Input updateInputValue={(text) => setFormValue(input.name, text)}
                    label={input.label}
                />
            </View>)}

        <CheckBox
            value={isSelected}
            onValueChange={setSelection}
        />

        <Text>Ho letto e accetto la normativa della Privacy</Text>

        <FormButton title={"ISCRIVITI"} onPress={submitSignup} />


    </>)
}