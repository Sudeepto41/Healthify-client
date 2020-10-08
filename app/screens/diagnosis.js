import React, { useState } from 'react'
// import axios from 'axios'

import {
  StyleSheet,
  Text,
  SafeAreaView,
  
  View,
  Image,
  Dimensions,
} from 'react-native'
import { Picker } from '@react-native-community/picker'
import {
  Provider as PaperProvider,
} from 'react-native-paper'

import Constants from 'expo-constants'

export default function Diagnosis() {
  const [selectedBodyPart, setSelectedBodyPart] = useState({})
  const [bodyParts, setBodyParts] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <View style={styles.innerContainer}>
          <Image
            style={styles.heroImage}
            source={require('../assets/PhoneAuthBG.png')}
          />

          <Text>Select Body Part</Text>

          <Picker
            selectedValue={selectedBodyPart}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBodyPart(itemValue)
            }>
            {bodyParts.map((bodyPart) => (
              <Picker.Item
                label={bodyPart.name}
                value={bodyPart}
                key={bodyPart.id}
              />
            ))}
          </Picker>
        </View>
      </PaperProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  innerContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    alignItems: 'center',
    // position: 'absolute',
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  picker: {
    height: 50,
    width: 250,
    paddingVertical: 4,
  },
})
