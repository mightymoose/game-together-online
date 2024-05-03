import { useNavigate } from "react-router-dom";
import { GamesInLobby } from "./Lobby/GamesInLobby";

export const Lobby = () => {
  const navigate = useNavigate();
  const handleJoin = (gameId: string) => navigate(`/games/${gameId}/table`);
  return <GamesInLobby onJoin={handleJoin} />;
};
