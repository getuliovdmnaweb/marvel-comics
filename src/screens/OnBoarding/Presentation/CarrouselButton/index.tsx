import React from "react";
import { AccessibilityRole, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  title: string;
  onPress?: () => void;
  accessibilityRole?: AccessibilityRole;
}

export const CarrouselButton: React.FC<Props> = ({
  title,
  onPress,
  accessibilityRole,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole={accessibilityRole}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
