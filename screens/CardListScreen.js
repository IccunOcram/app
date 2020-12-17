import React, {useEffect, useState} from "react";
import { ActivityIndicator, Text, View } from 'react-native';
import useForm from "../hooks/useForm.js";
import styles from './Style.js';
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../Utility/api"




export default function CardListScreen(){

  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false)

    const getCardList = async () => {

      console.log("Sono Eseguito")


      try {
          setLoading(true)
          const { result, errors, payload } = await api.get('get-cards')
          console.log(errors)
          console.log(result)
          console.log(payload)
          

      } catch (err) {
          console.log(err)
      } finally {
          setLoading(false);
      }

  }
    
    return (

        <View style={styles.button }>
            
            
            <TouchableOpacity title={"Get"} onPress={() => {getCardList()}}>
              <Text style={{color:'black'}}>Ottieni carte</Text>
            </TouchableOpacity>
            
            
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