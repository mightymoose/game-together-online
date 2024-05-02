import { render, screen } from "@support/utils";
import { ConnectionBadge } from "./ConnectionBadge";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/socket");

describe("ConnectionBadge", () => {
  it("renders without error", () => {
    render(<ConnectionBadge />);
    expect(
      screen.getByLabelText("Connecting to the server"),
    ).toBeInTheDocument();
  });
});
