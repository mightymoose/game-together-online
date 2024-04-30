import { Layout } from "./routes/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import { Spades } from "./routes/games/Spades";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/games/:id", element: <Spades /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
