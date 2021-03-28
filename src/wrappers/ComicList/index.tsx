import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";

export interface Props {
  comics: Comic[];
  children: React.ReactElement;
  loadingComics: boolean;
}

const ComicsListWrapper: React.FC<Props> = ({
  children,
  comics,
  loadingComics,
}) => {
  if (loadingComics) {
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
  if (!loadingComics && comics.length === 0) {
    return (
      <View style={styles.container}>
        <Text accessibilityRole="text" style={styles.emptyListMessage}>
          There are no comics for this hero!
        </Text>
      </View>
    );
  }
  return children;
};

export default ComicsListWrapper;
