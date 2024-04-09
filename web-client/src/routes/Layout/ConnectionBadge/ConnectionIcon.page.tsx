import { render, screen } from "@testing-library/react";
import { ConnectionStatus } from "./connection-status";
import { ConnectionIcon } from "./ConnectionIcon";

interface Props {
  status: ConnectionStatus;
}

export class ConnectionIconPage {
  render({ status }: Props) {
    render(<ConnectionIcon status={status} />);
  }

  get connectingIcon() {
    return screen.queryByLabelText("Connecting to the server");
  }

  get connectedIcon() {
    return screen.queryByLabelText("Connected to the server");
  }

  get errorConnectingIcon() {
    return screen.queryByLabelText(
      "There was an error connecting to the server",
    );
  }
}
