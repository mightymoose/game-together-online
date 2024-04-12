import { environment } from "@/environment";
import { Socket } from "phoenix";

export const userSocket = new Socket(`${environment.apiBaseUrl}/socket`);
