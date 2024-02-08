import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    platform: null,
    genre: null,
  });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem gridArea="main" p={4}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <GamesGrid gameQuery={gameQuery} />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" px={4}>
            <GenresList
              onSelectGenre={(genre: Genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
