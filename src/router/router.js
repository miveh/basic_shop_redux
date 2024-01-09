import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>...Loading</div>}>
        <Home />
      </React.Suspense>
    ),
  },
]);

export default router;
