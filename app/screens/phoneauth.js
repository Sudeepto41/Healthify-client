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

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");

export default function PhoneAuth() {

  const [PhoneNo, setPhoneNo] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.BackgroundImage}
        source={require("../assets/image/otp.png")}>
      </ImageBackground>

      <TextInput
        style={styles.input}
        placeholder="Phone No."
        onChangeText={(Number) => setPhoneNo(Number)}
        value={PhoneNo}
      />

      <Button
        title="Press me"
        style={styles.btn}
        onPress={() => alert(PhoneNo)}
      />
    </View>
  );
};

export default UselessTextInput;
