import React, { useState } from "react";
import { View } from "react-native";
import { Presentation } from "./Presentation";
import { FavoriteHero } from "./FavoriteHero";
import { HeroesProvider } from "../../providers";

const OnBoarding: React.FC = () => {
  const [presenting, setPresenting] = useState<boolean>(true);

  return (
    <View style={{ flex: 1 }}>
      {presenting ? (
        <Presentation setPresenting={setPresenting} />
      ) : (
        <HeroesProvider>
          <FavoriteHero />
        </HeroesProvider>
      )}
    </View>
  );
};

export default OnBoarding;
