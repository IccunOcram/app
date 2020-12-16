import React, { useContext, useState, createRef } from "react";
import { Text, TextInput } from 'react-native'
import Input from '../components/Input.js'
import FormButton from '../components/FormButton.js';
import { View, CheckBox } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import useForm from '../hooks/useForm.js'
import api from '../Utility/api'
import styles from './Style.js'


const inputs = [
    { label: 'Nome', name: 'name', ref: createRef() },
    { label: 'Cognome', name: 'surname', ref: createRef() },
    { label: 'Email', name: 'email', ref: createRef() },
    { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true, },
    { label: 'Conferma la password', name: 'password_confirmation', ref: createRef(), secureTextEntry: true,},
    { label: 'Nome Utente', name: 'username', ref: createRef() }
];

export default function SignUp() {

    const requiredInputs = ['username', 'email', 'password', 'password_confirmation']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false)

    const privacyConfirmation = () => {
        console.log('Grazie per aver accettato la privacy');
    }
    
    const submitSignup = async () => {

        console.log(formData.values);

        try {
            setLoading(true)
            const { result, errors, payload } = await api.post('authentication/signup-action', formData.values)
            console.log(errors)
            if (result) {
                console.log(formData.values)
                manageUserData(payload)
                navigaton.navigate('ThankYouScreen')
                console.log('Ha funzionato');
            } else {
                console.log('Errore');
                setError(errors[0].message)
                setMessageOpen(true)
            }

        } catch (err) {
            setError(err)
            setMessageOpen(true)

        } finally {
            setLoading(false);
        }

    }

    return (
    <>

        {inputs.map((input, index) =>
            <View key={index} style = {{width:"80%", alignItems : "center"}} >
                
                <TextInput onChangeText={(text) => setFormValue(input.name, text)}
                    label={input.label} style = {styles.input} placeholder={input.label}
                />
            </View>)}

        <View style = {{flexdirection: "row"}} >
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
            />
            <Text>Ho letto e accetto la normativa</Text>

        </View>

        <FormButton title={"ISCRIVITI"} onPress={submitSignup} />


    </>)
}