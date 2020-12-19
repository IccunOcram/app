import React, { useState, useEffect, useContext, createRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput  } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AuthContext } from "../context/AuthContext";
import api from "../Utility/api.js"
import styles from "./Style.js";
import Spacer from "../components/Spacer.js";

function Scambio({navigation, route}) {

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  //const [, ] = useState();

  const [text, setText] = useState('');
  console.log(text)

  

    
    const moveCards = async () => {
       
    
        try {
          setLoading(true);
          const { result, errors, payload } = await api.post("move-card", {"card_id": route.params.card_id, "portfolio_code":text });
          console.log("errore: ", errors);
          console.log("result: ", result);
          console.log("payload: ", payload);
          
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

    
    return (
        <View>
    
        <Text>
            Inserisci codice
        </Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />    

        <Text>
            Voglio usare il QRCode
        </Text>

        <TouchableOpacity onPress={moveCards}>
            <Text>Trasferisci</Text>
        </TouchableOpacity>


    </View>

    );

}

export default Scambio

    

    //Scambio con qr
  /* const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } */

 

      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}
