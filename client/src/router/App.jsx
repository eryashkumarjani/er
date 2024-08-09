import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Resume = lazy(() => import("../pages/resume/Resume"));
const Contact = lazy(() => import("../pages/contact/Contact"));
import NotFound from "../components/notFound/NotFound";
import Layout from "../pages/layout/Layout";
import Loader from "../components/loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<Loader />}>
            <Resume />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />{" "}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
