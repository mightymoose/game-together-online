import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { SpadesButtonPage } from "./SpadesButton.page";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("<SpadesButton />", () => {
  const page = new SpadesButtonPage();

  it("shows the spades button", () => {
    page.render({});
    expect(page.quickPairButton).toBeInTheDocument();
    expect(page.pairingInProgressButton).not.toBeInTheDocument();
  });

  it("calls onCreate when the spades button is clicked", async () => {
    const onCreate = vi.fn().mockResolvedValueOnce(null);
    page.render({ onCreate });
    userEvent.click(page.quickPairButton as unknown as HTMLElement);
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
  });

  it("shows a loading state when a game is being paired", async () => {
    const onCreate = vi.fn().mockReturnValueOnce(new Promise(() => {}));
    page.render({ onCreate });
    userEvent.click(page.quickPairButton as unknown as HTMLElement);
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
    expect(page.quickPairButton).not.toBeInTheDocument();
    expect(page.pairingInProgressButton).toBeInTheDocument();
  });

  it("stops showing a loading state when a game is paired", async () => {
    let resolve: (value: unknown) => unknown = () => {};
    const response = new Promise((r) => (resolve = r));
    const onCreate = vi.fn().mockResolvedValueOnce(response);
    page.render({ onCreate });
    userEvent.click(page.quickPairButton as unknown as HTMLElement);
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
    expect(page.quickPairButton).not.toBeInTheDocument();
    expect(page.pairingInProgressButton).toBeInTheDocument();
    resolve(null);
    await waitFor(() =>
      expect(page.pairingInProgressButton).not.toBeInTheDocument(),
    );
    expect(page.quickPairButton).toBeInTheDocument();
  });
});
