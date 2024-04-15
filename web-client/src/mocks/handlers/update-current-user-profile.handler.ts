import { http, HttpResponse } from "msw";
import { environment } from "@/environment";

export const updateCurrentUserProfileHandler = http.put(
  `${environment.apiBaseUrl}/users/profiles/current`,
  () => HttpResponse.json({ data: { username: "username" } }),
);
