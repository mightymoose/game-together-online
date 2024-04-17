import { describe, expect, it } from "vitest";
import { JoinGameCardPage } from "./JoinGameCard.page";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("<JoinGameCard />", () => {
  const page = new JoinGameCardPage();

  it("renders the quick pairing tab", () => {
    page.render();
    expect(page.quickPairingTab).toBeInTheDocument();
  });

  it("renders the lobby tab", () => {
    page.render();
    expect(page.lobbyTab).toBeInTheDocument();
  });

  it("switches between tabs", async () => {
    page.render();
    expect(page.quickPairing.spadesButton.quickPairButton).toBeInTheDocument();
    expect(page.lobbyUnderConstructionMessage).not.toBeInTheDocument();
    userEvent.click(page.lobbyTab);
    await waitFor(() =>
      expect(
        page.quickPairing.spadesButton.quickPairButton,
      ).not.toBeInTheDocument(),
    );
    expect(page.lobbyUnderConstructionMessage).toBeInTheDocument();
  });

  it.todo("navigates to a spades game when a game is quickly paired");
  it.todo("shows an error when a game fails to quickly pair");
});
