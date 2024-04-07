import { describe, expect, it } from "vitest";
import { usePingRoundtripTime } from "./use-ping-roundtrip-time";
import { renderHook, waitFor, wrapper } from "@support/utils";

describe("usePingRoundtripTime", () => {
  it("returns the roundtrip time", async () => {
    const { result } = renderHook(usePingRoundtripTime, { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  });
});
