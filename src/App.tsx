import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSeletedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSeletedPlatform] = useState<Platform | null>(
    null
  );

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
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSeletedPlatform(platform)}
          />
          <GamesGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" px={4}>
            <GenresList
              onSelectGenre={(genre: Genre) => setSeletedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
