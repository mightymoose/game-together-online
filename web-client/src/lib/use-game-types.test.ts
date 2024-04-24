import { describe, expect, it } from "vitest";
import { renderHook, waitFor, wrapper } from "@support/utils";
import { useGameTypes } from "./use-game-types";

describe("useGameTypes", () => {
  it("returns the game types", async () => {
    const { result } = renderHook(useGameTypes, { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(result.current.data).toEqual([{ name: "Spades", slug: "spades" }]);
  });
});
