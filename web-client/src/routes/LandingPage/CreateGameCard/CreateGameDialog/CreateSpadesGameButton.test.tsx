import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import { CreateSpadesGameButtonPage } from "./CreateSpadesGameButton.page";

describe("<CreateSpadesGameButton />", () => {
  const page = new CreateSpadesGameButtonPage();

  it("shows the spades button", () => {
    page.render({});
    expect(page.createGameButton).toBeInTheDocument();
    expect(page.gameCreationInProgressButton).not.toBeInTheDocument();
  });

  it("calls onCreate when the spades button is clicked", async () => {
    const onCreate = vi.fn().mockResolvedValueOnce(null);
    page.render({ onCreate });
    userEvent.click(page.createGameButton as unknown as HTMLElement);
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
  });

  it("shows a loading state when a game is being created", async () => {
    const onCreate = vi.fn().mockReturnValueOnce(new Promise(() => {}));
    page.render({ onCreate });
    userEvent.click(page.createGameButton as unknown as HTMLElement);
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
    expect(page.createGameButton).not.toBeInTheDocument();
    expect(page.gameCreationInProgressButton).toBeInTheDocument();
  });

  it("stops showing a loading state when a game is created", async () => {
    let resolve: (value: unknown) => unknown = () => {};
    const response = new Promise((r) => (resolve = r));
    const onCreate = vi.fn().mockResolvedValueOnce(response);
    page.render({ onCreate });
    userEvent.click(page.createGameButton as unknown as HTMLElement);
    await waitFor(() => expect(onCreate).toHaveBeenCalled());
    expect(page.createGameButton).not.toBeInTheDocument();
    expect(page.gameCreationInProgressButton).toBeInTheDocument();
    resolve(null);
    await waitFor(() =>
      expect(page.gameCreationInProgressButton).not.toBeInTheDocument(),
    );
    expect(page.createGameButton).toBeInTheDocument();
  });
});
