import React from "react";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Login from "../Pages/Login";

const Navbar = () => {
  return (
    <div>
      <Link to="/" element={<Home />}>
        Home
      </Link>
      <Link to="/about" element={<About />}>
        About
      </Link>
      <Link to="/login" element={<Login />}>
        Products
      </Link>
    </div>
  );
};

export default Navbar;
