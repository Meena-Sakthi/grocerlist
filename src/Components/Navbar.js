import React from "react";
import { Link } from "react-router-dom";
import Home from "../My Projects/Routers/Pages/Home";
import About from "../My Projects/Routers/Pages/About";
import Products from "../My Projects/Routers/Pages/Products";

const Navbar = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="text-2xl m-3 p-2 border border-red">
        <Link className=" text-2xl mr-10" to="/" element={<Home />}>
          Home
        </Link>
        <Link className=" text-2xl mr-10" to="/about" element={<About />}>
          About
        </Link>
        <Link className=" text-2xl mr-10" to="/products" element={<Products />}>
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
