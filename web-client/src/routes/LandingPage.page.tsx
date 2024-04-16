import { render, screen } from "@support/utils";
import LandingPage from "./LandingPage";
import { ProfileCardPage } from "./LandingPage/ProfileCard.page";

export class LandingPagePage {
  render() {
    render(<LandingPage />);
  }

  get heading(): HTMLElement | null {
    return screen.queryByRole("heading", { name: "Game Together Online" });
  }

  get profileCard(): ProfileCardPage {
    return new ProfileCardPage();
  }
}
