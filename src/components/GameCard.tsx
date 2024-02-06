import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../utils/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" width='300px'>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <HStack justify={"space-between"}>
          <PlatformListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
