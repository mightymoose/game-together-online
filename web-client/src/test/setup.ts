import { beforeAll, afterEach, afterAll, beforeEach } from "vitest";
import { server } from "@/mocks/node";
import { cleanup } from "@testing-library/react";
import { queryClient } from "./support/utils";

beforeAll(() => server.listen());
beforeEach(() => queryClient.clear());
afterAll(() => server.close());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
