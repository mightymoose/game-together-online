import { describe, expect, test } from "vitest";
import { GameTablePage } from "./GameTable.page";

describe("GameTable", () => {
  test("should render the title", () => {
    const page = new GameTablePage();
    page.render();
    expect(page.title).toBeInTheDocument();
  });
});
