import "react-native-gesture-handler";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from "react-native";
import AppText from "./AppText";
import {
  Swipeable,
  GestureHandlerRootView
} from "react-native-gesture-handler";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  makeItDef = false,
  makeItTr = false,
  ...otherProps
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View
            style={styles.container}
            justifyContent={makeItTr ? "flex-end" : "flex-start"}
          >
            {makeItDef && IconComponent}
            {makeItDef && image && (
              <Image style={styles.image} source={image} />
            )}
            <View style={styles.detailContainer}>
              {
                <TextInput
                  style={defaultStyles.text}
                  {...otherProps}
                  placeholder="Type here..."
                />
              }
            </View>

            {makeItTr && IconComponent}
            {makeItTr && image && <Image style={styles.image} source={image} />}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  title: {
    fontWeight: "bold"
  },
  subtitle: {
    color: colors.medium
  },
  detailContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center"
  }
});

export default ListItem;
