import { useState } from "react";
import { Channel } from "phoenix";
import { useSocket } from "./use-socket";

interface ChannelStorage {
  channels: Channel[];
}

export const useChannel = (topic: string) => {
  const { socket } = useSocket();
  const [channel, setChannel] = useState(() => {
    const channelStorage = socket as unknown as ChannelStorage;
    return (
      channelStorage.channels.find((c: Channel) => c.topic === topic) ||
      socket.channel(topic)
    );
  });

  if (socket.isConnected() && channel.state === "closed") {
    const connection = new Promise<void>((resolve) => {
      channel
        .join()
        .receive("ok", () => {
          setChannel(channel);
          resolve();
        })
        .receive("error", () => {
          setChannel(channel);
          resolve();
        });
    });

    return { channel, connection };
  }

  return { channel, connection: Promise.resolve() };
};
