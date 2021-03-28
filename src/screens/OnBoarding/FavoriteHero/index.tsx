import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";

import { HeroCard, Input } from "../../../components";
import { styles } from "./styles";
import HeroesContext from "../../../providers/HeroProvider";
import { HeroListWrapper } from "../../../wrappers";

export const FavoriteHero: React.FC = () => {
  const { fetchHeroes, heroes, loadingHeroes } = useContext(HeroesContext);

  return (
    <View testID="favorite-hero-screen" style={styles.container}>
      <View accessibilityRole="summary" style={styles.header}>
        <Text accessibilityRole="text" style={styles.title}>
          MARVEL CHARACTER LIST
        </Text>
        <Text accessibilityRole="text" style={styles.subTitle}>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </Text>
      </View>
      <Input onPress={fetchHeroes} />
      <HeroListWrapper heroes={heroes} loadingHeroes={loadingHeroes}>
        <FlatList
          testID="heroes-list"
          data={heroes}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <HeroCard hero={item} />}
        />
      </HeroListWrapper>
    </View>
  );
};
