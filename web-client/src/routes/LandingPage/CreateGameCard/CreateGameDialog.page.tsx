import { render } from "@support/utils";
import { MemoryRouter } from "react-router-dom";
import { CreateGameDialog } from "./CreateGameDialog";
import { CreateSpadesGameButtonPage } from "./CreateGameDialog/CreateSpadesGameButton.page";

export class CreateGameDialogPage {
  render() {
    render(
      <MemoryRouter>
        <CreateGameDialog />
      </MemoryRouter>,
    );
  }

  get createSpadesButton() {
    return new CreateSpadesGameButtonPage();
  }
}
