import { render, screen } from "@testing-library/react";
import App from "./App";

export class AppPage {
  render() {
    render(<App />);
  }

  get heading(): HTMLElement {
    return screen.getByRole("heading", { name: "Game Together Online" });
  }
}
