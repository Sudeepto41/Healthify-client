import React, { useState } from 'react'

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
  const [selectedSubBodyPart, setSelectedSubBodyPart] = useState({})
  const [subBodyParts, setSubBodyParts] = useState([])
  const [symptoms, setSymptoms] = useState([])
  const [selectedSymptom, setSelectedSymptom] = useState({})

  async function fetchDiagnosis() {
    fetch(
      'https://rapidapi.p.rapidapi.com/diagnosis?symptoms=' +
        JSON.stringify([selectedSymptom.ID]) +
        '&gender=male&year_of_birth=1984&language=en-gb',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '24097d5ee5msh92792d7398602acp18fa53jsncf72a8cf8feb',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        Alert.alert(
          'Top 3 Diagnosis',

          data[0].Issue.Name +
            ' - ' +
            data[0].Issue.Accuracy +
            '%\nSpecialization: ' +
            data[0].Specialisation[0].Name +
            '\n\n' +
            data[1].Issue.Name +
            ' - ' +
            data[1].Issue.Accuracy +
            '%\nSpecialization: ' +
            data[1].Specialisation[1].Name +
            '\n\n' +
            data[2].Issue.Name +
            ' - ' +
            data[2].Issue.Accuracy +
            '%\nSpecialization: ' +
            data[2].Specialisation[2].Name
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function fetchSymptoms(subBodyPart) {
    fetch(
      'https://rapidapi.p.rapidapi.com/symptoms/' +
        subBodyPart.ID +
        '/man?language=en-gb',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '24097d5ee5msh92792d7398602acp18fa53jsncf72a8cf8feb',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSymptoms(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function fetchBodyParts() {
    fetch('https://rapidapi.p.rapidapi.com/body/locations?language=en-gb', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
        'x-rapidapi-key': '24097d5ee5msh92792d7398602acp18fa53jsncf72a8cf8feb',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBodyParts(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function fetchSubBodyParts(bodyPart) {
    fetch(
      'https://rapidapi.p.rapidapi.com/body/locations/' +
        bodyPart.ID +
        '?language=en-gb',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '24097d5ee5msh92792d7398602acp18fa53jsncf72a8cf8feb',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSubBodyParts(data)
      })
      .catch((error) => {
        console.error(error)
      })
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
                fetchSubBodyParts(itemValue)
              }}>
              {bodyParts.map((bodyPart) => (
                <Picker.Item
                  label={bodyPart.Name}
                  value={bodyPart}
                  key={bodyPart.ID}
                />
              ))}
            </Picker>

            <Text style={styles.label}>Select Sub Body Part</Text>

            <Picker
              selectedValue={selectedSubBodyPart}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedSubBodyPart(itemValue)
                fetchSymptoms(itemValue)
              }}>
              {subBodyParts.map((subBodyPart) => (
                <Picker.Item
                  label={subBodyPart.Name}
                  value={subBodyPart}
                  key={subBodyPart.ID}
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
              {symptoms.map((symptom) => (
                <Picker.Item
                  label={symptom.Name}
                  value={symptom}
                  key={symptom.ID}
                />
              ))}
            </Picker>

            <Button
              icon="check"
              mode="contained"
              onPress={() => fetchDiagnosis()}
              style={styles.btn}>
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
  btn: {
    backgroundColor: '#2974DF',
    height: 50,
    width: 150,
    paddingTop: 5,
    borderRadius: 25,
  },
})
