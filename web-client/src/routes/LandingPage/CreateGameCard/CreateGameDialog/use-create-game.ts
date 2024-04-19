import { useMutation } from "@tanstack/react-query";

const createGame = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 1000));

export const useCreateGame = () =>
  useMutation({
    mutationFn: createGame,
  });
