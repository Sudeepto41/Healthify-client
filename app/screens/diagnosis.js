import React, { useState } from 'react'
// import axios from 'axios'

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  View,
  Image,
  Dimensions,
} from 'react-native'
import { Picker } from '@react-native-community/picker'
import {
  Provider as PaperProvider,
  Appbar,
} from 'react-native-paper'

import Constants from 'expo-constants'
import color from "../config/color";

export default function Diagnosis() {
  const [selectedBodyPart, setSelectedBodyPart] = useState({})
  const [bodyParts, setBodyParts] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <Appbar style={styles.appBar}>
          <Appbar.Action
            icon="archive"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Appbar.Action
            icon="mail"
            onPress={() => {
              Alert.alert('Set list of body parts')
              setBodyParts([
                {
                  id: 1,
                  name: 'Head',
                },
                {
                  id: 2,
                  name: 'Stomach',
                },
              ])
              // setSelectedBodyPart({ id: bodyParts[0].id })
            }}
          />
        </Appbar>

        <View style={styles.innerContainer}>
          <Image
            style={styles.heroImage}
            source={require('../assets/image/diagnosisImage.png')}
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
    backgroundColor: color.bg_light,
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
  appBar: {
    // position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
