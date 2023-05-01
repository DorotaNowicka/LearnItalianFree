import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import ConfigureScreen from "../screens/ConfigureScreen";
import QuickCreateScreen from "../screens/QuickCreateScreen";

import AccountNavigator from "./AccountNavigation";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Configure" component={ConfigureScreen} />
    <Stack.Screen name="QuickCreate" component={QuickCreateScreen} />
    <Stack.Screen name="Account" component={AccountNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
