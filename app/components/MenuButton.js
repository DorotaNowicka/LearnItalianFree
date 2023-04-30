import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function MenuButton({
  onPress,
  icon,
  title = "",
  backgroundColor = "primary",
  width = 52,
  materialCommunity = true,
  entypo = false,
  size = 35,
  color = "white"
}) {
  const radius = width / 2;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: defaultStyles.colors[backgroundColor] },
        { width: width },
        { height: width },
        { borderRadius: radius }
      ]}
      onPress={onPress}
    >
      {materialCommunity && (
        <MaterialCommunityIcons
          name={icon}
          size={size}
          color={defaultStyles.colors[color]}
        />
      )}
      {entypo && (
        <Entypo name={icon} size={size} color={defaultStyles.colors[color]} />
      )}
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
