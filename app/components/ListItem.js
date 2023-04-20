import "react-native-gesture-handler";
import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import {
  Swipeable,
  GestureHandlerRootView
} from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "./Icon";
import defaultStyles from "../config/styles";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  itIsSet
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subtitle}>{subTitle}</AppText>
              )}
              {/* {isItSet && <Icon name={"chat"} backgroundColor={"yellow"} />} */}
            </View>
            {itIsSet && (
              <View style={{}}>
                <Icon
                  name={"chat"}
                  backgroundColor={defaultStyles.colors.menu}
                />
              </View>
            )}
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
  learnIcon: {
    backgroundColor: defaultStyles.colors.menu,
    marginRight: 10
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
    justifyContent: "center",
    flex: 1
  }
});

export default ListItem;
