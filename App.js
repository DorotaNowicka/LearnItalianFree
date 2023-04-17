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

export default function App() {
  console.log("App executed");

  // return <ViewImageScreen />;
  //return <WelcomeScreen />;
  //return <MessagesScreen />;
  // return <MyAccountScreen />;
  //return <ViewImageScreen />;
  //return <QuickCreateScreen />;
  return <MainScreen />;
  // return <LogInScreen />;
  //return <TestScreen />;
  // return <LocalizationTest />;
  // return <ListeningDetailsScreen />;
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
