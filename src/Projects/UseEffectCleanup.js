import React from "react";
import { useState, useEffect } from "react";
//cleanup function is used to secure the function from getting slow with multiple re-renders
const UseEffectCleanup = () => {
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
      <h1>Window</h1>
      <h1>{size}</h1>
    </div>
  );
};

export default UseEffectCleanup;
