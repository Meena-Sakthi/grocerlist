import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* {"WELCOME...HOMEPAGE"}
      <Link to="/about" className=" m-5 p-2 bg-red-200 rounded-lg">
        GoTo About
      </Link> */}
    </div>
  );
};

export default Home;
