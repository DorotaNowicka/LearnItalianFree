import React from "react";
import { View } from "react-native";
import { ImageBackground, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import colors from "C:/Users/Dorota/Desktop/MakeAppDone/LearnItalianFree/app/config/colors";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../assets/background.jpg")}
    >
      <View style={defaultStyles.logoContainer}>
        <Image
          style={defaultStyles.logo}
          source={require("../images/logo-red.png")}
        ></Image>
        <Text style={styles.tagline}>
          Memorize words from your lessons. {"\n"}
          Forever for free
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate("LogIn")}
        ></AppButton>
        <Text> </Text>
        <AppButton
          title="register"
          onPress={() => navigation.navigate("Register")}
          color="logo"
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    paddingBottom: 70,
    width: "100%"
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  container: {
    flex: 1
  },

  logo: {
    width: 180,
    height: 140,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center"
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
    textAlign: "center",
    color: defaultStyles.colors.light
  }
});

export default WelcomeScreen;
