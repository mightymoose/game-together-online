import { http, HttpResponse } from "msw";
import { environment } from "@/environment";

export const gameLobbyHandler = http.get(
  `${environment.apiBaseUrl}/games/lobby`,
  () =>
    HttpResponse.json({
      data: [],
    }),
);
