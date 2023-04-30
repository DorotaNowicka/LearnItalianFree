import "react-native-gesture-handler";
import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Swipeable from "react-native-gesture-handler/Swipeable";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("C:/Users/Dorota/Desktop/MakeAppDone/LearnItalianFree/assets/mosh.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("C:/Users/Dorota/Desktop/MakeAppDone/LearnItalianFree/assets/mosh.jpg")
  }
];

function MassagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages

    setMessages(messages.filter(m => m.id !== message.id));
    // Call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("C:/Users/Dorota/Desktop/MakeAppDone/LearnItalianFree/assets/mosh.jpg")
            }
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MassagesScreen;
