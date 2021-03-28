import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Portrait } from "../../constants";
import { getImageUri } from "../../helpers";
import { styles } from "./styles";

interface Props {
  comic: any;
}

const ComicCard: React.FC<Props> = ({ comic }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Comic Detail", { comic });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{ height: 150 }}
            source={{ uri: getImageUri(comic.thumbnail, Portrait.XLARGE) }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} textBreakStrategy="simple" numberOfLines={4}>
        {comic.title}
      </Text>
      <Text style={styles.price}>${comic.prices[0].price}</Text>
    </View>
  );
};

export default ComicCard;
