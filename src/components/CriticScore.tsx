import { Badge, Box, Text } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const color =
    metacritic >= 75
      ? "green"
      : metacritic >= 45
      ? "yellow"
      : "red";

  return (
    <Badge fontSize='14px' px={2} borderRadius='4px' colorScheme={color}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
