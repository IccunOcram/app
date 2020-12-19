import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Providers from './context/Providers'
import Screens from './navigators/Screens'

export default function App() {
  return (
    <Providers>
      <Screens />
    </Providers>
  )
}
