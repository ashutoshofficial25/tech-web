import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen text-black bg-white">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
