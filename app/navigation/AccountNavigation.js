import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MassagesScreen from "../screens/MassagesScreen";
import StatisticsScreen from "../screens/StatisticsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={MyAccountScreen}
      //options={{ headerShown: false }}
    />
    <Stack.Screen name="Statistics" component={StatisticsScreen} />

    <Stack.Screen name="Messages" component={MassagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
