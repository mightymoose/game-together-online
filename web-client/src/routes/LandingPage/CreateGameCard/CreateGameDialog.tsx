import { useNavigate } from "react-router-dom";
import { CreateSpadesGameButton } from "./CreateGameDialog/CreateSpadesGameButton";
import { useCreateGame } from "./CreateGameDialog/use-create-game";

export const CreateGameDialog = () => {
  const createGame = useCreateGame();
  const navigate = useNavigate();

  const handleCreateGame = async () => {
    await createGame.mutateAsync();
    navigate("/games/spades");
  };

  return <CreateSpadesGameButton onCreate={handleCreateGame} />;
};
