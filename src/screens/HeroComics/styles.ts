import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: { width: "100%" },
  headerImage: { height: 200 },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "white",
    marginBottom: 15,
  },
  headerDescription: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "Roboto",
    color: "white",
    textAlign: "justify",
  },
  headerSummary: { backgroundColor: "#202020", padding: 15 },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 410,
    borderTopWidth: 25,
    borderRightColor: "transparent",
    borderTopColor: "#202020",
  },
  itemSeparator: { height: 100, width: 20, backgroundColor: "transparent" },
  contentContainer: {
    marginTop: 40,
    paddingHorizontal: 15,
  },
});
