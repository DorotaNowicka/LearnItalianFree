import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});

export default Screen;
