import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginBottom: 20,
  },
  headerImage: { height: 250, marginBottom: 30 },
  publishSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 30,
  },
  published: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  date: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  priceLabel: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingRight: 5,
  },
  priceValue: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "green",
  },
  description: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    marginBottom: 30,
    textAlign: "justify",
  },
  moreDetailsSection: { padding: 20, backgroundColor: "#202020" },
  moreDetails: {
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  extendedCredits: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F2F2",
    marginBottom: 20,
  },
  detail: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
    color: "#DCDCDC",
    paddingRight: 5,
  },
  detailValue: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#DCDCDC",
  },
});
