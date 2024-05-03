import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuickPairing } from "./JoinGameCard/QuickPairing";
import { useQuicklyPair } from "./JoinGameCard/QuickPairing/use-quickly-pair";
import { useNavigate } from "react-router-dom";
import { Lobby } from "./JoinGameCard/Lobby";
import { preloadGameLobby } from "./JoinGameCard/Lobby/use-game-lobby";

export const JoinGameCard = ({ className }: { className: string }) => {
  const quicklyPair = useQuicklyPair();
  const navigate = useNavigate();

  const handleQuicklyPair = async () => {
    await quicklyPair.mutateAsync();
    navigate("/games/spades");
  };

  return (
    <Tabs defaultValue="quick-pairing" className={`w-full ${className}`}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger disabled={quicklyPair.isPending} value="quick-pairing">
          Quick Pairing
        </TabsTrigger>
        <TabsTrigger
          disabled={quicklyPair.isPending}
          onMouseOver={preloadGameLobby}
          value="lobby"
        >
          Lobby
        </TabsTrigger>
      </TabsList>
      <TabsContent value="quick-pairing" className="mt-4">
        <QuickPairing onCreate={handleQuicklyPair} />
      </TabsContent>
      <TabsContent value="lobby" className="flex justify-center mt-4 gap-2">
        <Lobby />
      </TabsContent>
    </Tabs>
  );
};
