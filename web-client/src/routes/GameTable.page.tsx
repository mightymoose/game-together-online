import { render, screen } from "@testing-library/react";
import { GameTable } from "./GameTable";

export class GameTablePage {
  render() {
    render(<GameTable />);
  }

  get title() {
    return screen.getByRole("heading", { name: "Game Table" });
  }
}
