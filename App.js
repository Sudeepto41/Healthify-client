import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View, _View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Fonts from "expo-font";
import { AppLoading } from "expo";

import Intro from "./app/screens/intro";
import login from "./app/screens/Login";
import register from "./app/screens/Register";
import hangon from "./app/screens/hangon";
import allset from "./app/screens/allset";
import home from "./app/screens/home";
//import diagnosis from "./app/screens/diagnosis";

const getFonts = () => {
  return Fonts.loadAsync({
    "nunito-ExtraLight": require("./app/assets/fonts/NunitoSans-ExtraLight.ttf"),
    "nunito-Light": require("./app/assets/fonts/NunitoSans-Light.ttf"),
    "nunito-regular": require("./app/assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-SemiBold": require("./app/assets/fonts/NunitoSans-SemiBold.ttf"),
    "nunito-Bold": require("./app/assets/fonts/NunitoSans-Bold.ttf"),
    "nunito-ExtraBold": require("./app/assets/fonts/NunitoSans-ExtraBold.ttf"),
    "nunito-Black": require("./app/assets/fonts/NunitoSans-Black.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Intro"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="intro" component={Intro} />
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="register" component={register} />
          <Stack.Screen name="hangon" component={hangon} />
          <Stack.Screen name="allset" component={allset} />
          <Stack.Screen name="home" component={home} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
