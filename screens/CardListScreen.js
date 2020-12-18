import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import useForm from "../hooks/useForm.js";
import styles from "./Style.js";
//import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../Utility/api";
import Spacer from "../components/Spacer";
import UpTab from "../components/UpTab";
import colors from "../config/colors";

export default function CardListScreen() {
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState();

  const cardDetails = (index) => {
    console.log("Dettaglio aperto", index);
    setOpen(true);
    setActiveCard(index);
  };

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
      <UpTab />

      <ScrollView>
        <View
          style={{
            height: "100%",
            padding: 5,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {open && (
            <Modal
              style={{ borderWidth: 0, borderColor: "none" }}
              presentationStyle="overFullScreen"
            >
              <View style={{ backgroundColor: "white", padding:10, alignItems: 'center', justifyContent:'space-between' }}>

                <View style={{height: '5%',width: '100%', alignItems:'flex-end'}}>
                  <TouchableOpacity onPress={() => setOpen(false)}>
                    <View style={{ borderRadius: 100, height:40, width:40, alignItems: 'center', justifyContent: 'center'  }}>

                    <Text style={{fontSize:40,color: colors.blu}}>x</Text>
                    </View>
                  </TouchableOpacity>

                </View>
                <View style={{width: '100%', height:'40%', alignItems:'flex-start'}}>

                  <Text style={{ fontSize: 50, color: colors.blu }}>
                    {cards[activeCard].name}
                  </Text>
                  <Text style={{ fontSize: 20, color:colors.blu }}>
                    {cards[activeCard].game}
                  </Text>
                  <Text style={{ fontSize: 20, color: colors.blu }}>
                    {cards[activeCard].description}
                  </Text>
                </View>
                <View style={{width: '60%', height:'40%', borderRadius: 10, backgroundColor: colors.blu}} >


                </View>

                <View style={{height: '15%', width:'100%', alignItems:'center',justifyContent:'center'}}>

                  <View style={{width: '60%',height: 45,borderRadius: 10,backgroundColor:  colors.blu ,alignItems: 'center',justifyContent: 'center'}}>
                <TouchableOpacity title={"scambia"}  style={{width: 300, alignItems:'center'}} >
                      <Text style={{color:'white',fontSize:20}}>scambia</Text>

                </TouchableOpacity>
                  </View>
                </View>



              </View>
            </Modal>
          )}

          {!open && cards
            ? cards.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor:
                      item.game === "minecraft"
                        ? colors.red
                        : item.game === "supermario"
                        ? colors.green
                        : colors.yellow,
                    width: "45%",
                    height: 150,
                    margin: 5,
                    padding: 5,
                    borderRadius: 10,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                  onPress={() => cardDetails(index)}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>
                    {" "}
                    {item.name}{" "}
                  </Text>

                  <Text style={{ color: "white", fontSize: 12 }}>
                    {" "}
                    {item.game}{" "}
                  </Text>
                  {/* {
                details && <Text style={{ fontSize: 50}}>{item.description}</Text>
              } */}
                </TouchableOpacity>
              ))
            : console.log("Non c'è niente")}
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
