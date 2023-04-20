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
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={defaultStyles.bgimage}
      >
        <Screen style={styles.secContainer}>
          <Image
            style={styles.logo}
            source={require("../images/logo-red.png")}
          />

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
        </Screen>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secContainer: {
    padding: 5
  },
  logo: {
    height: 149,
    width: 187,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0
  }
});

export default LogInScreen;
