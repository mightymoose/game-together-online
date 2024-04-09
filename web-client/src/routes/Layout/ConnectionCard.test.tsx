import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { ConnectionCardPage } from "./ConnectionCard.page";

vi.mock("@/lib/socket");

describe("PingRoundTripTimeCard", () => {
  it("shows the ping round trip time", () => {
    const page = new ConnectionCardPage();
    page.render();
    expect(page.pingHeader).toBeInTheDocument();
  });

  it("shows the socket round trip time", () => {
    const page = new ConnectionCardPage();
    page.render();
    expect(page.socketHeader).toBeInTheDocument();
  });
});
