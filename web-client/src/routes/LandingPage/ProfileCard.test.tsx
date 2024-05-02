import { test, describe, expect, beforeEach, vi } from "vitest";
import { ProfileCardPage } from "./ProfileCard.page";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { server } from "@/mocks/node";
import { HttpResponse, http } from "msw";
import { environment } from "@/environment";

describe("<ProfileCard />", () => {
  const page = new ProfileCardPage();

  test("renders without crashing", () => {
    page.render();
    expect(page.heading).toBeInTheDocument();
  });

  test("shows a loader", () => {
    page.render();
    expect(page.loadingMessage).toBeInTheDocument();
  });

  describe("when the profile is loaded", () => {
    beforeEach(async () => {
      page.render();
      await waitFor(() => expect(page.loadingMessage).not.toBeInTheDocument());
    });

    test("shows the profile", () => {
      expect(page.profileForm.usernameInput).toBeInTheDocument();
    });

    test("allows updating the profile", async () => {
      const handler = vi.fn();
      server.use(
        http.put(`${environment.apiBaseUrl}/users/profiles/current`, handler),
      );

      userEvent.clear(page.profileForm.usernameInput);
      userEvent.type(page.profileForm.usernameInput, "new-username");
      await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
    });
  });

  describe("when the profile fails to load", () => {
    beforeEach(async () => {
      server.use(
        http.get(`${environment.apiBaseUrl}/users/profiles/current`, () => {
          return HttpResponse.json(
            { message: "Failed to load profile" },
            { status: 500 },
          );
        }),
      );
      page.render();
      await waitFor(() => expect(page.loadingMessage).not.toBeInTheDocument());
    });

    test("shows an error message", () => {
      expect(page.loadingError.errorMessage).toBeInTheDocument();
    });

    test("allows reloading the profile", async () => {
      server.resetHandlers();
      userEvent.click(page.loadingError.retryButton);
      await waitFor(() => expect(page.loadingMessage).toBeInTheDocument());
      await waitFor(() => expect(page.loadingMessage).not.toBeInTheDocument());
      expect(page.profileForm.usernameInput).toBeInTheDocument();
    });
  });
});
