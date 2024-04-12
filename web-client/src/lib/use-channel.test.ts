import { Mock, expect, it, vi, describe } from "vitest";
import { useSocket } from "@/lib/use-socket";
import { useChannel } from "./use-channel";
import { renderHook } from "@testing-library/react";

vi.mock("@/lib/socket");
vi.mock("./use-socket");

describe("useChannel", () => {
  const useSocketMock = useSocket as Mock;

  it("reuses existing channel if it exists", () => {
    const fakeChannel = { topic: "topic" };
    const fakeSocket = { channels: [fakeChannel], isConnected: () => true };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    const { result } = renderHook(() => useChannel("topic"));
    expect(result.current.channel).toBe(fakeChannel);
  });

  it("creates a new channel if it does not exist", () => {
    const fakeChannel = { topic: "topic" };
    const channel = vi.fn(() => fakeChannel);
    const fakeSocket = { channels: [], isConnected: () => true, channel };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    const { result } = renderHook(() => useChannel("topic"));

    expect(channel).toHaveBeenCalledWith("topic");
    expect(result.current.channel).toBe(fakeChannel);
  });

  it("does not join the channel if the socket is not connected", () => {
    const receive = vi.fn();
    receive.mockReturnValue({ receive });
    const join = vi.fn(() => ({ receive }));
    const fakeChannel = { topic: "topic", join, state: "closed" };
    const fakeSocket = { channels: [fakeChannel], isConnected: () => false };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    renderHook(() => useChannel("topic"));
    expect(join).not.toHaveBeenCalled();
  });

  it("does not join the channel unless it is closed", () => {
    const receive = vi.fn();
    receive.mockReturnValue({ receive });
    const join = vi.fn(() => ({ receive }));
    const fakeChannel = { topic: "topic", join };
    const fakeSocket = { channels: [fakeChannel], isConnected: () => true };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    renderHook(() => useChannel("topic"));
    expect(join).not.toHaveBeenCalled();
  });

  it("joins the channel if the socket is connected and the channel is not closed", () => {
    const receive = vi.fn();
    receive.mockReturnValue({ receive });
    const join = vi.fn(() => ({ receive }));
    const fakeChannel = { topic: "topic", join, state: "closed" };
    const fakeSocket = { channels: [fakeChannel], isConnected: () => true };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    renderHook(() => useChannel("topic"));
    expect(join).toHaveBeenCalled();
  });

  it("resolves the connection when it receives an ok message", async () => {
    const receive = vi.fn();
    receive.mockReturnValue({ receive });
    const join = vi.fn(() => ({ receive }));
    const fakeChannel = { topic: "topic", join, state: "closed" };
    const fakeSocket = { channels: [fakeChannel], isConnected: () => true };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    const { result } = renderHook(() => useChannel("topic"));

    const original = result.current;
    const { channel: originalChannel, connection: originalConnection } =
      original;

    const okCall = receive.mock.calls.find(
      ([type]: Array<unknown>) => type === "ok",
    );
    const callback = okCall?.at(1) ?? function () {};

    callback();

    await originalConnection;

    expect(result.current.channel).toBe(originalChannel);
    expect(result.current.connection).toBe(originalConnection);
  });

  it("resolves the connection when it receives an error message", async () => {
    const receive = vi.fn();
    receive.mockReturnValue({ receive });
    const join = vi.fn(() => ({ receive }));
    const fakeChannel = { topic: "topic", join, state: "closed" };
    const fakeSocket = { channels: [fakeChannel], isConnected: () => true };
    useSocketMock.mockReturnValue({ socket: fakeSocket });
    const { result } = renderHook(() => useChannel("topic"));

    const original = result.current;
    const { channel: originalChannel, connection: originalConnection } =
      original;

    const okCall = receive.mock.calls.find(
      ([type]: Array<unknown>) => type === "error",
    );
    const callback = okCall?.at(1) ?? function () {};

    callback();

    await originalConnection;

    expect(result.current.channel).toBe(originalChannel);
    expect(result.current.connection).toBe(originalConnection);
  });
});
