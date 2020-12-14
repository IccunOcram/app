import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import colors from '../config/colors';

export default function FormButton({
  title="",
  onPress,
  ...props
}){
    return <>
    <View>
        <Button style={styles.button} title={title} onPress={onPress} {...props}/>
      </View>
    </>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#ffff00",
    }
  });