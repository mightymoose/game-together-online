import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConstructionIcon } from "lucide-react";
import { QuickPairing } from "./JoinGameCard/QuickPairing";
import { useQuicklyPair } from "./JoinGameCard/QuickPairing/use-quickly-pair";
import { useNavigate } from "react-router-dom";

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
        <TabsTrigger disabled={quicklyPair.isPending} value="lobby">
          Lobby
        </TabsTrigger>
      </TabsList>
      <TabsContent value="quick-pairing" className="mt-4">
        <QuickPairing onCreate={handleQuicklyPair} />
      </TabsContent>
      <TabsContent value="lobby" className="flex justify-center mt-4 gap-2">
        <ConstructionIcon />
        Under Construction
      </TabsContent>
    </Tabs>
  );
};
