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
  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <AppButton
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );

  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white"
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );

  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );

  const Tab = createMaterialTopTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey"
      }}
    >
      <Tab.Screen name="Feed" component={StackNavigator} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
  return (
    <Screen>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5
  },
  buttonsContainer: {
    width: "100%",
    height: 200,
    padding: 2,

    justifyContent: "space-around"
  }
});

export default TestScreen;
