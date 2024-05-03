import { describe, expect, it } from "vitest";
import { renderHook, waitFor, wrapper } from "@support/utils";
import { useGameLobby } from "./use-game-lobby";

describe("useGameLobby", () => {
  it("returns the games in the lobby", async () => {
    const { result } = renderHook(useGameLobby, { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(result.current.data?.data).toEqual({ data: [] });
  });
});
