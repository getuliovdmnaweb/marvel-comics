import { Alert } from "react-native";
import { useState } from "react";
import { api } from "../api";
import { HEROES_URL } from "../api/urls";
import { Hero } from "../types";

export const useHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loadingHeroes, setLoadingHeroes] = useState<boolean>(false);

  const fetchHeroes = async (heroInitials?: string) => {
    setLoadingHeroes(true);
    const params = {
      nameStartsWith: heroInitials,
    };
    const response = await api.get(HEROES_URL, { params });
    if (response.length === 0) {
      Alert.alert(
        "Empty List",
        "No hero was found with that name. Try another hero!",
        [],
        {
          cancelable: true,
        }
      );
    }
    setHeroes(response);
    setLoadingHeroes(false);
  };

  return {
    heroes,
    loadingHeroes,
    fetchHeroes,
  };
};
