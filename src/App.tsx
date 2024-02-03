import { Box, Grid, Show, Text } from "@chakra-ui/react"

function App() {

  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }
      } height="100vh">
        <Box gridArea="nav" bg="tomato" p={4}>
          <Text fontSize="xl" color="white">Header</Text>
        </Box>
        <Box gridArea="main" bg="papayawhip" p={4}>
          <Text fontSize="xl">Main</Text>
        </Box>
        <Show above="lg">
          <Box gridArea="aside" bg="lightgreen" p={4}>
            <Text fontSize="xl">Aside</Text>
          </Box>
        </Show>
      </Grid>
    </>
  )
}

export default App
