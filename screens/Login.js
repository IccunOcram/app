import React, { useContext, useState, createRef } from "react";
import { Image , Text, View, TextInput } from "react-native";
import Row from "../components/Row.js";
import FormButton from "../components/FormButton.js";
import Input from "../components/Input.js";
import { rootNavigation } from "../Utility/navigation.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import useForm from "../hooks/useForm.js";
import { AuthContext } from "../context/AuthContext";
import api from "../Utility/api";
import Spacer from "../components/Spacer.js";
import styles from "./Style.js";
import colors from "../config/colors";
import logo_white from '../assets/logo_white.png'; 

const inputs = [
  { label: "Username", name: "username_email", ref: createRef() },
  {
    label: "Password",
    name: "password",
    ref: createRef(),
    secureTextEntry: true,
  },
];

export default function Login({ navigation, route }) {
  const requiredInputs = ["username_email", "password"];
  const [formData, setFormValue] = useForm(requiredInputs);
  const [error, setError] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const { manageUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const lostPassword = () => {
    console.log("Hai cambiato la password");
  };

  const signUpForm = () => {
    navigation.navigate("SignUp");
  };

  const submitLogin = async () => {
    try {
      setLoading(true);
      const { result, errors, payload } = await api.post(
        "authentication/login-action",
        formData.values
      );
      console.log(formData);
      if (result) {
        manageUserData(payload);
        rootNavigation.current.navigate("Main");
        console.log("Loggato");
      } else {
        setError(errors[0].message);
        setMessageOpen(true);
        console.log("errore");
      }
    } catch (err) {
      console.warn(err);
      setError(err);
      setMessageOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.signcontainer}>
      <Image source={logo_white} style={{width: 100, height: 100}}  /> 
      </View>
      <Spacer size={15} />
      {inputs.map((input, index) => (
        <View key={index} style={{ width: "100%", alignItems: "center" }}>
          {/* <Text>{input.label}</Text> */}
          <TextInput
            onChangeText={(text) => setFormValue(input.name, text)}
            label={input.label}
            style={styles.input}
            placeholder={input.label}
            placeholderTextColor="#0099e5"
          />
          <Spacer size={10} />
        </View>
      ))}
      <Spacer size={5} />

      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.button}>
          <TouchableOpacity
            title={"Accedi"}
            onPress={submitLogin}
            style={{ width: 300, alignItems: "center" }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={lostPassword}>
          <Text>
            Hai dimenticato la{" "}
            <Text style={{ color: colors.red }}>password?</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signUpForm}>
          <Text>
            Non hai un account?
            <Text style={{ color: colors.red }}>Registrati!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
