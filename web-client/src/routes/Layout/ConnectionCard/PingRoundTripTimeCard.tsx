import { Skeleton } from "@/components/ui/skeleton";
import { usePingRoundtripTime } from "./use-ping-roundtrip-time";
import { UseQueryResult } from "@tanstack/react-query";
import { BadgeAlert } from "lucide-react";

const PingTime = ({
  pingTimeRequest,
}: {
  pingTimeRequest: UseQueryResult<number>;
}) => {
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

  return statuses[pingTimeRequest.status];
};

export const PingRoundTripTimeCard = () => {
  const pingTimeRequest = usePingRoundtripTime();

  return (
    <div className="w-10">
      <dt className="text-sm font-medium leading-6 text-gray-500">Ping</dt>
      <dd className="w-full flex-none tracking-tight text-gray-900">
        <PingTime pingTimeRequest={pingTimeRequest} />
      </dd>
    </div>
  );
};
