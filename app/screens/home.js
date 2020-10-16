import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import color from "../config/color";
//import homedemo from "./homedemo";
var user = [];

export default function home() {

  const [gresponse, setGresponse] = useState(false);

  const getuserdata = () => {
    fetch(
      "https://asia-south1-healthify-server.cloudfunctions.net/api/getdata",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
        user.push(resp.name);
        user.push(resp.age);
        user.push(resp.gender);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  if (gresponse) {
    return (

      <View>
        <Image
          style={styles.backimg}
          source={require("../assets/image/newhome.png")}
        />
        <Text style={styles.header}>Dashboard</Text>
        <View style={styles.usertext}>
          <Text style={styles.naam}>Shubh Saxena</Text>
          <Text style={styles.baakisab}>20 | Male</Text>
        </View>

        <Image
          style={styles.userpro}
          source={require("../assets/image/PhotoProfile.png")}
        />

        <View style={styles.family}>
          <Image
            style={styles.f1}
            source={require("../assets/image/PhotoProfile.png")}
          ></Image>
          <Image
            style={styles.f1}
            source={require("../assets/image/PhotoProfile.png")}
          ></Image>
          <Image
            style={styles.f1}
            source={require("../assets/image/PhotoProfile.png")}
          ></Image>
        </View>

        <View style={styles.kahandoc}>
          <TouchableOpacity style={styles.doctor}>
            <Text style={styles.doc}>Nearest Doctors</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.placedia}>
          <Image source={require("../assets/image/diagbut.png")} />
          <Text style={styles.textdia}>Diagnose</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emerplace}>
          <Image
            source={require("../assets/image/emer.png")}
            style={styles.emerbtn}
          />
          <Text style={styles.emertext}>Emergency</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getuserdata}
        onFinish={() => setGresponse(true)}
      />
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontFamily: "nunito-Bold",
    top: Dimensions.get("window").height / 15.3,
    marginLeft: 10,
  },
  backimg: {
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 20.3, //margin TOP
    height: 300, //Dimensions.get("window").height / 2.5, //HEIGHT
    width: 390, // Dimensions.get("window").width, //WIDTH
    opacity: 0.8,
  },
  usertext: {
    top: Dimensions.get("window").height / 9.3,
    marginLeft: 25,
    marginTop: 20,
  },
  naam: {
    fontFamily: "nunito-Bold",
    fontSize: 18,
  },
  baakisab: {
    fontFamily: "nunito-Bold",
    fontSize: 18,
  },
  userpro: {
    marginLeft: 250,
    height: 100,
    width: 100,
  },
  family: {
    flexDirection: "row",
    top: 40,
    justifyContent: "center",
  },
  f1: {
    height: 85,
    width: 85,
    marginHorizontal: 5,
  },
  doc: {
    fontFamily: "nunito-Bold",
    color: "#EEEEEE",
    fontSize: 18,
  },
  doctor: {
    width: 250,
    height: 40,
    backgroundColor: "#2974DF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  kahandoc: {
    alignItems: "center",
    marginTop: 70,
  },
  //   btntxt: {
  //     alignItems: "center",
  //     marginBottom: 200,
  //   },
  placedia: {
    alignItems: "center",
    top: 60,
  },
  textdia: {
    fontFamily: "nunito-Bold",
    bottom: 110,
    color: "#eeeeee",
    fontSize: 18,
  },
  emerplace: {
    position: 'absolute',
    right: 0,
    bottom: Dimensions.get("window").height * -0.23,
  },
  emertext: {
    fontFamily: "nunito-Bold",
    bottom: 60,
    marginLeft: 30,
    color: "#EEEEEE",
    fontSize: 17,
  },
});
