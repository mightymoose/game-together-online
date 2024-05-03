import { render, screen } from "@support/utils";
import { QuickPairingPage } from "./JoinGameCard/QuickPairing.page";
import { JoinGameCard } from "./JoinGameCard";
import { MemoryRouter } from "react-router-dom";

export class JoinGameCardPage {
  render() {
    render(
      <MemoryRouter>
        <JoinGameCard className="" />
      </MemoryRouter>,
    );
  }
  get quickPairingTab() {
    return screen.getByRole("tab", { name: "Quick Pairing" });
  }

  get lobbyTab() {
    return screen.getByRole("tab", { name: "Lobby" });
  }

  get quickPairing() {
    return new QuickPairingPage();
  }

  get noGamesFoundMessage() {
    return screen.queryByText("No Games Available");
  }
}
