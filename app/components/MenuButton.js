import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function MenuButton({
  children,
  onPress,
  style,
  backgroundColor = "primary",
  width = 52
}) {
  const radius = width / 2;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: defaultStyles.colors[backgroundColor] },
        { width: width },
        { height: width },
        { borderRadius: radius },
        { margin: 2 },
        style
      ]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MenuButton;
