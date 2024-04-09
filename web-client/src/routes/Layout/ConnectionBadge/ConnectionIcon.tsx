import { FC } from "react";
import { ConnectionStatus } from "./connection-status";
import { RadioTower } from "lucide-react";

interface Props {
  status: ConnectionStatus;
}

export const ConnectionIcon: FC<Props> = ({ status }) => {
  const badges = {
    connecting: {
      style: "text-blue-500",
      label: "Connecting to the server",
    },
    connected: {
      style: "text-green-500",
      label: "Connected to the server",
    },
    error: {
      style: "text-red-500",
      label: "There was an error connecting to the server",
    },
  };

  return (
    <RadioTower
      className={`h-4 w-4 ${badges[status].style}`}
      aria-label={badges[status].label}
    />
  );
};
