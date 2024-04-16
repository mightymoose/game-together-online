import { screen, render } from "@support/utils";
import { ProfileCard } from "./ProfileCard";
import { ProfileFormPage } from "./ProfileForm.page";
import { FailedToLoadProfileMessagePage } from "./FailedToLoadProfileMessage.page";

export class ProfileCardPage {
  render() {
    render(<ProfileCard className="" />);
  }

  get heading(): HTMLElement | null {
    return screen.queryByRole("heading", { name: "Playing As" });
  }

  get loadingMessage(): HTMLElement | null {
    return screen.queryByLabelText("Loading your profile");
  }

  get profileForm(): ProfileFormPage {
    return new ProfileFormPage();
  }

  get loadingError(): FailedToLoadProfileMessagePage {
    return new FailedToLoadProfileMessagePage();
  }
}
