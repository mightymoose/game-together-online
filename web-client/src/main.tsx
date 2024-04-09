import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client.ts";
import { SocketProvider } from "./lib/SocketProvider.tsx";
import { userSocket } from "./lib/socket.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SocketProvider socket={userSocket}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SocketProvider>
  </React.StrictMode>,
);
