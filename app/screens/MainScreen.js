import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Button
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import iconSet from "@expo/vector-icons/build/Fontisto";
import Icon from "../components/Icon";
import AppButton from "../components/AppButton";
import { Entypo } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import MenuButton from "../components/MenuButton";
import routes from "../navigation/routes";

const InitialMenuItems = [
  {
    title: "Odmiana w teraźniejszym",
    icon: {
      name: "draw-pen",
      backgroundColor: colors.grammar
    }
  },
  {
    title: "Co robiłeś w weekend?",
    icon: {
      name: "chat",
      backgroundColor: colors.lexicon
    }
  },
  {
    title: "Co robiłeś w weekend?2",
    icon: {
      name: "chat",
      backgroundColor: colors.lexicon
    }
  },
  {
    title: "Co robiłeś w weekend?3",
    icon: {
      name: "chat",
      backgroundColor: colors.lexicon
    }
  }
];

function MainScreen({ navigation }) {
  const [menuItems, setOptions] = useState(InitialMenuItems);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = option => {
    const newOptions = menuItems.filter(m => m.title !== option.title);
    setOptions(newOptions);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={defaultStyles.bgimage}
      >
        <View style={styles.menuContainer}>
          <MenuButton
            icon="menu"
            onPress={() => navigation.navigate(routes.MAIN)}
            backgroundColor="menu"
          ></MenuButton>
          <MenuButton
            icon="draw-pen"
            onPress={() => navigation.navigate(routes.CONFIGURE)}
            backgroundColor="secondary"
          ></MenuButton>
          <MenuButton
            icon="paper-plane"
            materialCommunity={false}
            entypo={true}
            onPress={() => navigation.navigate(routes.QUICK_CREATE)}
            backgroundColor="good"
          ></MenuButton>
        </View>
        {/* <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="menu" color="white" size={35} />
        </View>
        <View style={styles.createIcon}>
          <MaterialCommunityIcons name="draw-pen" color="white" size={35} />
        </View>
        <View style={styles.quick_createIcon}>
          <Entypo name="paper-plane" size={35} color="white" />
        </View>

        <View style={styles.deleteIcon}>
          <Image
            style={styles.profil_image}
            source={require("../assets/mosh.jpg")}
          />
        </View> */}

        <View style={styles.sets_list}>
          <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => console.log(item)}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                itIsSet={"true"}
              />
            )}
            refreshing={refreshing}
            onRefresh={() => {
              setOptions(InitialMenuItems);
            }}
          />

          <View style={{ alignItems: "center" }}>
            <Text
              style={StyleSheet.compose(defaultStyles.text, {
                color: defaultStyles.colors.medium
              })}
            >
              Create limitless!
            </Text>
          </View>
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    paddingTop: 40,
    flexDirection: "row"
  },

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
    backgroundColor: colors.menu,
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
    marginTop: 100,
    paddingVertical: 10
  },
  buttonsContainer: {
    width: "100%",
    height: 200,
    padding: 2,

    justifyContent: "space-around"
  }
});

export default MainScreen;
