import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: { width: 150 },
  touchable: {
    marginBottom: 15,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "justify",
  },
  price: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "green",
  },
});
