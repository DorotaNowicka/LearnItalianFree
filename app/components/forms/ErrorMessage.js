import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.primary
  }
});

export default ErrorMessage;
