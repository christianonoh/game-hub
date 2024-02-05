import {
  Grid,
  GridItem,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  SimpleGrid,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


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
      <SimpleGrid columns={{
        base: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }} gap={6}>
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GamesGrid;
