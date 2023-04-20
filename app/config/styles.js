import { Platform } from "react-native";
import colors from "../config/colors";

export default {
  colors,
  text: {
    flex: 1,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  },
  bgimage: {
    flex: 1,
    height: "100%"
  }
};
