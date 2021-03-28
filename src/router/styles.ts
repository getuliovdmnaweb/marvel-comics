import { StyleSheet } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { header_gray } from "../constants";

export const styles = StyleSheet.create({
  logo: { height: 50, width: 130 },
});
export const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: header_gray,
  },
  headerTintColor: "#FEFEFE",
  headerTitleAlign: "center",
};
