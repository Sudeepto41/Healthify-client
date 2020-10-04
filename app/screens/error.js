import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import color from "../config/color";
export default function error({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.BackgroundImage}
        source={require("../assets/image/error.png")}
      ></Image>
      <Text style={styles.Text}>500{"\n"}</Text>
      <Text style={styles.Text1}>Sorry, it’s not you, it’s us{"\n"}</Text>
      <Text style={styles.Text2}>
        we’re experiencing an internal server problem,{"\n"}
        please restart.
      </Text>
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
  BackgroundImage: {
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 5, //margin TOP
    height: Dimensions.get("window").height / 3.2, //HEIGHT
    width: Dimensions.get("window").width / 1.2, //WIDTH
  },
  Text: {
    position: "absolute",
    top: Dimensions.get("window").height / 6.5,
    fontFamily: "nunito-SemiBold",
    color: "#2975E1",
    fontSize: 50,
    textAlign: "center",
  },
  Text1: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.8,
    fontFamily: "nunito-SemiBold",
    color: "#2975E1",
    fontSize: 30,
    textAlign: "center",
  },
  Text2: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.5,
    fontFamily: "nunito-regular",
    color: "#000000",
    fontSize: 15,
    textAlign: "center",
  },
});
