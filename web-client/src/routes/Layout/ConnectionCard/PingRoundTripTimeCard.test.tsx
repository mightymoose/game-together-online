import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { PingRoundTripTimeCardPage } from "./PingRoundTripTimeCard.page";

describe("PingRoundTripTimeCard", () => {
  describe("when the first request is pending", () => {
    it("shows a loading state", () => {
      const pingRoundTripTimeCard = new PingRoundTripTimeCardPage();
      pingRoundTripTimeCard.mockPingRoundtripTime({ status: "pending" });
      pingRoundTripTimeCard.render();
      expect(pingRoundTripTimeCard.loadingIndicator).toBeInTheDocument();
      expect(pingRoundTripTimeCard.pingTimeUnits).not.toBeInTheDocument();
    });
  });

  describe("when the ping request succeeds", () => {
    it("shows the round trip time", () => {
      const pingRoundTripTimeCard = new PingRoundTripTimeCardPage();
      pingRoundTripTimeCard.mockPingRoundtripTime({
        status: "success",
        data: 123,
      });
      pingRoundTripTimeCard.render();

      expect(pingRoundTripTimeCard.pingTimeOf(123)).toBeInTheDocument();
      expect(pingRoundTripTimeCard.pingTimeUnits).toBeInTheDocument();
    });
  });

  describe("when the ping request fails", () => {
    it("shows an error message", () => {
      const pingRoundTripTimeCard = new PingRoundTripTimeCardPage();
      pingRoundTripTimeCard.mockPingRoundtripTime({ status: "error" });
      pingRoundTripTimeCard.render();
      expect(pingRoundTripTimeCard.pingFailedIcon).toBeInTheDocument();
    });
  });
});
