import { api } from "@/api";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

interface GameType {
  name: string;
  slug: string;
}

const gameTypeQuery = {
  queryKey: ["game-types"],
  queryFn: async () => {
    const { data } = await api.get("/games/game_types");
    return data;
  },
  throwOnError: true,
  select: ({ data }: { data: GameType[] }) => data,
};

export const useGameTypes = (): UseQueryResult<GameType[]> =>
  useQuery(gameTypeQuery);
