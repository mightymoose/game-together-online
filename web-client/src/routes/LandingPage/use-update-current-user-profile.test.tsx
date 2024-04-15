import { describe, vi, it, Mock, expect } from "vitest";
import { invalidateCurrentUserProfile } from "@/lib/use-current-user-profile";
import { renderHook, waitFor, wrapper } from "@support/utils";
import { useUpdateCurrentUserProfile } from "./use-update-current-user-profile";

vi.mock("@/lib/use-current-user-profile");

const invalidateCurrentUserProfileMock = invalidateCurrentUserProfile as Mock;

describe("useUpdateCurrentUserProfile", () => {
  it("resets the form when the profile is updated", async () => {
    const { result } = renderHook(() => useUpdateCurrentUserProfile(), {
      wrapper,
    });
    const { current: updateCurrentUserProfile } = result;
    updateCurrentUserProfile.mutate({ username: "new-username" });

    await waitFor(() =>
      expect(invalidateCurrentUserProfileMock).toHaveBeenCalled(),
    );
  });
});
