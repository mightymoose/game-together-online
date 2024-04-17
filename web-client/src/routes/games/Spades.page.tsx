import { render, screen } from "@testing-library/react";
import { Spades } from "./Spades";

export class SpadesPage {
  render() {
    render(<Spades />);
  }

  get heading() {
    return screen.getByRole("heading", { name: "Spades" });
  }
}
