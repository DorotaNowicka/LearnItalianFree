import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";

function TestScreen(props) {
  const Link = () => {
    const navigation = useNavigation();

    return (
      <AppButton
        title="Click"
        onPress={() => navigation.navigate("TweetDetails")}
      />
    );
  };

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

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: defaultStyles.colors.primary,
        activeTintColor: defaultStyles.colors.white,
        inactiveBackgroundColor: defaultStyles.colors.medium,
        inactiveTintColor: defaultStyles.colors.black
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
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
