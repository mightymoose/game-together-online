import { describe, it, expect, vi, Mock } from "vitest";
import { CreateGameDialogPage } from "./CreateGameDialog.page";
import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { useNavigate as navigateHook } from "react-router-dom";

const useNavigateAsMock = navigateHook as Mock;

vi.mock("react-router-dom", async () => {
  const module = await vi.importActual("react-router-dom");
  return {
    ...module,
    useNavigate: vi.fn(),
  };
});

describe("<CreateGameDialog />", () => {
  const page = new CreateGameDialogPage();

  it("shows the game types", async () => {
    page.render();
    await waitFor(() =>
      expect(page.createSpadesButton.createGameButton).toBeInTheDocument(),
    );
  });

  it("navigates to the game page when a game is created", async () => {
    const fakeNavigate = vi.fn();
    useNavigateAsMock.mockReturnValue(fakeNavigate);
    page.render();
    await waitFor(() =>
      expect(page.createSpadesButton.createGameButton).toBeInTheDocument(),
    );
    userEvent.click(
      page.createSpadesButton.createGameButton as unknown as HTMLElement,
    );
    await waitFor(() => expect(fakeNavigate).toHaveBeenCalled());
  });
});
