import { Box, Grid, GridItem, Show, Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

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
        <GridItem gridArea="main" bg="papayawhip" p={4}>
          <Text fontSize="xl">Main</Text>
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="lightgreen" p={4}>
            <Text fontSize="xl">Aside</Text>
          </GridItem>
        </Show>
      </Grid>
    </>
  )
}

export default App
