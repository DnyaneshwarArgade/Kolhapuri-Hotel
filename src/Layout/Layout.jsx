import React from "react";
import { Outlet } from "react-router-dom";
import Bottombar from "../Components/Bottombar/Bottombar";
import "./Layout.css";

const Layout = () => {
  return (

    <div className="layout-container">
      
      <main className="content-layout">
        <Outlet />
      </main>

      <Bottombar />
    </div>
  );
};

export default Layout;
