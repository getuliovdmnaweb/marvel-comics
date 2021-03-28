import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";

import { HeroCard, Input } from "../../../components";
import { styles } from "./styles";
import HeroesContext from "../../../providers/HeroProvider";
import { HeroListWrapper } from "../../../wrappers";

export const FavoriteHero: React.FC = () => {
  const { fetchHeroes, heroes, loadingHeroes } = useContext(HeroesContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MARVEL CHARACTER LIST</Text>
        <Text style={styles.subTitle}>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </Text>
      </View>
      <Input onPress={fetchHeroes} />
      <HeroListWrapper heroes={heroes} loadingHeroes={loadingHeroes}>
        <FlatList
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
