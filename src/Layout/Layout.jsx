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

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
