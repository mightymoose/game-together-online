import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import LandingPage from "./LandingPage";
import { GameTable } from "./GameTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/games/:id/table", element: <GameTable /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
