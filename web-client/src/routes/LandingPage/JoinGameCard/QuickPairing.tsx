import { Skeleton } from "@/components/ui/skeleton";
import { SpadesButton } from "./QuickPairing/SpadesButton";
import { useGameTypes } from "@/lib/use-game-types";

const GameTypesLoading = () => {
  const gameTypes = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="grid gap-4 grid-cols-3">
      {gameTypes.map((gameType) => (
        <Skeleton key={gameType} className="h-[40px] rounded-md" />
      ))}
    </div>
  );
};

export const QuickPairing = ({
  onCreate,
}: {
  onCreate: () => Promise<unknown>;
}) => {
  const gameTypes = useGameTypes();

  const buttonsForGameTypes: {
    [gameTypeSlug: string]: ({
      onCreate,
    }: {
      onCreate: () => Promise<unknown>;
    }) => JSX.Element;
  } = {
    spades: SpadesButton,
  };

  return gameTypes.isSuccess ? (
    <div className="grid gap-4 grid-cols-3">
      {gameTypes.data.map((gameType) => {
        const Button = buttonsForGameTypes[gameType.slug];
        return <Button onCreate={onCreate} key={gameType.slug} />;
      })}
    </div>
  ) : (
    <GameTypesLoading />
  );
};
