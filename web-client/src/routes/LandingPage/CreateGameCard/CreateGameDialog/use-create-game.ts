import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";

interface CreateGameBody {
  game_type_id: string;
}

export const useCreateGame = () =>
  useMutation({
    mutationFn: (game: CreateGameBody) => api.post("/games", { game }),
  });
