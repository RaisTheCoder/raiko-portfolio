import React from "react";
import { Outlet } from "react-router";
import "./Layout.css";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div id="layout">
      <Header />

      <main className="mt-17.5 md:mt-25">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
