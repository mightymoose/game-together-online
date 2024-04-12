import { Mock, describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, wrapper } from "@support/utils";
import { useSocketRoundTripTime } from "./use-socket-round-trip-time";
import { useChannel } from "@/lib/use-channel";

vi.mock("@/lib/socket");
vi.mock("@/lib/use-channel");

describe("useSocketRoundTripTime", () => {
  it("returns the roundtrip time", async () => {
    const useChannelMock = useChannel as Mock;
    const receive = (_: string, callback: () => unknown) =>
      setTimeout(callback, 5);
    const pushMock = vi.fn(() => ({ receive }));
    useChannelMock.mockReturnValue({
      channel: { push: pushMock },
      connection: Promise.resolve(),
    });
    const { result } = renderHook(useSocketRoundTripTime, { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(result.current.data).toBeGreaterThan(0);
  });
});
