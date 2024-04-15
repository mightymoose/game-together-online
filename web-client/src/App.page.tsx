import { render, screen } from "@support/utils";
import App from "./App";
import { ProfileCardPage } from "./routes/LandingPage/ProfileCard.page";

export class AppPage {
  render() {
    render(<App />);
  }

  get profileCard(): ProfileCardPage {
    return new ProfileCardPage();
  }

  get heading(): HTMLElement | null {
    return screen.queryByRole("heading", { name: "Game Together Online" });
  }
}
