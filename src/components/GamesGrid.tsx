import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";
import {
  Grid,
  GridItem,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface Game {
  id: string;
  name: string;
}
interface Response {
  count: number;
  results: Game[];
}
const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Response>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  }, []);
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
