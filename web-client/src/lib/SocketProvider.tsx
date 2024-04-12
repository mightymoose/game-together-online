import { Socket } from "phoenix";
import { userSocket } from "@/lib/socket";
import React from "react";

interface BoxedSocket {
  socket: Socket;
}

export const SocketContext = React.createContext<BoxedSocket>({
  socket: userSocket,
});

export const SocketProvider = ({
  socket,
  children,
}: {
  socket: Socket;
  children: React.ReactNode;
}) => {
  const [boxedSocket, setBoxedSocket] = React.useState<BoxedSocket>({ socket });

  React.useEffect(() => {
    socket.onClose(() => setBoxedSocket({ socket }));
    socket.onOpen(() => setBoxedSocket({ socket }));
  }, [socket]);

  return (
    <SocketContext.Provider value={boxedSocket}>
      {children}
    </SocketContext.Provider>
  );
};
