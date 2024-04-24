import { http, HttpResponse } from "msw";
import { environment } from "@/environment";

export const gameTypesHandler = http.get(
  `${environment.apiBaseUrl}/games/game_types`,
  () => HttpResponse.json({ data: [{ name: "Spades", slug: "spades" }] }),
);
