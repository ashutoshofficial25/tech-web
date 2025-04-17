import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Works from "./pages/works";
import Apex from "./pages/apex";
import NotFound from "./pages/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "/works",
        Component: Works,
      },
    ],
  },
  {
    path: "/apex",
    Component: Apex,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
