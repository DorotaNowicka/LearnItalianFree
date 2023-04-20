import { React } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import InputCard from "../components/InputCard";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";

function QuickCreateScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={defaultStyles.bgimage}
      >
        <View style={styles.menuContainer}>
          <View style={styles.closeIcon}>
            <MaterialCommunityIcons
              name="arrow-left-top-bold"
              size={35}
              color="white"
            />
          </View>

          <View style={styles.first_languageIcon}>
            <MaterialCommunityIcons name="flag" color="white" size={35} />
          </View>
          <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="check-all" size={35} color="white" />
          </View>

          <View style={styles.defContainer}>
            <InputCard
              makeItDef={true}
              image={require("../assets/italian_flag.jpg")}
              title="Mosh Whatever"
            />
          </View>
          <View style={styles.trContainer}>
            <InputCard
              makeItTr={true}
              image={require("../assets/poland_flag.png")}
              title="Mosh Whatever"
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            color="good"
            title="+ ADD"
            onPress={() => console.log("next")}
            width="40%"
          ></AppButton>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  prize: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  container: {
    width: "100%",
    height: "100%"
  },
  buttonsContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 5
  },
  addButton: {
    width: "40%"
  },
  defContainer: {
    marginTop: 70,
    margin: 5,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13
  },
  trContainer: {
    marginTop: 10,
    margin: 5,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 300
  },
  menuContainer: {
    marginTop: 45
  },

  deleteIcon: {
    width: 52,
    height: 52,
    backgroundColor: defaultStyles.colors.good,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 1,
    borderRadius: 26
  },
  closeIcon: {
    width: 52,
    height: 52,
    backgroundColor: defaultStyles.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 1,
    borderRadius: 26
  },

  first_languageIcon: {
    width: 52,
    height: 52,
    backgroundColor: defaultStyles.colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 60,
    borderRadius: 26
  }
});

export default QuickCreateScreen;
