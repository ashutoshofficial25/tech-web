import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Works from "./pages/works";

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
]);

export default router;
