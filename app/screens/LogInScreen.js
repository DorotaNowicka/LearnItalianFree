import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

import defaultStyles from "../config/styles";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

function LogInScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={defaultStyles.logoContainer}>
        <Image
          style={defaultStyles.logo}
          source={require("../images/logo-red.png")}
        />
      </View>

      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon="email"
            autoCapitalize="none"
            autoCorrecr={false}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <AppFormField
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            name="password"
          />

          <View style={{ marginTop: 10 }}>
            <SubmitButton title="log in" />
          </View>
        </AppForm>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    paddingTop: 185
  },
  background: {
    flex: 1,

    alignItems: "center"
  }
});

export default LogInScreen;
