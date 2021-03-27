import { StyleSheet } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

export const styles = StyleSheet.create({
  logo: { height: 50, width: 130 },
});
export const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#202020",
  },
  headerTintColor: "#FEFEFE",
  headerTitleAlign: "center",
};
