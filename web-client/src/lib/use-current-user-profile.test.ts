import { describe, expect, it } from "vitest";
import { renderHook, waitFor, wrapper, queryClient } from "@support/utils";
import {
  invalidateCurrentUserProfile,
  useCurrentUserProfile,
} from "./use-current-user-profile";
import { server } from "@/mocks/node";
import { HttpResponse, http } from "msw";
import { environment } from "@/environment";

describe("useCurrentUserProfile", () => {
  it("returns the current profile", async () => {
    const { result } = renderHook(useCurrentUserProfile, { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(result.current.data).toEqual({ username: "username" });
  });
});

describe("invalidateCurrentUserProfile", () => {
  it("fetches the current profile", async () => {
    const { result, rerender } = renderHook(useCurrentUserProfile, { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

    server.use(
      http.get(`${environment.apiBaseUrl}/users/profiles/current`, () =>
        HttpResponse.json({ data: { username: "new-username" } }),
      ),
    );

    const { result: invalidateResult } = renderHook(
      () => invalidateCurrentUserProfile(queryClient),
      { wrapper },
    );

    await invalidateResult.current;
    rerender();
    expect(result.current.data).toEqual({ username: "new-username" });
  });
});
