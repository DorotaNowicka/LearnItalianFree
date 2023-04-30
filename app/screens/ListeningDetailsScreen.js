import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListeningDetailsScreen(props) {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="arrow-left-top-bold"
          size={24}
          color="white"
        />
      </View>

      <View style={styles.first_languageIcon}>
        <MaterialCommunityIcons name="flag" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Image
          style={styles.profil_image}
          source={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.deatailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.prize}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("C:/Users/Dorota/Desktop/MakeAppDone/LearnItalianFree/assets/mosh.jpg")}
            title="Mosh Whatever"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prize: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  deatailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 300
  },
  userContainer: {
    marginVertical: 40
  },
  menuContainer: {
    marginVertical: 45
  },
  deleteIcon: {
    width: 52,
    height: 52,

    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 1
  },
  closeIcon: {
    width: 52,
    height: 52,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 1,
    borderRadius: 26
  },
  profil_image: {
    width: "100%",
    height: "100%",
    borderRadius: 26
  },
  first_languageIcon: {
    width: 52,
    height: 52,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 60,
    borderRadius: 26
  }
});

export default ListeningDetailsScreen;
