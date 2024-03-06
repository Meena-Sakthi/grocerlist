import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About page....</h1>
      {"WELCOME TO ABOUT PAGE"}
      <Link to="/" className=" m-5 p-2 bg-green-200 rounded-lg">
        Go To Home
      </Link>
    </div>
  );
};

export default About;
