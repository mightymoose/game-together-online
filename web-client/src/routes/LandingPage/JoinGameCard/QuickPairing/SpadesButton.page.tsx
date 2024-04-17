import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { SpadesButton } from "./SpadesButton";

export class SpadesButtonPage {
  render(attrs: { onCreate?: () => Promise<unknown> }) {
    const attrsWithDefaults = { onCreate: vi.fn(), ...attrs };
    render(<SpadesButton {...attrsWithDefaults} />);
  }

  get quickPairButton() {
    return screen.queryByRole("button", { name: "Spades" });
  }

  get pairingInProgressButton() {
    return screen.queryByRole("button", { name: "Finding a game" });
  }
}
