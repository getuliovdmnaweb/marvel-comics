import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: "#151515",
    marginBottom: 20,
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    color: "white",
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  columnWrapperStyle: {
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});
