import { useQuery } from "@tanstack/react-query";
import { environment } from "@/environment";

const getPingRoundtripTime = async () => {
  const start = Date.now();
  await fetch(`${environment.apiBaseUrl}/ping`);
  return Date.now() - start;
};

export const usePingRoundtripTime = () =>
  useQuery({
    queryKey: ["ping-roundtrip-time"],
    queryFn: getPingRoundtripTime,
    refetchInterval: 5 * 1000,
  });
