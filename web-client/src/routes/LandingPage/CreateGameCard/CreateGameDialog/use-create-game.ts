import { useMutation } from "@tanstack/react-query";

const createGame = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 100));

export const useCreateGame = () =>
  useMutation({
    mutationFn: createGame,
  });
