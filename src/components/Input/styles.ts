import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 20,
    width: "82%",
  },
  inputContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: "#151515",
    borderBottomWidth: 2,
    padding: 5,
    marginRight: 5,
  },
  icon: { marginRight: 10 },
  input: { fontSize: 15 },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#151515",
  },
  buttonTitle: {
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    marginRight: 5,
  },
});
