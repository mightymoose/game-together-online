import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

export class LandingPagePage {
  render() {
    render(<LandingPage />);
  }

  get heading(): HTMLElement {
    return screen.getByRole("heading", { name: "Game Together Online" });
  }
}
