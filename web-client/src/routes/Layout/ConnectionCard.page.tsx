import { render, screen } from "@support/utils";
import { ConnectionCard } from "./ConnectionBadge/ConnectionCard";

export class ConnectionCardPage {
  render() {
    render(<ConnectionCard />);
  }

  get pingHeader() {
    return screen.getByText("Ping");
  }

  get socketHeader() {
    return screen.getByText("Server");
  }
}
