import axios from "axios";
import { environment } from "./environment";

export const api = axios.create({
  baseURL: environment.apiBaseUrl,
});
