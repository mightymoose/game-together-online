import { Skeleton } from "@/components/ui/skeleton";
import { useSocketRoundTripTime } from "./use-socket-round-trip-time";
import { UseQueryResult } from "@tanstack/react-query";
import { BadgeAlert } from "lucide-react";

const PingTime = ({
  pingTimeRequest,
}: {
  pingTimeRequest: UseQueryResult<number | null>;
}) => {
  const status =
    pingTimeRequest.data === null ? "pending" : pingTimeRequest.status;

  const statuses = {
    success: (
      <>
        <span className="font-mono text-xl font-medium">
          {pingTimeRequest.data}
        </span>
        <span>ms</span>
      </>
    ),
    error: (
      <span className="font-mono text-xl font-medium">
        <BadgeAlert className="text-red-500" aria-label="Ping request failed" />
      </span>
    ),
    pending: (
      <Skeleton
        className="w-14 h-[30px]"
        aria-label="Waiting for ping response"
      />
    ),
  };

  return statuses[status];
};

export const SocketRoundTripTimeCard = () => {
  const socketRoundTripTimeRequest = useSocketRoundTripTime();
  return (
    <div className="w-10">
      <dt className="text-sm font-medium leading-6 text-gray-500">Server</dt>
      <dd className="w-full flex-none tracking-tight text-gray-900">
        <PingTime pingTimeRequest={socketRoundTripTimeRequest} />
      </dd>
    </div>
  );
};
