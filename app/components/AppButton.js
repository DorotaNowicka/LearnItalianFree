import React from "react";

import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "primary",
  width = "100%",
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        { width: width }
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fc5c65",
    borderRadius: 25,
    justifyContent: "center",
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginVertical: 0
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

export default AppButton;
