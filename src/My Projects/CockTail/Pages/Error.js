import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      {"404"}
      <Link to="/" className=" m-5 p-2 bg-orange-200 rounded-lg">
        Back To Home
      </Link>
    </div>
  );
}

export default Error;
