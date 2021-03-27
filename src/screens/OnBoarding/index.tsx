import React from "react";
import { Text, View } from "react-native";
import { Presentation } from "./Presentation";
import { FavoriteHero } from "./FavoriteHero";

const OnBoarding: React.FC = () => {
  return (
    <View>
      <Presentation />
      <FavoriteHero />
    </View>
  );
};

export default OnBoarding;
