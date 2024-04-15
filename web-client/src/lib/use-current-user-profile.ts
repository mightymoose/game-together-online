import { api } from "@/api";
import { QueryClient, UseQueryResult, useQuery } from "@tanstack/react-query";

interface UserProfile {
  username: string;
}

const currentUserQuery = {
  queryKey: ["current-user-profile"],
  queryFn: async () => {
    const { data } = await api.get("/users/profiles/current");
    return data;
  },
  staleTime: Infinity,
  throwOnError: true,
  gcTime: Infinity,
  select: ({ data }: { data: UserProfile }) => data,
};

export const useCurrentUserProfile = (): UseQueryResult<UserProfile> =>
  useQuery(currentUserQuery);

export const invalidateCurrentUserProfile = (queryClient: QueryClient) =>
  queryClient.invalidateQueries(currentUserQuery);
