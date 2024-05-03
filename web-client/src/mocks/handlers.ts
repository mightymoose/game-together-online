import { createGameHandler } from "./handlers/create-game.handler";
import { currentUserProfileHandler } from "./handlers/current-user-profile.handler";
import { gameLobbyHandler } from "./handlers/game-lobby.handler";
import { gameTypesHandler } from "./handlers/game-types.handler";
import { pingHandler } from "./handlers/ping.handler";
import { updateCurrentUserProfileHandler } from "./handlers/update-current-user-profile.handler";

export const handlers = [
  pingHandler,
  gameTypesHandler,
  gameLobbyHandler,
  createGameHandler,
  currentUserProfileHandler,
  updateCurrentUserProfileHandler,
];
