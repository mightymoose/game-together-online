import { http, HttpResponse } from "msw";
import { environment } from "@/environment";

export const pingHandler = http.get(`${environment.apiBaseUrl}/ping`, () =>
  HttpResponse.json({ data: "pong" }),
);
