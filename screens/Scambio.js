import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity, Text, View, Clipboard, ActivityIndicator } from "react-native";
import UpTab from "../components/UpTab";
import QRCode from "react-native-qrcode-svg";
import { AuthContext } from "../context/AuthContext";
import styles from "./Style";
import colors from "../config/colors";
import api from "../Utility/api.js"

function Scambio({ navigation, route }) {
  const { user } = useContext(AuthContext);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const moveCards = async (portfolio_code) => {
    try {
      setLoading(true);
      const { result, errors, payload } = await api.post("move-card", { "card_id": route.params.card_id, portfolio_code });
      console.log("errore: ", errors);
      console.log("result: ", result);
      console.log("payload: ", payload);
      if (result) {
        //
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      console.log(status)
      setHasPermission(status === "granted");
      if (status === "granted") {
        setOpen(true);
      }
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      moveCards(data)
    }
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.scambiocontainer}>
          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => { navigation.navigate("CardListScreen") }}>
              <View style={{ borderRadius: 100, height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, color: 'white' }}>x</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 40, color: 'white' }}>{route.params.card_name}</Text>
            <Text style={{ fontSize: 20, color: 'white' }}>{route.params.card_game}</Text>
          </View>
        </View>
        {
          open
            ?
            <View style={{ margin: 20 }}>
              <View style={{ height: 300 }}>
                <BarCodeScanner
                  barCodeType={[BarCodeScanner.Constants.BarCodeType.qr, BarCodeScanner.BarCodeBounds]}
                  onBarCodeScanned={handleBarCodeScanned}
                  style={{ width:"100%", height: "100%" }}
                />
              </View>
              {scanned && (
                <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
              )}
              <Button title={"move to"} onPress={() => setOpen(false)} />
            </View>
            :
            <>
              <View style={{ width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: colors.blu, width: '80%', fontSize: 18, textAlign: 'center' }}>Inserisci qui il codice utente dell' account a cui mandare la carta</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Inserisci il codice"
                  placeholderTextColor="#0099e5"
                  onChangeText={code => setCode(code)}
                  defaultValue={code}
                />
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <Text style={{ color: colors.red, width: '80%', fontSize: 15, textAlign: 'center' }}>Utilizza il QR code</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "100%", justifyContent: 'center', alignItems: "center" }}>
                <View style={styles.button}>
                  <TouchableOpacity style={{ width: 300, alignItems: 'center' }} onPress={() => { moveCards(code); navigation.navigate("CardListScreen") }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>scambio</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
        }
      </ScrollView>
    </View>
  );
}