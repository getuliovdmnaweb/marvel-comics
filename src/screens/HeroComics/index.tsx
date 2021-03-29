import React from "react";
import { FlatList, ScrollView, Image, Text, View } from "react-native";
import { ComicCard } from "../../components";
import { Landscape } from "../../constants";
import { getImageUri } from "../../helpers";
import { useComics } from "../../hooks";
import { ComicsListWrapper } from "../../wrappers";
import { styles } from "./styles";

interface Props {
  route: any;
}

const HeroComics: React.FC<Props> = ({ route }) => {
  const { hero } = route.params;

  const { comics, loadingComics } = useComics(hero);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          accessibilityRole="image"
          style={styles.headerImage}
          source={{ uri: getImageUri(hero.thumbnail, Landscape.XLARGE) }}
        />
        <View accessibilityRole="summary" style={styles.headerSummary}>
          <Text accessibilityRole="text" style={styles.headerTitle}>
            {hero.name}
          </Text>
          <Text accessibilityRole="text" style={styles.headerDescription}>
            {hero.description}
          </Text>
        </View>
        <View style={styles.triangleCorner} />
      </View>
      <ComicsListWrapper comics={comics} loadingComics={loadingComics}>
        <FlatList
          testID="comic-list"
          data={comics}
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ComicCard comic={item} />}
        />
      </ComicsListWrapper>
    </ScrollView>
  );
};
export default HeroComics;
