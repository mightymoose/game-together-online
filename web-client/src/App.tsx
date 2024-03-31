import { Layout } from './routes/Layout';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from './routes/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
