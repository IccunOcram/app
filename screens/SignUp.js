import React, { useContext, useState, createRef } from "react";
import { Text, TextInput } from 'react-native'
import Input from '../components/Input.js'
import FormButton from '../components/FormButton.js';
import { View, CheckBox } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import useForm from '../hooks/useForm.js'
import api from '../Utility/api'
import styles from './Style.js'
import { rootNavigation } from '../Utility/navigation.js'


const inputs = [
    { label: 'Nome', name: 'name', ref: createRef() },
    { label: 'Cognome', name: 'surname', ref: createRef() },
    { label: 'Email', name: 'email', ref: createRef() },
    { label: 'Password', name: 'password', ref: createRef(), secureTextEntry: true, },
    { label: 'Conferma la password', name: 'password_confirmation', ref: createRef(), secureTextEntry: true,},
    { label: 'Nome Utente', name: 'username', ref: createRef() }
];

export default function SignUp({navigation}) {

    const requiredInputs = ['username', 'email', 'password', 'password_confirmation']
    const [formData, setFormValue] = useForm(requiredInputs)
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false)

    const privacyConfirmation = () => {
        console.log('Grazie per aver accettato la privacy');
    }

     const provaSignup = () => 
        {navigation.navigate('ThankYouScreen')} 
    
    
    const submitSignup = async () => {

        console.log(formData.values);

        try {
            setLoading(true)
            const { result, errors, payload } = await api.post('authentication/signup-action', formData.values)
            console.log(errors)
            if (result) {
                console.log(formData.values)
                manageUserData(payload)
                navigation.navigate('ThankYouScreen')
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
    
     <View style = {{ flex : 1, alignItems : "center"}}>
      <View style={styles.signupcontainer} >
        <Text style={{color:'white'}} >register</Text>        
      </View>
        {inputs.map((input, index) =>
            <View key={index} style = {{width:"100%", alignItems : "center"}} >
                
                <TextInput onChangeText={(text) => setFormValue(input.name, text)}
                    label={input.label} style = {styles.input}  placeholder={input.label } placeholderTextColor='#0099e5'
                />
            </View>)}

        <View stile={{backgroundColor: 'red', width: '90%' }} >
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                />
                <Text>Ho letto e accetto la normativa </Text>

        </View>

        <View style={styles.button }>
            <TouchableOpacity title={"rgister"} onPress={submitSignup} ><Text style={{color:'black'}}>register</Text></TouchableOpacity>
        </View>

    </View>
    )
}