import { render, screen } from "@support/utils";
import { PingRoundTripTimeCard } from "./PingRoundTripTimeCard";
import { usePingRoundtripTime } from "./use-ping-roundtrip-time";
import { MockedFunction, vi } from "vitest";
import { UseQueryResult } from "@tanstack/react-query";

vi.mock("./use-ping-roundtrip-time");

const usePingRoundtripTimeMock = usePingRoundtripTime as MockedFunction<
  typeof usePingRoundtripTime
>;

export class PingRoundTripTimeCardPage {
  render() {
    render(<PingRoundTripTimeCard />);
  }

  mockPingRoundtripTime(response: Partial<UseQueryResult<number>>) {
    usePingRoundtripTimeMock.mockReturnValue(
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
