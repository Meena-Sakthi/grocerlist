import React from "react";
import { useState, useEffect } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <div>
      <h1>window</h1>
      <h2>{size} Px</h2>
    </div>
  );
};

export default Item;
