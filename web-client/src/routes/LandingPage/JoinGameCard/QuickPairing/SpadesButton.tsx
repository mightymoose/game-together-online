import { Button } from "@/components/ui/button";
import { Loader2, SpadeIcon } from "lucide-react";
import { useState } from "react";

export const SpadesButton = ({
  onCreate,
}: {
  onCreate: () => Promise<unknown>;
}) => {
  const [creating, setCreating] = useState(false);
  const handleCreate = async () => {
    setCreating(true);
    onCreate().finally(() => setCreating(false));
  };

  return creating ? (
    <Button disabled className="flex gap-2 justify-center">
      <Loader2 className="animate-spin" />
      Finding a game
    </Button>
  ) : (
    <Button className="flex gap-2 justify-center" onClick={handleCreate}>
      <SpadeIcon /> Spades
    </Button>
  );
};
