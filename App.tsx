import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Teste from '@screens/Teste'
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'
import {
  useFonts,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    SpaceGrotesk_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Teste />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
