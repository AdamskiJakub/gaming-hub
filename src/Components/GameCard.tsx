import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const backgroundUrl = game.background_image || noImage;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={backgroundUrl} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
