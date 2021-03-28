import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainRouter from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <MainRouter />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
