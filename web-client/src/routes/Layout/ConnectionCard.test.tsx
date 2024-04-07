import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { ConnectionCardPage } from "./ConnectionCard.page";

describe("PingRoundTripTimeCard", () => {
  it("shows the ping round trip time", () => {
    const page = new ConnectionCardPage();
    page.render();
    expect(page.pingHeader).toBeInTheDocument();
  });
});
