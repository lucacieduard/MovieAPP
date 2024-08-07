import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import "./index.scss";
import MoviesSeriesPage from "./pages/Movies_Series/MoviesSeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies-and-series",
        element: <MoviesSeriesPage />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
