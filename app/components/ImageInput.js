import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  const reqeustPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library ");
  };

  useEffect(() => {
    reqeustPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" }
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Image,
        quality: 0.5
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon name="camera" size={50} backgroundColor={colors.medium} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignItems: "center",
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: "center",
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%"
  }
});

export default ImageInput;
