import { Layout } from "./routes/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import { usePingRoundtripTime } from "./use-ping-roundtrip-time";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
]);

function App() {
  const roundTripTimeRequest = usePingRoundtripTime();
  console.log(roundTripTimeRequest.data);
  return <RouterProvider router={router} />;
}

export default App;
