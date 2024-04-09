import { QueryClient } from "@tanstack/react-query";
import { expect, it } from "vitest";
import { queryClient } from "./query-client";

it("is a query client", () => expect(queryClient).toBeInstanceOf(QueryClient));
