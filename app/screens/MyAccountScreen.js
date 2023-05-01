import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Icon from "../components/Icon";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My statistics",
    icon: {
      name: "chart-bar",
      backgroundColor: colors.primary
    },
    targetScreen: routes.STATISTICS
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES
  }
];

function MyAccountScreen({ navigation }) {
  const [imageUri, setImageUri] = useState("../assets/mosh.jpg");

  const reqeustPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library ");
  };

  useEffect(() => {
    reqeustPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="tutturuttu@gmail.com"
          image={{ uri: imageUri }}
          onPress={selectImage}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
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
      <ListItem
        title="Log Out"
        onPress={() => console.log("log out")}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      ></ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light,
    flex: 1
  }
});

export default MyAccountScreen;
