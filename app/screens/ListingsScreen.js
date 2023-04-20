import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,

    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg")
  },
  {
    id: 2,

    title: "Super couch",
    price: 100,
    image: require("../assets/couch.jpg")
  },
  {
    id: 3,

    title: "Too many",
    price: 420,
    image: require("../assets/couch.jpg")
  }
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtraxtor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});

export default ListingsScreen;
