import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsScreen from "../screens/ListingsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import QuickCreateScreen from "../screens/QuickCreateScreen";
import AppButton from "../components/AppButton";
import NewListingButton from "./NewListingButton";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsScreen} />
    <Tab.Screen
      name="Configure"
      component={QuickCreateScreen}
      options={{
        tabBarShowLabel: true,

        tabBarShowIcon: false,
        tabBarButton: () => <NewListingButton />,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        )
      }}
    />
    <Tab.Screen name="Account" component={MyAccountScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
