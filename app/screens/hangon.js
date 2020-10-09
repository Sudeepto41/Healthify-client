import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  // Button,
  ImageBackground,
  Dimensions,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider, Button } from 'react-native-paper'

import color from '../config/color'
export default function Hang({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.BackgroundImage}
        source={require('../assets/image/hangon.png')}></Image>
      <Text style={styles.Text}>Hang ON!</Text>
      <Text style={styles.Text1}>Let us sign you UP!</Text>

      <Button
        // icon="check"
        mode="contained"
        onPress={() => navigation.navigate('diagnosis')}
        style={styles.btn}>
        Diagnose
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackgroundImage: {
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height / 5, //margin TOP
    height: Dimensions.get('window').height / 2.5, //HEIGHT
    width: Dimensions.get('window').width, //WIDTH
  },
  Text: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.5,
    fontFamily: 'nunito-Black',
    color: '#4B5769',
    fontSize: 24,
    textAlign: 'center',
  },
  Text1: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.4,
    fontFamily: 'nunito-regular',
    color: '#4B5769',
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    top: 24,
    backgroundColor: '#2974DF',
    height: 50,
    width: 150,
    paddingTop: 5,
    borderRadius: 25,
  },
})
