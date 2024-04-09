import { it, expect, describe, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { AppPage } from "./App.page";

vi.mock("@/lib/socket");

describe("<App />", () => {
  const page = new AppPage();

  it("shows the heading", () => {
    page.render();
    expect(page.heading).toBeInTheDocument();
  });
});
