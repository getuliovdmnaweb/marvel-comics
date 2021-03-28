import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import { Hero } from "../../types";

interface Props {
  heroes: Hero[];
  loadingHeroes: boolean;
  children: React.ReactElement;
}

const HeroListWrapper: React.FC<Props> = ({
  loadingHeroes,
  children,
  heroes,
}) => {
  if (loadingHeroes) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator
          accessibilityRole="spinbutton"
          size={60}
          color="#151515"
        />
      </View>
    );
  }
  if (heroes.length === 0 && !loadingHeroes) {
    return <Text style={styles.title}>Find your favorite Hero!</Text>;
  }

  return children;
};

export default HeroListWrapper;
