import { http, HttpResponse } from "msw";
import { environment } from "@/environment";

export const currentUserProfileHandler = http.get(
  `${environment.apiBaseUrl}/users/profiles/current`,
  () => HttpResponse.json({ data: { username: "username" } }),
);
