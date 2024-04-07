import { Layout } from "./routes/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

import { Socket } from "phoenix";
import { environment } from "./environment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
]);

function App() {
  const userSocket = new Socket(`${environment.apiBaseUrl}/socket`);
  userSocket.connect();
  userSocket.onOpen(() => console.log("open", userSocket));
  return <RouterProvider router={router} />;
}

export default App;
