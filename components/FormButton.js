import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import colors from '../config/colors';

export default function FormButton(){
    return <>
    <View>
        <Button style={{}} title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
    </>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#ffff00",
    }
  });