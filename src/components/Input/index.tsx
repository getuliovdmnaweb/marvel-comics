import React, { useCallback, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

interface Props {
  onPress: (inputValue?: string) => Promise<void> | void;
}

const initialInputValue = "";

const Input: React.FC<Props> = ({ onPress }) => {
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  const clearInput = useCallback(() => {
    setInputValue(initialInputValue);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon style={styles.icon} name="search" size={20} color="#151515" />
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="HERO NAME INITIALS"
          placeholderTextColor="#A1A1A1"
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          await onPress(inputValue);
          clearInput();
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>SEARCH</Text>
        <Icon style={styles.icon} name="paper-plane" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
