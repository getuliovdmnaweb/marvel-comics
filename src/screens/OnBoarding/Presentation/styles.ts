import { StyleSheet } from "react-native";
import { header_gray } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: header_gray,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  finishPresentation: {
    borderColor: "white",
    borderWidth: 0.5,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
