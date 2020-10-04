import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
} from "react-native";

import color from "../config/color";
import login from "./Login";

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
            <Image
                source={require("../assets/image/navigation_dots.png")}
                style={{
                    alignSelf: "center",
                    position: "absolute",
                    top: Dimensions.get("window").height / 1.22,
                }}>
            </Image>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('login')}>
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
        top: Dimensions.get("window").height / 1.15,
        left: Dimensions.get("window").width / 1.4,
    },
});
