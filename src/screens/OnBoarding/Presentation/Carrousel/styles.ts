import { StyleSheet } from "react-native";
import { logo_red, primary_font_family } from "../../../../constants";

export const styles = StyleSheet.create({
  image: { marginBottom: 15, width: "100%", height: 220 },
  buttonsContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 30,
  },
  tabsContainer: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabSelected: {
    height: 3,
    width: 18,
    backgroundColor: logo_red,
  },
  tabUnSelected: {
    height: 3,
    width: 18,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontFamily: primary_font_family,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  contentContainer: { width: "80%", alignSelf: "center" },
  content: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "white",
    marginBottom: 15,
    textAlign: "justify",
  },
});
