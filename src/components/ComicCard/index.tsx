import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Portrait } from "../../constants";
import { getImageUri } from "../../helpers";
import { styles } from "./styles";

interface Props {
  comic: Comic;
}

const ComicCard: React.FC<Props> = ({ comic }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Comic Detail", { comic });
  };

  return (
    <View style={styles.cardContainer}>
      <View accessibilityRole="imagebutton" style={styles.touchable}>
        <TouchableOpacity accessibilityRole="button" onPress={onPress}>
          <Image
            accessibilityRole="image"
            style={{ height: 150 }}
            source={{ uri: getImageUri(comic.thumbnail, Portrait.XLARGE) }}
          />
        </TouchableOpacity>
      </View>

      <Text
        accessibilityRole="text"
        style={styles.title}
        textBreakStrategy="simple"
        numberOfLines={4}
      >
        {comic.title}
      </Text>
      <Text accessibilityRole="text" style={styles.price}>
        ${comic.prices[0].price}
      </Text>
    </View>
  );
};

export default ComicCard;
