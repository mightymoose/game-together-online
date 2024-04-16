import { render, screen } from "@testing-library/react";
import { FailedToLoadProfileMessage } from "./FailedToLoadProfileMessage";

export class FailedToLoadProfileMessagePage {
  render(props = {}) {
    const defaults = { onRetry: () => {} };
    const defaultedProps = { ...defaults, ...props };
    render(<FailedToLoadProfileMessage {...defaultedProps} />);
  }

  get errorMessage() {
    return screen.getByText("Failed to load your profile.");
  }

  get retryButton() {
    return screen.getByRole("button", { name: "Retry" });
  }
}
