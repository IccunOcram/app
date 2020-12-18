import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import useForm from "../hooks/useForm.js";
import styles from "./Style.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../Utility/api";
import Spacer from "../components/Spacer";
import UpTab from "../components/UpTab"
import colors from "../config/colors";

export default function CardListScreen() {
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [cards, setCards] = useState([]);

  /* const cardDetail = () => {
    <View>

    </View>
  } */

  const getCardList = async () => {
    console.log("Sono Eseguito");

    try {
      setLoading(true);
      const { result, errors, payload } = await api.get("get-cards");
      console.log("errore: ", errors);
      console.log("result: ", result);
      console.log("payload: ", payload);
      setCards(payload.cards);
      console.log("cards: ", payload.cards);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardList();
  }, []);

  return (
    <>

    <UpTab/>

    <ScrollView >
      <View style = {{ height: '100%',padding: 5,flexDirection: 'row', flexWrap: 'wrap', }}>

      {cards
        ? cards.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: item.game === "minecraft" ? colors.red :
                                 item.game === "supermario" ? colors.green : colors.blu,
                width: '45%',
                height: 150,
                margin: 5,  
                padding: 5,             
                borderRadius: 10,  
                justifyContent: 'flex-start',
                alignItems: 'flex-start'              
              }}
            >
              
              <Text style={{color:'white', fontSize: 20, }}> {item.name} </Text>
              
              <Text style={{ color:'white', fontSize: 12,  }}> {item.game} </Text>
            </View>
          ))
        : console.log("Non c'è niente")}
      </View>
      <View>
        <Text>prova</Text>
      </View>
      

        </ScrollView>
    </>

    
 

    /* <View style={{ flex : 1, alignItems : "center"}}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item}</Text>
              )}
            />
          )}
          <Text></Text>
        </View> */
  );
}
