import { it, vi, expect } from "vitest";
import { SocketProvider } from "./SocketProvider";
import { renderHook, waitFor } from "@testing-library/react";
import { useSocket } from "./use-socket";
import { userSocket } from "@/lib/socket";
import React from "react";

vi.mock("@/lib/socket");

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <SocketProvider socket={userSocket}>{children}</SocketProvider>
);

it("provides the socket", () => {
  const { result } = renderHook(() => useSocket(), { wrapper });

  expect(result.current).toEqual({ socket: userSocket });
});

it("updates the socket when it closes", async () => {
  const onCloseMock = vi.spyOn(userSocket, "onClose");
  const { result } = renderHook(() => useSocket(), { wrapper });

  const { socket } = result.current;
  expect(socket.onClose).toHaveBeenCalledTimes(1);

  const currentResult = result.current;

  const onCloseCallback = onCloseMock?.mock?.lastCall?.at(0) ?? vi.fn();
  onCloseCallback({} as unknown as CloseEvent);

  expect(result.current).toEqual({ socket: userSocket });
  await waitFor(() => expect(result.current).not.toBe(currentResult));
});

it("updates the socket when it opens", async () => {
  const onOpenMock = vi.spyOn(userSocket, "onOpen");
  const { result } = renderHook(() => useSocket(), { wrapper });

  const { socket } = result.current;
  expect(socket.onOpen).toHaveBeenCalledTimes(1);

  const currentResult = result.current;

  const onOpenCallback = onOpenMock?.mock?.lastCall?.at(0) ?? vi.fn();
  onOpenCallback();

  expect(result.current).toEqual({ socket: userSocket });
  await waitFor(() => expect(result.current).not.toBe(currentResult));
});
