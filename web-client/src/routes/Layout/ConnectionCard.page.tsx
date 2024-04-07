import { render, screen } from "@support/utils";
import { ConnectionCard } from "./ConnectionCard";

export class ConnectionCardPage {
  render() {
    render(<ConnectionCard />);
  }

  get pingHeader() {
    return screen.getByText("Ping");
  }
}
