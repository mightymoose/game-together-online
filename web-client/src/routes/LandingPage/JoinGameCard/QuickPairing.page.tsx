import { vi } from "vitest";
import { QuickPairing } from "./QuickPairing";
import { render } from "@/test/support/utils";
import { SpadesButtonPage } from "./QuickPairing/SpadesButton.page";

export class QuickPairingPage {
  render(attrs: { onCreate?: () => Promise<unknown> } = {}) {
    const defaultedAttrs = { onCreate: vi.fn(), ...attrs };
    render(<QuickPairing {...defaultedAttrs} />);
  }

  get spadesButton() {
    return new SpadesButtonPage();
  }
}
