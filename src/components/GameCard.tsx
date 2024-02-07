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
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify={"space-between"} mb={2}>
          <PlatformListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading size="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
