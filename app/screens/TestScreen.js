import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ImageInput from "../components/ImageInput";
import * as Location from "expo-location";
import useLocation from "../hooks/useLocation";

function TestScreen(props) {
  const location = useLocation();
  let text = "Waiting..";
  if (location) {
    text = JSON.stringify(location);
  }

  return (
    // <Screen style={styles.container}>
    //   <View>
    //     <AppButton
    //       title="Select image"
    //       onPress={selectImage}
    //       style={{ height: "10%" }}
    //     />
    //   </View>
    //   <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    // </Screen>
    <Screen>
      {/* <ImageInput
        imageUri={imageUri}
        onChangeImage={uri => setImageUri(uri)}
      ></ImageInput> */}
      <Text>{text}</Text>
      <AppButton title="Localize" onPress={console.log({ text })} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5
  },
  buttonsContainer: {
    width: "100%",
    height: 200,
    padding: 2,

    justifyContent: "space-around"
  }
});

export default TestScreen;
