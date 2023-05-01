import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  onPress,
  TextInput
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListeningDetailsScreen from "./app/screens/ListeningDetailsScreen";
import MessagesScreen from "./app/screens/MassagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import QuickCreateScreen from "./app/screens/QuickCreateScreen";
import MainScreen from "./app/screens/MainScreen";
import LogInScreen from "./app/screens/LogInScreen";
import TestScreen from "./app/screens/TestScreen";
import LocalizationTest from "./app/screens/LocalizationTest";
import RegisterScreen from "./app/screens/RegisterScreen";

import AuthNavigator from "./app/navigation/AuthNavigator";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import TabNavigator from "./app/navigation/TabNavigator";
import AccountNavigator from "./app/navigation/AccountNavigation";
import MainNavigator from "./app/navigation/MainNavigation";

export default function App() {
  console.log("App executed");

  // return <ViewImageScreen />;
  //return <WelcomeScreen />;
  //return <MessagesScreen />;
  //return <MyAccountScreen />;
  //return <ViewImageScreen />;
  //return <QuickCreateScreen />;
  // return <MainScreen />;
  // return <LogInScreen />;
  //  return <TestScreen />;
  // return <LocalizationTest />;
  // return <ListeningDetailsScreen />;
  // return <RegisterScreen />;

  // return (
  //   <NavigationContainer>
  //     <MainNavigator />
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cardTest: {
    //backgroundColor: "#f8f4f4",
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: 100
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
