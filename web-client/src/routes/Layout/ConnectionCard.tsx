import { PingRoundTripTimeCard } from "./ConnectionCard/PingRoundTripTimeCard";
import { SocketRoundTripTimeCard } from "./ConnectionCard/SocketRoundTripTimeCard";

export const ConnectionCard = () => {
  return (
    <div className="m-2 flex flex-col items-center">
      <h4 className="mb-2 text-green-900">Connected</h4>
      <dl className="flex space-x-10">
        <PingRoundTripTimeCard />
        <SocketRoundTripTimeCard />
      </dl>
    </div>
  );
};
