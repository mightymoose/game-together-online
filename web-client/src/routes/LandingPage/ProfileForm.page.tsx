import { screen } from "@support/utils";

export class ProfileFormPage {
  get usernameInput() {
    return screen.getByLabelText("Username");
  }
}
