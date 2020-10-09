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
import { Provider as PaperProvider, Appbar, Button } from 'react-native-paper'
import { AppLoading } from 'expo'

import Constants from 'expo-constants'
import color from '../config/color'

export default function Diagnosis() {
  const [selectedBodyPart, setSelectedBodyPart] = useState({})
  const [bodyPartsLoaded, setBodyPartsLoaded] = useState(false)
  const [bodyParts, setBodyParts] = useState([])
  const [symptoms, setSymptoms] = useState([])
  const [selectedSymptom, setSelectedSymptom] = useState({})

  async function fetchDiagnosis() {
    Alert.alert('Fetching Diagnosis')
  }

  async function fetchSymptoms() {
    // await axios.get().then((response) => setBodyParts(response.data))
    setSymptoms([
      {
        id: 1,
        name: 'ache',
      },
      {
        id: 2,
        name: 'burning',
      },
    ])

    setSelectedSymptom[symptoms[0]]
  }

  async function fetchBodyParts() {
    // await axios.get().then((response) => setBodyParts(response.data))
    setBodyParts([
      // {
      //   id: 0,
      //   name: 'Select Body Part',
      // },
      {
        id: 1,
        name: 'Head',
      },
      {
        id: 2,
        name: 'Stomach',
      },
    ])

    setSelectedBodyPart[bodyParts[0]]

    fetchSymptoms()
  }

  if (bodyPartsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <View style={styles.innerContainer}>
            <Image
              style={styles.heroImage}
              source={require('../assets/image/diagnosisImage.png')}
            />

            <Text style={styles.label}>Select Body Part</Text>

            <Picker
              selectedValue={selectedBodyPart}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedBodyPart(itemValue)
                fetchSymptoms()
              }}>
              {bodyParts.map((bodyPart) => (
                <Picker.Item
                  label={bodyPart.name}
                  value={bodyPart}
                  key={bodyPart.id}
                />
              ))}
            </Picker>

            <Text style={styles.label}>Select Symptom</Text>

            <Picker
              selectedValue={selectedSymptom}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedSymptom(itemValue)
              }>
              {symptoms.map((bodyPart) => (
                <Picker.Item
                  label={bodyPart.name}
                  value={bodyPart}
                  key={bodyPart.id}
                />
              ))}
            </Picker>

            <Button
              icon="check"
              mode="contained"
              onPress={() => fetchDiagnosis()}>
              Submit
            </Button>
          </View>
        </PaperProvider>
      </SafeAreaView>
    )
  } else {
    return (
      <AppLoading
        startAsync={fetchBodyParts}
        onFinish={() => setBodyPartsLoaded(true)}
      />
    )
  }
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
    alignSelf: 'center',
    // position: 'absolute',
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  label: {
    marginTop: 16,
  },
  picker: {
    height: 50,
    width: 250,
    paddingVertical: 4,
    marginVertical: 12,
  },
  appBar: {
    // position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
