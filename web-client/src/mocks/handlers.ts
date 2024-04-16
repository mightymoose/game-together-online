import { currentUserProfileHandler } from "./handlers/current-user-profile.handler";
import { pingHandler } from "./handlers/ping.handler";
import { updateCurrentUserProfileHandler } from "./handlers/update-current-user-profile.handler";

export const handlers = [
  pingHandler,
  currentUserProfileHandler,
  updateCurrentUserProfileHandler,
];
