import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors.js'

export default function ThankYouScreen () {
    return (
        <View style={styles.container}>
          <Text style={[styles.text]}>Grazie</Text>
        </View>
      )
    }
    
    // COMPONENT STYLE
    /////////////////////////////////////////////////////////////////////
    
    const styles = StyleSheet.create({
      container: {},
      text: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase'
      },
      textCenter: {
        textAlign: 'center'
      }
    })