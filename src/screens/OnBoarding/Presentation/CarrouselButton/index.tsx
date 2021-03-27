import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { header_gray } from "../../../../constants";
import { styles } from "./styles";

interface Props {
  title: string;
  onPress?: () => void;
}

export const CarrouselButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
