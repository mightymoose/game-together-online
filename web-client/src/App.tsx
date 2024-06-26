import { Layout } from "./routes/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import { GameTable } from "./routes/GameTable";

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
