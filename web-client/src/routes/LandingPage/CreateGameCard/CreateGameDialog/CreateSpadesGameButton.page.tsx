import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { CreateSpadesGameButton } from "./CreateSpadesGameButton";

export class CreateSpadesGameButtonPage {
  render(attrs: { onCreate?: () => Promise<unknown> }) {
    const attrsWithDefaults = { onCreate: vi.fn(), ...attrs };
    render(<CreateSpadesGameButton {...attrsWithDefaults} />);
  }

  get createGameButton() {
    return screen.queryByRole("button", { name: "Spades" });
  }

  get gameCreationInProgressButton() {
    return screen.queryByRole("button", { name: "Creating a game" });
  }
}
