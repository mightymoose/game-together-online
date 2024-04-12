import { useChannel } from "@/lib/use-channel";
import { useQuery } from "@tanstack/react-query";
import { Channel } from "phoenix";

const sendPing = async (channel: Channel) =>
  new Promise<void>((resolve) =>
    channel.push("ping", {}, 10000).receive("ok", resolve),
  );

const getPingRoundtripTime = async (channel: Channel) => {
  const start = Date.now();
  await sendPing(channel);
  return Date.now() - start;
};

export const useSocketRoundTripTime = () => {
  const { channel, connection } = useChannel("ping");
  return useQuery({
    queryKey: ["socket-roundtrip-time"],
    queryFn: async () => {
      await connection;
      return getPingRoundtripTime(channel);
    },
    refetchInterval: 5 * 1000,
  });
};
