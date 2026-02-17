import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUtensils, FaClipboardList, FaUser } from "react-icons/fa";
import "./Bottombar.css";

function Bottombar() {
  const location = useLocation();

  return (
    <div
      className="bottom-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 99999,   
      }}
    >
      <Link to="/" className={location.pathname === "/" ? "item active" : "item"}>
        <FaHome />
        <span>Home</span>
      </Link>

      <Link to="/menu" className={location.pathname === "/menu" ? "item active" : "item"}>
        <FaUtensils />
        <span>Menu</span>
      </Link>

      <Link to="/order" className={location.pathname === "/order" ? "item active" : "item"}>
        <FaClipboardList />
        <span>Orders</span>
      </Link>

      <Link to="/profile" className={location.pathname === "/profile" ? "item active" : "item"}>
        <FaUser />
        <span>Profile</span>
      </Link>
    </div>
  );
}

export default Bottombar;