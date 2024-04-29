import { http, HttpResponse } from "msw";
import { environment } from "@/environment";

export const createGameHandler = http.post(
  `${environment.apiBaseUrl}/games`,
  () => HttpResponse.json({ data: { status: "pending", id: "game-id" } }),
);
