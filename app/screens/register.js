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

import { FontAwesome, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';

import color from "../config/color";

export default function Register({ navigation }) {
  var radio_props = [
    { label: 'Man', value: 'Male' },
    { label: 'Woman', value: 'Female' }];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");


  const [pass_style, setPass_style] = useState(0);
  const [cnfpass_style, setCnfpass_style] = useState(0);

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.header}>
        Set up your profile
      </Text>

      <Image
        style={styles.image}
        source={require("../assets/image/PhotoProfile.png")}
      ></Image>

      <View style={styles.view_radio}>
        <Text style={styles.radio_header}>I'm a:</Text>
        <RadioForm
          radio_props={radio_props}
          labelStyle={{ fontFamily: "nunito-SemiBold", fontSize: 14, marginLeft: 5 }}
          initial={-1}
          formHorizontal={true}
          labelHorizontal={false}
          buttonSize={13}
          buttonOuterSize={25}
          buttonStyle={{ marginLeft: 5 }}
          buttonColor={'#b0b0b0'}
          selectedButtonColor={'#2974DF'}
          onPress={(value) => setGender(value)}
        />
      </View>

      <View
        style={styles.view_name}
      >
        <FontAwesome name="user" size={22} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Name"
          onChangeText={(String) => setName(String)}
          value={name}
        />
      </View>

      <View
        style={styles.view_email}
      >
        <MaterialIcons name="email" size={22} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Email"
          onChangeText={(String) => setEmail(String)}
          value={email}
        />
      </View>

      <View
        style={(pass_style) < 2 ? (pass_style == 0 ? styles.view_pass0 : styles.view_pass1) : styles.view_pass2}
      >
        <Entypo name="lock" size={22} color="#C2C2C2" />
        <TextInput

          style={styles.input}

          keyboardType="default"
          style={styles.input}

          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(String) => {
            setPassword(String)
            const regEx = /^[a-zA-Z]\w{5,14}$/;            //1 letter, 1 number, 8char min
            if (password.match(regEx)) {
              setPass_style(2)
            }
            else setPass_style(1)
          }}
          value={password}
        />
      </View>

      <View
        style={(cnfpass_style) < 2 ? (cnfpass_style == 0 ? styles.view_cnf_pass0 : styles.view_cnf_pass1) : styles.view_cnf_pass2}
      >
        <Entypo name="lock" size={22} color="#C2C2C2" />
        <TextInput
          keyboardType="default"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
          onChangeText={(String) => {
            setCnfpassword(String)
          }}
          value={cnfpassword}
        />
      </View>

      <View style={styles.view_age}>
        <Text style={styles.age_text}>
          I'am:
        </Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input_age}
          placeholder="Age"
          onChangeText={(String) => setAge(String)}
          value={age}
        />
        <Text style={styles.age_text}>
          years old.
        </Text>
      </View>


      <View
        style={styles.view_btn}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (cnfpassword === password) {
              setCnfpass_style(2)
            } else {
              setCnfpass_style(1)
            }

            if (name == '') {
              alert('Name cannot be empty!')
            } else if (email == '') {
              alert('Email cannot be empty!')
            } else if (!email.match(regExEmail)) {
              alert('Invalid Email. Please check!')
            } else if (password == '') {
              alert('Password cannot be empty!')
            } else if (pass_style == 1) {
              alert('password should contain minimum 7 charcheter, 1 letter and numbers')
            } else if (password != cnfpassword) {
              alert('Password and Confirm Password should be same!')
            } else if (age == '') {
              alert('Age cannot be empty!')
            } else if (gender == '') {
              alert('Please tell us your gender!')
            } else {
              navigation.navigate('hangon')
              fetch('https://asia-south1-healthify-server.cloudfunctions.net/api/signup',
                {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                    confirmPassword: cnfpassword,
                    name: name,
                    age: age,
                    gender: gender
                  })
                })
                .then((response) => response.json())
                .then((resp) => {
                  console.log(password)
                  console.log(cnfpassword)
                  console.log(resp)
                  if (resp.token) {
                    alert("Welcome!");
                  }
                  else if (resp.email) {
                    alert("Email already in use");
                  }
                  else {
                    alert("mistake ho gaya sir")
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            }
          }}
        >
          <Text
            style={styles.btn_txt}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.goto_login}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={{ fontFamily: "nunito-regular", fontSize: 16 }}>
          Already have an account Log in now!  </Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    alignSelf: "center",
    fontFamily: "nunito-Bold",
    fontSize: 22,
    marginTop: 50,
  },
  image: {
    marginLeft: 20,
    position: "absolute",
    resizeMode: "contain",
    top: Dimensions.get("window").height / 20, //margin TOP
    height: Dimensions.get("window").height / 3, //HEIGHT
    width: Dimensions.get("window").width / 3, //WIDTH
  },

  view_radio: {
    position: "absolute",
    top: Dimensions.get("window").height / 6,
    left: Dimensions.get("window").width / 2,
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "flex-start",
  },

  radio_header: {
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "nunito-SemiBold",
    fontSize: 18,
  },

  view_name: {
    top: Dimensions.get("window").height / 4.5,
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

  view_email: {
    top: Dimensions.get("window").height / 4,
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
  view_pass0: {
    top: Dimensions.get("window").height / 3.5,
    flexDirection: "row",
    alignSelf: "center",
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
  view_pass1: {
    top: Dimensions.get("window").height / 3.5,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#d62700",
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1
  },
  view_pass2: {
    top: Dimensions.get("window").height / 3.5,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#00d620",
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1
  },

  view_cnf_pass0: {
    top: Dimensions.get("window").height / 3.15,
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
  view_cnf_pass1: {
    top: Dimensions.get("window").height / 3.15,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#d62700",
    borderBottomWidth: 2.5,
    borderRightWidth: 1,
    borderLeftWidth: 1
  },
  view_cnf_pass2: {
    top: Dimensions.get("window").height / 3.15,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F8F2F2",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#00d620",
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

  view_age: {
    top: Dimensions.get("window").height / 2.85,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,


  },

  input_age: {
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingVertical: 5,
    width: 50,
    backgroundColor: "#F8F2F2",
    borderRadius: 15,
    borderColor: "#C2C2C2",
    borderBottomWidth: 2.5,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    fontFamily: "nunito-SemiBold",
    fontSize: 18,
  },

  age_text: {
    fontFamily: "nunito-SemiBold",
    fontSize: 18,
  },

  view_btn: {
    top: Dimensions.get("window").height / 2.5,
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
  },

  goto_login: {
    position: "absolute",
    top: Dimensions.get("window").height / 1.06,
    alignSelf: "center",
    flexDirection: "row"
  }

});


