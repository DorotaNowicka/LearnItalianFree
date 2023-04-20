import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Platform,
  View,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList
} from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./Icon";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  placeholder,
  icon,
  items,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={40}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {placeholder && (
            <AppText style={styles.text}>
              {selectedItem ? selectedItem.label : placeholder}
            </AppText>
          )}
          <Icon
            name={"chevron-down"}
            size={40}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        ></FlatList>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex: 1
  },
  container: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "100%"
  }
});

export default AppPicker;
