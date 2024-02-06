import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}
export interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => useData<Game>('/games');

export default useGames;
