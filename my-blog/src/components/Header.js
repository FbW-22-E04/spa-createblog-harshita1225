import React from "react";
import { Routes, Link, Route, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/createpost">
          <li>Create a Post</li>
        </Link>
        <Link to="/showpost">
          <li>Show Current Post</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
