import React from "react";
import { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const bcg = rgb.join(",");
  let hexx = rgbToHex(...rgb);
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <section
        key={index}
        className={
          index >= 10 ? "text-white w-32 h-24" : "text-black  w-32 h-24"
        }
        style={{ backgroundColor: `rgb(${bcg})` }}
      >
        <div>
          <p>{weight}%</p>

          <p>{hexx}</p>
        </div>
      </section>
    </div>
  );
};

export default SingleColor;
