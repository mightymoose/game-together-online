import { render, screen } from "@support/utils";
import { MemoryRouter } from "react-router-dom";
import { CreateGameCard } from "./CreateGameCard";

export class CreateGameCardPage {
  render() {
    render(
      <MemoryRouter>
        <CreateGameCard className="" />
      </MemoryRouter>,
    );
  }

  get createGameButton() {
    return screen.getByRole("button", { name: "Create Game" });
  }
}
