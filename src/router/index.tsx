import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import { OnBoarding } from "../screens";
import { styles, screenOptions } from "./styles";
import { HeroComics } from "../screens";

const Stack = createStackNavigator();

const MainRouter: React.FC = () => {
  let logo = require("../../assets/logo.png");
  return (
    <Stack.Navigator screenOptions={{ ...screenOptions }}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <Image style={styles.logo} source={logo} />,
        }}
        name="On Boarding"
        component={OnBoarding}
      />
      <Stack.Screen name="Hero Comics" component={HeroComics} />
    </Stack.Navigator>
  );
};

export default MainRouter;
