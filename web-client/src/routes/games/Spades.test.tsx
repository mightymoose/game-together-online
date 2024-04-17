import { describe, expect, it } from "vitest";
import { SpadesPage } from "./Spades.page";
import "@testing-library/jest-dom/vitest";

describe("<Spades />", () => {
  const page = new SpadesPage();

  it("shows the heading", () => {
    page.render();
    expect(page.heading).toBeInTheDocument();
  });
});
