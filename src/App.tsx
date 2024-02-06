import { Grid, GridItem, Show, Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamesGrid from "./components/GamesGrid"
import GenresList from "./components/GenresList"

function App() {

  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }
      }
      templateColumns={{ base: '1fr', lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem gridArea="main"  p={4}>
          <GamesGrid />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" px={4}>
            <GenresList />
          </GridItem>
        </Show>
      </Grid>
    </>
  )
}

export default App
