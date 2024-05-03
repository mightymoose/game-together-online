import { api } from "@/api";
import { queryClient } from "@/lib/query-client";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface GameType {
  id: string;
  name: string;
  slug: string;
}

export interface GameInLobby {
  id: string;
  game_type: GameType;
}

interface ResponseBody {
  data: GameInLobby[];
}

const gameLobbyQuery = {
  queryKey: ["game-lobby"],
  queryFn: () => api.get("/games/lobby"),
  throwOnError: true,
};

export const useGameLobby = () =>
  useQuery<AxiosResponse<ResponseBody>>(gameLobbyQuery);

export const preloadGameLobby = () => queryClient.prefetchQuery(gameLobbyQuery);
