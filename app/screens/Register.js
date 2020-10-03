import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,

  Image,
  Dimensions,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from '@expo/vector-icons';

import color from "../config/color";

export default function Register() {
  const [PhoneNo, setPhoneNo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Set up your profile
      </Text>

      <Image
        style={styles.image}
        source={require("../assets/image/PhotoProfile.png")}
      ></Image>

      <View style={styles.view_email}>
        <FontAwesome name="user" size={24} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Email"
        />
      </View>
      <View style={styles.view_pass}>
        <FontAwesome name="user" size={24} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Password"
        />
      </View>
      <View style={styles.view_cnf_pass}>
        <FontAwesome name="user" size={24} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Confirm Password"
        />
      </View>

      <View style={styles.view_btn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            alert("pressed!")
          }}
        >
          <Text
            style={styles.btn_txt}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  header: {
    fontFamily: "nunito-Bold",
    fontSize: 22,
    marginTop: 60,

  },
  image: {
    alignItems: "center",
    position: "absolute",
    resizeMode: "contain",
    top: Dimensions.get("window").height / 15, //margin TOP
    height: Dimensions.get("window").height / 3, //HEIGHT
    width: Dimensions.get("window").width / 3, //WIDTH
  },

  view_email: {
    top: Dimensions.get("window").height / 4.25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#C2C2C2",
    borderBottomWidth: 2.5,
    borderRightWidth: 1,
    borderLeftWidth: 1

  },
  view_pass: {
    top: Dimensions.get("window").height / 3.7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#C2C2C2",
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1

  },
  view_cnf_pass: {
    top: Dimensions.get("window").height / 3.25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#C2C2C2",
    borderBottomWidth: 2.5,
    borderRightWidth: 1,
    borderLeftWidth: 1

  },
  input: {
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 300,
    borderRadius: 24,
    fontFamily: "nunito-SemiBold",
    fontSize: 18,
  },
  view_btn: {
    top: Dimensions.get("window").height / 2.5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2974DF",
    height: 50,
    width: 300,
    padding: 10,
    borderRadius: 25,
    width: 170,
  },
  btn_txt: {
    color: "#FFFFFF",
    fontFamily: "nunito-Bold",
    fontSize: 20,
    fontWeight: "700",
  }
});