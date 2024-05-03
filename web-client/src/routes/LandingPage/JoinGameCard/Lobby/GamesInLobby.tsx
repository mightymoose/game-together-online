import { Button } from "@/components/ui/button";
import { GameInLobby, useGameLobby } from "./use-game-lobby";
import { SpadeIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const GameLobbyLoading = () => {
  const games = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="flex flex-col grow gap-2">
      {games.map((game) => (
        <Skeleton key={game} className="h-[40px] rounded-md" />
      ))}
    </div>
  );
};

interface GameListProps {
  games: GameInLobby[];
  onJoin: (gameId: string) => void;
}

const NoGames = () => (
  <div className="py-8">
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">No Games Available</h2>
      <p className="text-gray-500 dark:text-gray-400">
        It looks like there are no games that need players right now!
      </p>
    </div>
  </div>
);

const GameList = ({ games, onJoin }: GameListProps) =>
  games.length === 0 ? (
    <NoGames />
  ) : (
    <div className="flex flex-col grow gap-2">
      {games.map((game) => {
        const iconForGameType: { [gameTypeSlug: string]: JSX.Element } = {
          spades: <SpadeIcon />,
        };
        const icon = iconForGameType[game.game_type.slug];

        return (
          <Button
            variant="secondary"
            key={game.id}
            onClick={() => onJoin(game.id)}
            className="flex gap-2"
          >
            {icon} {game.game_type.name}
          </Button>
        );
      })}
    </div>
  );

interface GameInLobbyProps {
  onJoin: (gameId: string) => void;
}

export const GamesInLobby = ({ onJoin }: GameInLobbyProps) => {
  const gamesInLobbyRequest = useGameLobby();

  return gamesInLobbyRequest.isSuccess ? (
    <GameList games={gamesInLobbyRequest.data.data.data} onJoin={onJoin} />
  ) : (
    <GameLobbyLoading />
  );
};
