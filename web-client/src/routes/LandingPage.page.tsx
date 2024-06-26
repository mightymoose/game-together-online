import { render, screen } from "@support/utils";
import LandingPage from "./LandingPage";
import { ProfileCardPage } from "./LandingPage/ProfileCard.page";
import { MemoryRouter } from "react-router-dom";
import { JoinGameCardPage } from "./LandingPage/JoinGameCard.page";
import { CreateGameCardPage } from "./LandingPage/CreateGameCard.page";

export class LandingPagePage {
  render() {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    );
  }

  get heading(): HTMLElement | null {
    return screen.queryByRole("heading", { name: "Game Together Online" });
  }

  get profileCard(): ProfileCardPage {
    return new ProfileCardPage();
  }

  get joinGameCard(): JoinGameCardPage {
    return new JoinGameCardPage();
  }

  get createGameCard(): CreateGameCardPage {
    return new CreateGameCardPage();
  }
}
