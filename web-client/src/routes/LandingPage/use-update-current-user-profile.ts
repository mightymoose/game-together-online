import { useMutation, useQueryClient } from "@tanstack/react-query";
import { invalidateCurrentUserProfile } from "@/lib/use-current-user-profile";
import { api } from "@/api";

export const useUpdateCurrentUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: { username: string }) =>
      api.put("/users/profiles/current", { profile }),
    onSettled: () => invalidateCurrentUserProfile(queryClient),
  });
};
