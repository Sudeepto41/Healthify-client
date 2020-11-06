import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  // Button,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider, Button } from "react-native-paper";

import color from "../config/color";
export default function diagnosis({ navigation, route }) {
  let symptom = route.params.symptom;
  const [result, setResult] = useState("");
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const [average, setAverage] = useState(0);
  fetch(
    "https://rapidapi.p.rapidapi.com/diagnosis?symptoms=" +
      JSON.stringify([symptom]) +
      "&gender=male&year_of_birth=1984&language=en-gb",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
        "x-rapidapi-key": "24097d5ee5msh92792d7398602acp18fa53jsncf72a8cf8feb",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let diag1 = data[1]
        ? "\n\n" +
          data[1].Issue.Name +
          " - " +
          data[1].Issue.Accuracy +
          "%\nSpecialization: " +
          data[1].Specialisation[0].Name
        : "";

      let diag2 = data[2]
        ? "\n\n" +
          data[2].Issue.Name +
          " - " +
          data[2].Issue.Accuracy +
          "%\nSpecialization: " +
          data[2].Specialisation[0].Name
        : "";

      setResult(
        data[0].Issue.Name +
          " - " +
          data[0].Issue.Accuracy +
          "%\nSpecialization: " +
          data[0].Specialisation[0].Name +
          diag1 +
          diag2
      );

      setSum(data[0].Issue.Accuracy);
      setCount(1);

      if (data[1]) {
        setSum(sum + data[1].Issue.Accuracy);
        setCount(count + 1);
      }

      if (data[2]) {
        setSum(sum + data[2].Issue.Accuracy);
        setCount(count + 1);
      }

      setAverage(sum / count);

      //Alert.alert("Top 3 Diagnosis", result);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Results</Text>
      <Text style={styles.Text1}>See how you are doing!</Text>
      <Text>{result}</Text>

      {() => {
        if (average >= 80) {
          return (
            <Image
              style={styles.BackgroundImage}
              source={require("../assets/image/progresswheel2.png")} 
            ></Image>
          );
        } else if (average >= 60) {
          return (
            <Image
              style={styles.BackgroundImage}
              source={require("../assets/image/progresswheel0.png")} 
          );
        } else {
          return (
            <Image
              style={styles.BackgroundImage}
              source={require("../assets/image/progresswheel1.png")}
        }
      }}

      <Image
        style={styles.BackgroundImage}
        source={require("../assets/image/progresswheel1.png")}
      ></Image>
      <Image
        style={styles.BackgroundImage}
        source={require("../assets/image/progresswheel0.png")}
      ></Image>
      <Image
        style={styles.BackgroundImage}
        source={require("../assets/image/progresswheel2.png")}
      ></Image>
      <Button mode="contained" style={styles.btn}>
        Finish
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_light,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    position: "absolute",
    top: Dimensions.get("window").height / 10,
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").height / 5,
  },
  BackgroundImage: {
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 5, //margin TOP
    height: Dimensions.get("window").height / 2.5, //HEIGHT
    width: Dimensions.get("window").width, //WIDTH
  },
  Text: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.5,
    fontFamily: "nunito-Black",
    color: "#4B5769",
    fontSize: 24,
    textAlign: "center",
  },
  Text1: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.4,
    fontFamily: "nunito-regular",
    color: "#4B5769",
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    top: 24,
    backgroundColor: "#2974DF",
    height: 50,
    width: 150,
    paddingTop: 5,
    borderRadius: 25,
  },
});
