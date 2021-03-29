import React from "react";
import { Image, Text, View } from "react-native";
import { Page } from "..";
import { CarrouselButton } from "../CarrouselButton";
import { styles } from "./styles";

interface Props {
  currentPage: Page;
  nextPage: () => void;
  prevPage: () => void;
}

const Carrousel: React.FC<Props> = ({ currentPage, nextPage, prevPage }) => {
  return (
    <View style={{ width: "100%" }}>
      <Image
        accessibilityRole="image"
        style={styles.image}
        source={currentPage.imageSource}
      />
      <View style={styles.buttonsContainer}>
        <CarrouselButton
          accessibilityRole="button"
          onPress={prevPage}
          title="Prev"
        />
        <View style={styles.tabsContainer}>
          <View
            style={
              currentPage.id === 1 ? styles.tabSelected : styles.tabUnSelected
            }
          />
          <View
            style={
              currentPage.id === 2 ? styles.tabSelected : styles.tabUnSelected
            }
          />
        </View>
        <CarrouselButton
          accessibilityRole="button"
          onPress={nextPage}
          title="Next"
        />
      </View>
      <View accessibilityRole="summary" style={styles.contentContainer}>
        <Text accessibilityRole="text" style={styles.title}>
          {currentPage.title}
        </Text>
        <Text accessibilityRole="text" style={styles.content}>
          {currentPage.content}
        </Text>
      </View>
    </View>
  );
};

export default Carrousel;
