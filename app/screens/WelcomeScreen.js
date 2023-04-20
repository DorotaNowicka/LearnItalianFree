import React from "react";
import { View } from "react-native";
import { ImageBackground, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import colors from "C:/Users/Dorota/Desktop/MakeAppDone/MakeItDone/app/config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../images/logo-red.png")}
        ></Image>
        <Text style={styles.tagline}>sell what you don't need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="login"
          onPress={() => console.log("tapped")}
        ></AppButton>
        <AppButton
          title="register"
          onPress={() => console.log("regitapped")}
          color="secondary"
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
    textTransform: "capitalize"
  }
});

export default WelcomeScreen;
