import {
  Grid,
  GridItem,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";


const GamesGrid = () => {
  const {games, error } = useGames();
  
  return (
    <div>
      <Text fontSize="xl">Games</Text>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {games.map((game) => (
          <Text key={game.id}>{game.name}</Text>
        ))}
      </Grid>
    </div>
  );
};

export default GamesGrid;
