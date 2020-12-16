import React, {useEffect, useState} from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';




export default function CardListScreen(){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://tree-rn-server.herokuapp.com/get-cards')
          .then((response) => response.json())
          .then((json) => setData(json.movies))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    

    /*
    nostra fetch

    const [cards, setCards] = useState([]);
     useEffect(() => {
        fetch('https://tree-rn-server.herokuapp.com/get-cards')
        .then((response) => response.json())
        .then((json) => setCards(json.cards))
        .catch((error) => console.error(error))
    }, []); */


    return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.title}, {item.releaseYear}</Text>
              )}
            />
          )}
        </View>
      );
}