import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Button,
  StatusBar
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
          {/* <MenuButton
            icon="menu"
            onPress={() => navigation.navigate(routes.MAIN)}
            backgroundColor="menu"
          >
            <MaterialCommunityIcons
              name="menu"
              size={35}
              color={defaultStyles.colors.white}
            />
          </MenuButton> */}
          <MenuButton
            style={{ alignSelf: "flex-start" }}
            //style={{ position: "absolute", right: 2, top: 40 }}
            onPress={() => navigation.navigate(routes.ACCOUNT)}
          >
            <Image
              style={styles.profil_image}
              source={require("../assets/mosh.jpg")}
            />
          </MenuButton>
          <View style={styles.createButtons}>
            <MenuButton
              onPress={() => navigation.navigate(routes.CONFIGURE)}
              backgroundColor="secondary"
            >
              <MaterialCommunityIcons
                name="draw-pen"
                size={35}
                color={defaultStyles.colors.white}
              />
            </MenuButton>

            <MenuButton
              onPress={() => navigation.navigate(routes.QUICK_CREATE)}
              backgroundColor="good"
            >
              <Entypo
                name="paper-plane"
                size={35}
                color={defaultStyles.colors.white}
              />
            </MenuButton>
          </View>
        </View>

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
          {/* <AppButton
            title="SEE ALL"
            onPress={() => console.log("see_all")}
            color="secondary"
          ></AppButton> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  createButtons: {
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
    paddingVertical: 10
  },
  buttonsContainer: {
    width: "100%",

    padding: 2,

    justifyContent: "space-around"
  }
});

export default MainScreen;
