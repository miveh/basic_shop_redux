import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PageLoader } from "../components";
import Layout from "../components/layout/Layout";

const Home = React.lazy(() => import("../pages/Home"));
const ListProduct = React.lazy(() => import("../pages/products/ListProduct"));
const SinleProduct = React.lazy(() =>
  import("../pages/products/SingleProduct")
);
const Cart = React.lazy(() => import("../pages/cart/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <ListProduct />
          </React.Suspense>
        ),
      },
      {
        path: "/products/:productID",
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <SinleProduct />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<PageLoader />}>
            <Cart />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
