import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import color from "../config/color";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.BackgroundImage}
        source={require("../assets/image/PhoneAuthBG.png")}
      ></ImageBackground>

      <TextInput
        keyboardType="default"
        style={styles.input}
        placeholder="Username"
        onChangeText={(String) => setEmail(String)}
        value={email}
      />

      <TextInput
        keyboardType="default"
        style={styles.input1}
        placeholder="Password"
        onChangeText={(String) => setPassword(String)}
        value={password}
      />

      <View style={styles.btn}>
        <Button
          title="Login"
          style={styles.butt}
          onPress={() => {
            fetch('https://asia-south1-healthify-server.cloudfunctions.net/api/login',
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              })
              .then((response) => response.json())
              .then((resp) => {
                if (resp.token == "error") {
                  alert("bummer bhsdk!!!");
                }
                else {
                  alert("Yeet lodu!");
                }
              })
              .catch((error) => {
                console.error(error);
              });;
          }
          }
        />
      </View>
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
  Text: {
    position: "absolute",
    top: Dimensions.get("window").height / 2,
    fontFamily: "nunito-Black",
    color: "#4B5769",
    fontSize: 20,
    textAlign: "center",
  },
  BackgroundImage: {
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 6.3, //margin TOP
    height: Dimensions.get("window").height / 2.5, //HEIGHT
    width: Dimensions.get("window").width, //WIDTH
  },

  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 24,
    position: "absolute",
    bottom: Dimensions.get("window").height / 2.7,
  },
  input1: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 24,
    position: "absolute",
    bottom: Dimensions.get("window").height / 3.7,
  },
  btn: {
    position: "absolute",
    bottom: Dimensions.get("window").height / 5.4,
    width: 170,
  },
});
