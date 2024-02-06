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
      }>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem gridArea="main"  p={4}>
          <Text fontSize="xl">Main</Text>
          <GamesGrid />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" border='2px' p={4}>
            <GenresList />
          </GridItem>
        </Show>
      </Grid>
    </>
  )
}

export default App
