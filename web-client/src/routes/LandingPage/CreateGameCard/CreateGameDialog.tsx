import { useNavigate } from "react-router-dom";
import { CreateSpadesGameButton } from "./CreateGameDialog/CreateSpadesGameButton";
import { useCreateGame } from "./CreateGameDialog/use-create-game";
import { useGameTypes, GameType } from "@/lib/use-game-types";
import { Skeleton } from "@/components/ui/skeleton";

const GameTypesLoading = () => {
  const gameTypes = Array.from({ length: 6 }, (_, i) => i);

  return (
    <>
      {gameTypes.map((gameType) => (
        <Skeleton key={gameType} className="h-[40px] rounded-md" />
      ))}
    </>
  );
};

export const CreateGameDialog = () => {
  const gameTypes = useGameTypes();
  const createGame = useCreateGame();
  const navigate = useNavigate();

  const buttonsForGameTypes: {
    [gameTypeSlug: string]: ({
      onCreate,
    }: {
      onCreate: () => Promise<void>;
    }) => JSX.Element;
  } = {
    spades: CreateSpadesGameButton,
  };

  const handleCreateGame = async (gameType: GameType) => {
    const {
      data: { data: game },
    } = await createGame.mutateAsync({ game_type_id: gameType.id });

    navigate(`/games/${game.id}`);
  };

  return gameTypes.isSuccess ? (
    gameTypes.data.map((gameType) => {
      const Button = buttonsForGameTypes[gameType.slug];
      return (
        <Button
          onCreate={() => handleCreateGame(gameType)}
          key={gameType.slug}
        />
      );
    })
  ) : (
    <GameTypesLoading />
  );
};
