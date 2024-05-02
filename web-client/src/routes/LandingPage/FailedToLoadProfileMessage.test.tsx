import { test, describe, expect, vi } from "vitest";
import { FailedToLoadProfileMessagePage } from "./FailedToLoadProfileMessage.page";

describe("<FailedToLoadProfileMessage />", () => {
  const page = new FailedToLoadProfileMessagePage();

  test("renders without crashing", () => {
    page.render();
    expect(page.errorMessage).toBeInTheDocument();
  });

  test("retries the fetch when the retry button is clicked", () => {
    const onRetry = vi.fn();
    page.render({ onRetry });

    page.retryButton.click();

    expect(onRetry).toHaveBeenCalled();
  });
});
