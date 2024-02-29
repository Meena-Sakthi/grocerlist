import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        className="p-5 mt-10 rounded-2xl m-auto text-center bg-lime-600  flex item-center"
        onClick={() => setShow(!show)}
      >
        Show/Hide
      </button>
      {show && <Item />}
    </div>
  );
};

export default ShowHide;
