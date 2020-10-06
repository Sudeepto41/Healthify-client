import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { FontAwesome, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';

import color from "../config/color";

export default function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      <Image
        style={styles.BackgroundImage}
        source={require("../assets/image/PhoneAuthBG.png")}
      ></Image>

      <View style={styles.view_email}>
        <MaterialIcons name="email" size={22} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Email"
          onChangeText={(String) => setEmail(String)}
          value={email}
        />
      </View>


      <View style={styles.view_pass}>
        <Entypo name="lock" size={22} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(String) => setPassword(String)}
          value={password}
        />
      </View>


      <View style={styles.view_btn}>
        <TouchableOpacity
          title="Login"
          style={styles.btn}
          onPress={() => {

            if (email != '' && password != '') {
              navigation.navigate('hangon')
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
                    setTimeout(() => {
                      navigation.navigate('login')
                      alert("Wrong Credentials! Try Again.");
                    }, 800)


                  }
                  else {
                    alert("Welcome!");
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            }
            else {
              alert('Fields cannot be empty!')
            }

          }
          }
        >
          <Text style={{
            color: "#FFFFFF", fontFamily: "nunito-Bold", fontSize: 20, fontWeight: "700"
          }}>Login</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../assets/image/navigation_dots.png")}
        style={{
          alignSelf: "center",
          position: "absolute",
          top: Dimensions.get("window").height / 1.15,
        }}>
      </Image>

      <TouchableOpacity
        style={styles.goto_register}
        onPress={() => navigation.navigate('register')}
      >
        <Text style={{ fontFamily: "nunito-regular", fontSize: 16 }}>
          Not a member? Register now!  </Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BackgroundImage: {
    position: "absolute",
    top: Dimensions.get("window").height / 9,
  },

  view_email: {
    top: Dimensions.get("window").height / 1.85,
    flexDirection: "row",
    alignSelf: "center",
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
    top: Dimensions.get("window").height / 1.75,
    flexDirection: "row",
    alignSelf: "center",
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
    top: Dimensions.get("window").height / 1.65,
    flexDirection: "row",
    alignSelf: "center",
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
    width: 150,
    padding: 10,
    borderRadius: 25,
  },
  goto_register: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.06,
    alignSelf: "center",
    flexDirection: "row"
  }
})
