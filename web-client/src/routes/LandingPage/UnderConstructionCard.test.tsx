import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UnderConstructionCard } from "./UnderConstructionCard";
import "@testing-library/jest-dom/vitest";

describe("UnderConstructionCard", () => {
  it("renders the card", () => {
    render(<UnderConstructionCard className="" />);
    expect(screen.getByText("Under Construction")).toBeInTheDocument();
  });
});
