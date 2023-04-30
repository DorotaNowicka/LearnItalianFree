import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  }
});

const AuthNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen
      name="LogIn"
      component={LogInScreen}
      options={{ cardStyleInterpolator: forFade }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      //  options={{ cardStyleInterpolator: forFade }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
