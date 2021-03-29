import { StyleSheet } from "react-native";
import { header_gray, primary_font_family } from "../../../../constants";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: header_gray,
    borderWidth: 0.5,
    borderColor: "white",
    padding: 2.5,
  },
  title: { color: "white", fontFamily: primary_font_family },
});
