import { beforeAll, afterEach, afterAll, beforeEach, expect } from "vitest";
import { server } from "@/mocks/node";
import { cleanup } from "@testing-library/react";
import { queryClient } from "./support/utils";
import * as matchers from "@testing-library/jest-dom/matchers";

declare module "vitest" {
  interface Assertion<T>
    extends jest.Matchers<void, T>,
      matchers.TestingLibraryMatchers<T, void> {}
}

expect.extend(matchers);

beforeAll(() => server.listen());
beforeEach(() => queryClient.clear());
afterAll(() => server.close());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
