import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { on_boarding_hero, on_boarding_comics } from "../../../constants";
import Carrousel from "./Carrousel";
import { styles } from "./styles";

const initialPages: Page[] = [
  {
    id: 1,
    imageSource: on_boarding_hero,
    content:
      "Sarch your favorite heroes and find all of the comics they are in.",
    title: "Marvel Heroes",
  },
  {
    id: 2,
    imageSource: on_boarding_comics,
    content:
      "Find the comics from your favorite hero, and enjoy all of his stories.",
    title: "Marvel Comics",
  },
];
interface Props {
  setPresenting: (presenting: boolean) => void;
}

export interface Page {
  imageSource: any;
  id: number;
  content: string;
  title: string;
}

export const Presentation: React.FC<Props> = ({ setPresenting }) => {
  const [currentPage, setCurrentPage] = useState<Page>(initialPages[0]);

  const prevPage = () => {
    setCurrentPage(initialPages[0]);
  };

  const nextPage = () => {
    setCurrentPage(initialPages[1]);
  };

  return (
    <View testID="presentation-screen" style={styles.container}>
      <Carrousel
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />

      <TouchableOpacity
        style={styles.finishPresentation}
        onPress={() => setPresenting(false)}
      >
        <Text style={{ color: "white" }}>Finish Presentation</Text>
      </TouchableOpacity>
    </View>
  );
};
