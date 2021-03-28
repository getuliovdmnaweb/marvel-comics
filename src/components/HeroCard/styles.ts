import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: { height: 150 },
  divider: { borderBottomWidth: 4, borderColor: "#E62E2D" },
  name: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#151515",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  trapezium: {
    width: 150,
    height: 0,
    borderBottomWidth: 15,
    borderBottomColor: "#151515",
    borderLeftWidth: 15,
    borderLeftColor: "transparent",
    borderRightWidth: 0,
    borderRightColor: "transparent",
    borderStyle: "solid",
    transform: [{ rotate: "180deg" }],
  },
});
