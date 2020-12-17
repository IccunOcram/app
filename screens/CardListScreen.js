import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import useForm from "../hooks/useForm.js";
import styles from "./Style.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../Utility/api";
import Spacer from "../components/Spacer";

export default function CardListScreen() {
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [cards, setCards] = useState([]);

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
    <View style = {{height: "100%"}}>
    <ScrollView style = {{height: "100%", flexWrap: "wrap", flexDirection: "row"}}>

      {/* <View style={styles.button}>
        <TouchableOpacity
          title={"getCards"}
          onPress={() => {
            getCardList();
          }}
        >
          <Text style={{ color: "black" }}>Ottieni carte</Text>
        </TouchableOpacity>
      </View> */}

      {cards
        ? cards.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: item.game === "minecraft" ?"green" :
                                 item.game === "supermario" ? "blue" : "red",
                width: 100,
                height: 100,
                marginTop: 30,
                borderRadius: 10,
                flexWrap: "wrap"
              }}
            >
              <Spacer size={5} />
              <Text style={{ textAlign: "center" }}> {item.name} </Text>
              <Spacer size={5} />
              <Text style={{ textAlign: "center" }}> {item.game} </Text>
            </View>
          ))
        : console.log("Non c'è niente")}
        </ScrollView>
    </View>

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
