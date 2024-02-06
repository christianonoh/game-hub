import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) {
    return (
      // <GenreCardSkeleton />
      <Stack align="center">
        <Spinner />
      </Stack>
    );
  }
  return (
    <>
      <Text fontSize="xl">Genres</Text>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius="4px"
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
