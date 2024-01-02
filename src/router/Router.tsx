import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Introduce from "../pages/Introduce/Introduce";
import App from "../App";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Product from "../pages/Product/Product";
import Details from "../pages/Product/Details/Details";

const Router: React.FunctionComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/introduce",
          element: <Introduce />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/products/:id",
          element: <Details />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
