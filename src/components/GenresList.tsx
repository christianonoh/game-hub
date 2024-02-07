import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({onSelectGenre, selectedGenre}: Props) => {
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
      <Heading mb={2} fontSize="2xl">Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={2} >
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius="4px"
                objectFit={"cover"}
              />
              <Button whiteSpace='normal' textAlign='left' variant='link' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
