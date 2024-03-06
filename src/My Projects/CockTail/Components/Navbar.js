// import React from "react";

// const Navbar = () => {
//   return <div></div>;
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/">Home</Link> */}
    </nav>
  );
};

export default Navbar;
