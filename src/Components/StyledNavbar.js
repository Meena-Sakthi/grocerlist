import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import Home from "../My Projects/Routers/Pages/Home";
import About from "../My Projects/Routers/Pages/About";
import Products from "../My Projects/Routers/Pages/Products";
import Login from "../My Projects/Routers/Pages/Login";

const Navbar = () => {
  return (
    <div className="m-5 p-3">
      <NavLink className="m-5 p-3" to="/" element={<Home />}>
        Home
      </NavLink>
      <NavLink className="m-5 p-3" to="/about" element={<About />}>
        About
      </NavLink>
      <NavLink className="m-5 p-3" to="/products" element={<Products />}>
        Products
      </NavLink>
      <NavLink className="m-5 p-3" to="/login" element={<Login />}>
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
