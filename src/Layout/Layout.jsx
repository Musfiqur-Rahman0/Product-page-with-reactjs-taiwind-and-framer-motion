import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Breadcrumbs from "../Components/Breadcrumb";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
