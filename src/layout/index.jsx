import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {<Outlet />}
      <Footer />
    </>
  );
};

export default Layout;
