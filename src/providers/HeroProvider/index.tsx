import React from "react";
import { useHeroes } from "../../hooks";
import { HeroContext } from "../../types";

const initialValues: HeroContext = {
  heroes: [],
  loadingHeroes: false,
  fetchHeroes: (heroInitials?: string) => {},
};

const HeroesContext = React.createContext<HeroContext>(initialValues);

export const HeroesProvider: React.FC = ({ children }) => {
  const { heroes, loadingHeroes, fetchHeroes } = useHeroes();

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        loadingHeroes,
        fetchHeroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};

export default HeroesContext;
