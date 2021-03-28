import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { getImageUri } from "../../helpers";
import { styles } from "./styles";
import { Portrait } from "../../constants";

interface Props {
  hero: any;
}

const HeroCard: React.FC<Props> = ({ hero }) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: 150 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ListCommics", { hero })}
      >
        <Image
          style={styles.image}
          source={{ uri: getImageUri(hero.thumbnail, Portrait.XLARGE) }}
        />
        <View style={styles.divider} />
        <Text style={styles.name}>{hero.name}</Text>
        <View style={styles.trapezium}></View>
      </TouchableOpacity>
    </View>
  );
};

export default HeroCard;
