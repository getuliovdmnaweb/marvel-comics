import React, { useState } from "react";
import { View } from "react-native";
import { Presentation } from "./Presentation";
import { FavoriteHero } from "./FavoriteHero";

const OnBoarding: React.FC = () => {
  const [presenting, setPresenting] = useState<boolean>(true);

  return (
    <View style={{ flex: 1 }}>
      {presenting ? (
        <Presentation setPresenting={setPresenting} />
      ) : (
        <FavoriteHero />
      )}
    </View>
  );
};

export default OnBoarding;
