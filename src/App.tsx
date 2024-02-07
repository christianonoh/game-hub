import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector, { Sort } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sort: Sort | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearchSubmit={(st) =>
              setGameQuery({ ...gameQuery, searchText: st })
            }
          />
        </GridItem>
        <GridItem gridArea="main" p={4}>
          <HStack mb={2} spacing={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSort={(sort: Sort) =>
                setGameQuery({ ...gameQuery, sort })
              }
              selectedSort={gameQuery.sort}
            />
          </HStack>
          <GameHeading gameQuery={gameQuery} />
          <GamesGrid gameQuery={gameQuery} />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" p={4}>
            <GenresList
              onSelectGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
