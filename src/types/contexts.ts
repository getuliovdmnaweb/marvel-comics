import { Hero } from "./heroes";

export interface HeroContext {
  heroes: Hero[];
  loadingHeroes: boolean;
  fetchHeroes: (heroInitials?: string) => Promise<void> | void;
}
