import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import color from "../config/color";

export default function Intro({ navigation }) {
    return (

        <View style={styles.container}>
            <Image
                style={styles.BackgroundImage}
                source={require("../assets/image/intro_image.png")}
            ></Image>
            <Text style={styles.Text}>
                Hi there!{"\n"}
                We'll be taking care of ur{"\n"}
                health from now on.
            </Text>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('register')}>
                <Image
                    source={require("../assets/image/nextButton.png")}
                    style={styles.ArrowButton}>
                </Image>
            </TouchableWithoutFeedback >
        </View >
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
        height: Dimensions.get("window").height / 2.5, //HEIGHT
        width: Dimensions.get("window").width, //WIDTH
    },
    Text: {
        position: "absolute",
        top: Dimensions.get("window").height / 1.5,
        fontFamily: "nunito-Black",
        color: "#4B5769",
        fontSize: 20,
        textAlign: "center",
    },

    ArrowButton: {
        position: "absolute",
        top: Dimensions.get("window").height / 1.2,
    },
});
