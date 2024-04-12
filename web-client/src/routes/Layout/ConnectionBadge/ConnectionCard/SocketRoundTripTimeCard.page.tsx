import { render, screen } from "@support/utils";
import { MockedFunction, vi } from "vitest";
import { UseQueryResult } from "@tanstack/react-query";
import { useSocketRoundTripTime } from "./use-socket-round-trip-time";
import { SocketRoundTripTimeCard } from "./SocketRoundTripTimeCard";

vi.mock("./use-socket-round-trip-time");

const useSocketRoundTripTimeMock = useSocketRoundTripTime as MockedFunction<
  typeof useSocketRoundTripTime
>;

export class SocketRoundTripTimeCardPage {
  render() {
    render(<SocketRoundTripTimeCard />);
  }

  mockSocketRoundtripTime(response: Partial<UseQueryResult<number>>) {
    useSocketRoundTripTimeMock.mockReturnValue(
      response as UseQueryResult<number>,
    );
  }

  get loadingIndicator() {
    return screen.queryByLabelText("Waiting for ping response");
  }

  get pingTimeUnits() {
    return screen.queryByText("ms");
  }

  get pingFailedIcon() {
    return screen.queryByLabelText("Ping request failed");
  }

  pingTimeOf(time: number) {
    return screen.queryByText(time.toString());
  }
}
