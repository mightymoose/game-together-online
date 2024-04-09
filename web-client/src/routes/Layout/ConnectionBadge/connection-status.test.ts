import { describe, it, expect } from "vitest";
import { connectionStatus } from "./connection-status";
import { QueryStatus } from "@tanstack/react-query";

describe("connectionStatus", () => {
  it("should return 'connected' if all ping requests are successful", () => {
    const pingRequests = [
      { status: "success" as QueryStatus },
      { status: "success" as QueryStatus },
      { status: "success" as QueryStatus },
    ];
    const result = connectionStatus(pingRequests);
    expect(result).toBe("connected");
  });

  it("should return 'error' if any ping request fails", () => {
    const pingRequests = [
      { status: "pending" as QueryStatus },
      { status: "error" as QueryStatus },
      { status: "success" as QueryStatus },
    ];
    const result = connectionStatus(pingRequests);
    expect(result).toBe("error");
  });

  it("should return 'connecting' if there are pending ping requests", () => {
    const pingRequests = [
      { status: "success" as QueryStatus },
      { status: "success" as QueryStatus },
      { status: "pending" as QueryStatus },
    ];
    const result = connectionStatus(pingRequests);
    expect(result).toBe("connecting");
  });
});
