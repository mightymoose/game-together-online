import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { QuickPairingPage } from "./QuickPairing.page";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("<QuickPairing />", () => {
  const page = new QuickPairingPage();

  it("calls onCreate when the spades button is clicked", async () => {
    const onCreate = vi.fn();
    onCreate.mockResolvedValueOnce(null);
    page.render({ onCreate });
    await waitFor(() =>
      expect(page.spadesButton.quickPairButton).toBeInTheDocument(),
    );
    userEvent.click(
      page.spadesButton.quickPairButton as unknown as HTMLElement,
    );
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
  });
});
