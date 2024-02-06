import { Alert, AlertIcon, AlertTitle, Stack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      <Text fontSize="xl">Genres</Text>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <Stack>
        {data.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Stack>
    </>
  );
};

export default GenresList;
