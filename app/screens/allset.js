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
import { createStackNavigator } from "@react-navigation/stack";

import color from "../config/color";
export default function allset({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.BackgroundImage}
        source={require("../assets/image/allset.png")}
      ></Image>
      <Text style={styles.Text}>All set!</Text>
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
    height: Dimensions.get("window").height / 2.62, //HEIGHT
    width: Dimensions.get("window").width / 1.2, //WIDTH
  },
  Text: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.5,
    fontFamily: "nunito-SemiBold",
    color: "#4B5769",
    fontSize: 30,
    textAlign: "center",
  },
});
