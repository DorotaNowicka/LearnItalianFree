import React from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import iconSet from "@expo/vector-icons/build/Fontisto";
import Icon from "../components/Icon";
import AppButton from "../components/AppButton";
import { Entypo } from "@expo/vector-icons";
const menuItems = [
  {
    title: "Odmiana w teraźniejszym",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.grammar
    }
  },
  {
    title: "Co robiłeś w weekend?",
    icon: {
      name: "email",
      backgroundColor: colors.lexicon
    }
  },
  {
    title: "Co robiłeś w weekend?",
    icon: {
      name: "email",
      backgroundColor: colors.lexicon
    }
  },
  {
    title: "Co robiłeś w weekend?",
    icon: {
      name: "email",
      backgroundColor: colors.lexicon
    }
  }
];

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="menu" color="white" size={35} />
      </View>
      <View style={styles.createIcon}>
        <MaterialCommunityIcons name="draw-pen" color="white" size={35} />
      </View>
      <View style={styles.quick_createIcon}>
        <MaterialCommunityIcons name="paper-plane" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Image
          style={styles.profil_image}
          source={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.sets_list}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Create set"
          onPress={() => console.log("create")}
        ></AppButton>
        <AppButton
          title="SEE ALL"
          onPress={() => console.log("see_all")}
          color="secondary"
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    width: 52,
    height: 52,

    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 45,
    right: 1
  },
  closeIcon: {
    width: 52,
    height: 52,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 45,
    left: 1,
    borderRadius: 26
  },
  createIcon: {
    width: 52,
    height: 52,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 45,
    right: 120,
    borderRadius: 26
  },
  quick_createIcon: {
    width: 52,
    height: 52,
    backgroundColor: colors.good,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 45,
    right: 60,
    borderRadius: 26
  },
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  profil_image: {
    width: "100%",
    height: "100%",
    borderRadius: 26
  },
  sets_list: {
    marginTop: 120
  },
  buttonsContainer: {
    padding: 5,
    width: "100%"
  }
});

export default ViewImageScreen;
