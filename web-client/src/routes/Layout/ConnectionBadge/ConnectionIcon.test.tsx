import { expect, it } from "vitest";
import { ConnectionIconPage } from "./ConnectionIcon.page";
import "@testing-library/jest-dom/vitest";

it("shows the connecting badge", () => {
  const page = new ConnectionIconPage();
  page.render({ status: "connecting" });

  expect(page.connectingIcon).toBeInTheDocument();
  expect(page.errorConnectingIcon).not.toBeInTheDocument();
  expect(page.connectedIcon).not.toBeInTheDocument();
});

it("shows the connected badge", () => {
  const page = new ConnectionIconPage();
  page.render({ status: "connected" });

  expect(page.connectingIcon).not.toBeInTheDocument();
  expect(page.errorConnectingIcon).not.toBeInTheDocument();
  expect(page.connectedIcon).toBeInTheDocument();
});

it("shows the connection error badge", () => {
  const page = new ConnectionIconPage();
  page.render({ status: "error" });

  expect(page.connectingIcon).not.toBeInTheDocument();
  expect(page.errorConnectingIcon).toBeInTheDocument();
  expect(page.connectedIcon).not.toBeInTheDocument();
});
