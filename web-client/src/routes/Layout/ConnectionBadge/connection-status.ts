export type ConnectionStatus = "connected" | "error" | "connecting";
import { QueryStatus } from "@tanstack/react-query";

interface PingRequest {
  status: QueryStatus;
}

export const connectionStatus = (
  pingRequests: PingRequest[],
): ConnectionStatus => {
  const somePingRequestIsPending = pingRequests.some(
    (request) => request.status === "pending",
  );
  const somePingRequestHasFailed = pingRequests.some(
    (request) => request.status === "error",
  );

  return somePingRequestHasFailed
    ? "error"
    : somePingRequestIsPending
      ? "connecting"
      : "connected";
};
