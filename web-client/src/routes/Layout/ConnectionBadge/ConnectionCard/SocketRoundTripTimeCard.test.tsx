import { describe, expect, it, vi } from "vitest";
import { SocketRoundTripTimeCardPage } from "./SocketRoundTripTimeCard.page";

vi.mock("@/lib/socket");

describe("SocketRoundTripTimeCard", () => {
  describe("when the first request is pending", () => {
    it("shows a loading state", () => {
      const socketRoundTripTimeCard = new SocketRoundTripTimeCardPage();
      socketRoundTripTimeCard.mockSocketRoundtripTime({ status: "pending" });
      socketRoundTripTimeCard.render();
      expect(socketRoundTripTimeCard.loadingIndicator).toBeInTheDocument();
      expect(socketRoundTripTimeCard.pingTimeUnits).not.toBeInTheDocument();
    });
  });

  describe("when the socket request succeeds", () => {
    it("shows the round trip time", () => {
      const socketRoundTripTimeCard = new SocketRoundTripTimeCardPage();
      socketRoundTripTimeCard.mockSocketRoundtripTime({
        status: "success",
        data: 123,
      });
      socketRoundTripTimeCard.render();

      expect(socketRoundTripTimeCard.pingTimeOf(123)).toBeInTheDocument();
      expect(socketRoundTripTimeCard.pingTimeUnits).toBeInTheDocument();
    });
  });

  describe("when the ping request fails", () => {
    it("shows an error message", () => {
      const socketRoundTripTimeCard = new SocketRoundTripTimeCardPage();
      socketRoundTripTimeCard.mockSocketRoundtripTime({ status: "error" });
      socketRoundTripTimeCard.render();
      expect(socketRoundTripTimeCard.pingFailedIcon).toBeInTheDocument();
    });
  });
});
