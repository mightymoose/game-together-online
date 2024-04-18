import { useMutation } from "@tanstack/react-query";

const quicklyPair = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 1000));

export const useQuicklyPair = () =>
  useMutation({
    mutationFn: quicklyPair,
  });
