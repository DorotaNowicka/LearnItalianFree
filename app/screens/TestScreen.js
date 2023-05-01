import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import AuthNavigator from "../navigation/AuthNavigator";

function TestScreen(props) {
  return (
    <Screen>
      <View style={[styles.container]}>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.square, { backgroundColor: "blue" }]} />
          <View style={[styles.square, { backgroundColor: "red" }]} />
        </View>
        <View style={[styles.square, { backgroundColor: "green" }]} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "black",
    width: "100%",
    height: 450,
    justifyContent: "space-between"
  },
  square: {
    width: 70,
    height: 70,
    margin: 3,

    justifyContent: "space-around"
  }
});

export default TestScreen;
