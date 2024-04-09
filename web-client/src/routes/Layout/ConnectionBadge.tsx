import { usePingRoundtripTime } from "./ConnectionBadge/ConnectionCard/use-ping-roundtrip-time";
import { useSocketRoundTripTime } from "./ConnectionBadge/ConnectionCard/use-socket-round-trip-time";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@radix-ui/react-hover-card";
import { ConnectionCard } from "./ConnectionBadge/ConnectionCard";
import { connectionStatus } from "./ConnectionBadge/connection-status";
import { ConnectionIcon } from "./ConnectionBadge/ConnectionIcon";

export const ConnectionBadge = () => {
  const socketRoundTripTimeRequest = useSocketRoundTripTime();
  const pingTimeRequest = usePingRoundtripTime();

  const status = connectionStatus([
    socketRoundTripTimeRequest,
    pingTimeRequest,
  ]);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <ConnectionIcon status={status} />
      </HoverCardTrigger>
      <HoverCardContent className="mx-2">
        <ConnectionCard />
      </HoverCardContent>
    </HoverCard>
  );
};
